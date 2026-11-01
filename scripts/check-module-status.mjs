#!/usr/bin/env node
// Checks that modules/status.json (the single machine-readable source of
// module status) agrees with modules/README.md and every module's front matter.
// dreammachine.systems/source reads modules/status.json at build time, so a
// mismatch here would put a wrong status on the website.
// Usage: node scripts/check-module-status.mjs   (no dependencies)

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const fail = (msg) => errors.push(msg);

const STATUSES = ['PLANNED', 'DRAFT', 'STABLE'];
const BRIEFING_BASE = 'https://www.dreammachine.systems/briefings/';

// 1. status.json itself
let data;
try {
  data = JSON.parse(readFileSync(join(root, 'modules/status.json'), 'utf8'));
} catch (e) {
  console.error(`modules/status.json: ${e.message}`);
  process.exit(1);
}

if (data.schema_version !== 1) fail('status.json: schema_version must be 1');
if (!/^v\d+\.\d+\.\d+$/.test(data.build ?? '')) fail('status.json: build must look like v0.9.5');
const valueKeys = Object.keys(data.status_values ?? {});
if (valueKeys.join() !== STATUSES.join()) fail(`status.json: status_values must be exactly ${STATUSES.join(', ')}`);

const modules = Array.isArray(data.modules) ? data.modules : [];
if (modules.length !== 12) fail(`status.json: expected 12 modules, found ${modules.length}`);

const ALLOWED_KEYS = ['id', 'title', 'book_ref', 'status', 'path', 'briefing'];
modules.forEach((m, i) => {
  const where = `status.json modules[${i}]`;
  const expectedId = String(i + 1).padStart(2, '0');
  const extra = Object.keys(m).filter((k) => !ALLOWED_KEYS.includes(k));
  if (extra.length) fail(`${where}: unknown keys ${extra.join(', ')}`);
  if (m.id !== expectedId) fail(`${where}: id must be "${expectedId}" (ascending, zero-padded), got "${m.id}"`);
  if (typeof m.title !== 'string' || !m.title.trim()) fail(`${where}: title missing`);
  if (typeof m.book_ref !== 'string' || !m.book_ref.trim()) fail(`${where}: book_ref missing`);
  if (!STATUSES.includes(m.status)) fail(`${where}: status must be one of ${STATUSES.join(', ')}, got "${m.status}"`);
  if (m.briefing !== `ch${i + 1}`) fail(`${where}: briefing must be "ch${i + 1}"`);
  if (m.path !== null) {
    if (typeof m.path !== 'string' || !new RegExp(`^modules/${expectedId}-[a-z0-9-]+/$`).test(m.path)) {
      fail(`${where}: path must be null or "modules/${expectedId}-<slug>/"`);
    } else if (!existsSync(join(root, m.path, 'README.md'))) {
      fail(`${where}: ${m.path}README.md does not exist`);
    }
  }
  if (m.status !== 'PLANNED' && m.path === null) fail(`${where}: status ${m.status} needs a module directory (path)`);
});

// 2. every module directory is listed, and its front matter agrees
const dirs = readdirSync(join(root, 'modules')).filter((d) => statSync(join(root, 'modules', d)).isDirectory());
for (const dir of dirs) {
  const path = `modules/${dir}/`;
  const m = modules.find((x) => x.path === path);
  if (!m) {
    fail(`${path}: directory is not listed in status.json`);
    continue;
  }
  const readmePath = join(root, path, 'README.md');
  if (!existsSync(readmePath)) continue; // reported above
  const fm = readFileSync(readmePath, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) {
    fail(`${path}README.md: YAML front matter missing`);
    continue;
  }
  const field = (k) => (fm[1].match(new RegExp(`^${k}:\\s*(.+?)\\s*$`, 'm')) ?? [])[1];
  if (field('id') !== dir) fail(`${path}README.md: front matter id "${field('id')}" must be "${dir}"`);
  if (field('title') !== m.title) fail(`${path}README.md: front matter title "${field('title')}" != status.json "${m.title}"`);
  if (field('spec_status') !== m.status) fail(`${path}README.md: spec_status "${field('spec_status')}" != status.json "${m.status}"`);
}

// 3. the table in modules/README.md mirrors status.json row by row
const readme = readFileSync(join(root, 'modules/README.md'), 'utf8');
const rows = readme
  .split(/\r?\n/)
  .filter((l) => /^\|\s*\d{2}\s*\|/.test(l))
  .map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
if (rows.length !== modules.length) fail(`modules/README.md: table has ${rows.length} module rows, status.json has ${modules.length}`);
rows.forEach((cells, i) => {
  const m = modules[i];
  if (!m) return;
  const where = `modules/README.md row ${cells[0]}`;
  const [id, name, book, status, briefing] = cells;
  const relPath = m.path ? m.path.replace(/^modules\//, '') : null;
  const expectedName = relPath ? `[${m.title}](${relPath})` : m.title;
  if (id !== m.id) fail(`${where}: id order differs from status.json (expected ${m.id})`);
  if (name !== expectedName) fail(`${where}: module cell "${name}" != expected "${expectedName}"`);
  if (book !== m.book_ref) fail(`${where}: book cell "${book}" != status.json "${m.book_ref}"`);
  if (status !== `\`${m.status}\``) fail(`${where}: status cell ${status} != status.json \`${m.status}\``);
  if (briefing !== `[${m.briefing}](${BRIEFING_BASE}${m.briefing})`) fail(`${where}: briefing link does not match status.json "${m.briefing}"`);
});

if (errors.length) {
  console.error(`Module status check failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`Module status OK: ${modules.length} modules, ${modules.filter((m) => m.status !== 'PLANNED').length} with a spec.`);

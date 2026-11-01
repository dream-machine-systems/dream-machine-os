#!/usr/bin/env node
// Checks that spec-status.json (the machine-readable status of the specs
// outside modules/: System Directories A-K, the Deployment Runbook and the
// Operational Toolkit) agrees with the front matter of every spec page and
// with the table in directories/README.md.
// dreammachine.systems/source reads spec-status.json at build time, so a
// mismatch here would put a wrong status on the website.
// Usage: node scripts/check-spec-status.mjs   (no dependencies)

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const fail = (msg) => errors.push(msg);
const read = (p) => readFileSync(join(root, p), 'utf8');

const STATUSES = ['PLANNED', 'DRAFT', 'STABLE'];
const GROUPS = ['directory', 'runbook', 'toolkit'];
const DIRECTORY_IDS = 'ABCDEFGHIJK'.split('');
const ALLOWED_KEYS = ['id', 'group', 'title', 'book_ref', 'partition', 'status', 'path', 'see', 'briefing'];

let data;
try {
  data = JSON.parse(read('spec-status.json'));
} catch (e) {
  console.error(`spec-status.json: ${e.message}`);
  process.exit(1);
}
const modulesStatus = JSON.parse(read('modules/status.json'));

// 1. top level
if (data.schema_version !== 1) fail('spec-status.json: schema_version must be 1');
if (data.build !== modulesStatus.build) fail(`spec-status.json: build "${data.build}" != modules/status.json "${modulesStatus.build}"`);
if (JSON.stringify(data.status_values) !== JSON.stringify(modulesStatus.status_values)) {
  fail('spec-status.json: status_values must equal modules/status.json');
}
if (Object.keys(data.groups ?? {}).join() !== GROUPS.join()) fail(`spec-status.json: groups must be exactly ${GROUPS.join(', ')}`);

// 2. entries
const entries = Array.isArray(data.entries) ? data.entries : [];
const dirEntries = entries.filter((x) => x.group === 'directory');
if (dirEntries.map((x) => x.id).join() !== DIRECTORY_IDS.join()) {
  fail(`spec-status.json: directory entries must be ${DIRECTORY_IDS.join(', ')} in this order`);
}
const ids = new Set();
entries.forEach((x, i) => {
  const where = `spec-status.json entries[${i}] (${x.id})`;
  const extra = Object.keys(x).filter((k) => !ALLOWED_KEYS.includes(k));
  if (extra.length) fail(`${where}: unknown keys ${extra.join(', ')}`);
  if (ids.has(x.id)) fail(`${where}: duplicate id`);
  ids.add(x.id);
  if (!GROUPS.includes(x.group)) fail(`${where}: group must be one of ${GROUPS.join(', ')}`);
  if (x.group !== 'directory' && x.id !== x.group) fail(`${where}: id must equal its group "${x.group}"`);
  if (typeof x.title !== 'string' || !x.title.trim()) fail(`${where}: title missing`);
  if (typeof x.book_ref !== 'string' || !x.book_ref.trim()) fail(`${where}: book_ref missing`);
  if (x.group === 'directory' ? !['I', 'II', 'III'].includes(x.partition) : x.partition !== null) {
    fail(`${where}: partition must be I, II or III for a directory, null otherwise`);
  }
  if (x.briefing !== null && !/^[a-z0-9]+$/.test(x.briefing ?? '')) fail(`${where}: briefing must be null or a short link id`);

  if (x.status === null) {
    // Not specified here: needs a pointer, no path.
    if (x.path !== null) fail(`${where}: an entry without status has no path`);
    if (!x.see || typeof x.see.label !== 'string' || !x.see.label.trim()) fail(`${where}: an entry without status needs see.label`);
    else if (x.see.url !== null) {
      const url = x.see.url;
      if (!/^https:\/\//.test(url) && !existsSync(join(root, url))) fail(`${where}: see.url "${url}" is neither https nor a repository path`);
    }
    return;
  }
  if (!STATUSES.includes(x.status)) fail(`${where}: status must be null or one of ${STATUSES.join(', ')}`);
  if (x.see !== null) fail(`${where}: an entry with status has see: null`);
  if (typeof x.path !== 'string' || !x.path.endsWith('/') || !existsSync(join(root, x.path, 'README.md'))) {
    fail(`${where}: path "${x.path}" must be a folder with a README.md`);
    return;
  }
  const fm = read(join(x.path, 'README.md')).match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) {
    fail(`${x.path}README.md: YAML front matter missing`);
    return;
  }
  const field = (k) => (fm[1].match(new RegExp(`^${k}:\\s*(.+?)\\s*$`, 'm')) ?? [])[1];
  if (field('title') !== x.title) fail(`${x.path}README.md: front matter title "${field('title')}" != spec-status.json "${x.title}"`);
  if (field('spec_status') !== x.status) fail(`${x.path}README.md: spec_status "${field('spec_status')}" != spec-status.json "${x.status}"`);
});

// 3. every spec folder is listed
const listed = new Set(entries.map((x) => x.path).filter(Boolean));
const folders = readdirSync(join(root, 'directories'))
  .filter((d) => statSync(join(root, 'directories', d)).isDirectory())
  .map((d) => `directories/${d}/`)
  .concat(['runbook/', 'toolkit/'].filter((p) => existsSync(join(root, p))));
for (const f of folders) if (!listed.has(f)) fail(`${f}: folder is not listed in spec-status.json`);

// 4. the map in directories/README.md mirrors the status column
const rows = read('directories/README.md')
  .split(/\r?\n/)
  .filter((l) => /^\|\s*[A-K]\s*\|/.test(l))
  .map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
if (rows.length !== DIRECTORY_IDS.length) fail(`directories/README.md: map has ${rows.length} rows, expected ${DIRECTORY_IDS.length}`);
rows.forEach((cells) => {
  const x = dirEntries.find((e) => e.id === cells[0]);
  if (!x) return;
  const expected = x.status ? `\`${x.status}\`` : '–';
  if (cells[2] !== x.partition) fail(`directories/README.md row ${cells[0]}: partition ${cells[2]} != spec-status.json ${x.partition}`);
  if (cells[4] !== expected) fail(`directories/README.md row ${cells[0]}: status cell ${cells[4]} != spec-status.json ${expected}`);
});

if (errors.length) {
  console.error(`Spec status check failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
const specified = entries.filter((x) => x.status);
console.log(`Spec status OK: ${entries.length} entries, ${specified.length} specified in this repository.`);

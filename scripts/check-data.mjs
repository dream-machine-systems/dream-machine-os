#!/usr/bin/env node
// Checks the machine-readable data of the specification and the references
// between its parts: errors/registry.json, glossary/*.md, audit/*.json,
// deck/cards.json and the error tables in modules/*/README.md.
// dreammachine.systems reads these files from main at build time, so a broken
// reference here would break a page on the website.
// Usage: node scripts/check-data.mjs   (no dependencies)

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const fail = (msg) => errors.push(msg);
const readJson = (rel) => {
  try {
    return JSON.parse(readFileSync(join(root, rel), 'utf8'));
  } catch (e) {
    fail(`${rel}: ${e.message}`);
    return null;
  }
};

const status = readJson('modules/status.json');
const moduleIds = new Set((status?.modules ?? []).map((m) => m.id));
const modulePath = Object.fromEntries((status?.modules ?? []).map((m) => [m.id, m.path]));
const HTML = /<\/?[a-z][^>]*>/i;

// 1. Glossary: one Markdown file per term with front matter.
const CATEGORIES = ['Core Architecture', 'Protocols & Software', 'Bugs & Vulnerabilities', 'Hardware & Telemetry'];
const glossary = new Map();
for (const file of readdirSync(join(root, 'glossary')).filter((f) => f.endsWith('.md') && f !== 'README.md')) {
  const where = `glossary/${file}`;
  const id = file.replace(/\.md$/, '');
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) fail(`${where}: file name must be kebab-case`);
  const text = readFileSync(join(root, 'glossary', file), 'utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fm) {
    fail(`${where}: YAML front matter missing`);
    continue;
  }
  const meta = {};
  for (const line of fm[1].split(/\r?\n/)) {
    const m = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!m) {
      fail(`${where}: cannot parse front matter line "${line}"`);
      continue;
    }
    try {
      meta[m[1]] = JSON.parse(m[2]);
    } catch {
      fail(`${where}: ${m[1]} must be a double-quoted string, a list or null`);
    }
  }
  for (const key of ['term', 'category', 'modules', 'error_code', 'book_ref', 'short']) {
    if (!(key in meta)) fail(`${where}: front matter key "${key}" missing`);
  }
  const allowed = ['term', 'legacy_syntax', 'category', 'modules', 'error_code', 'book_ref', 'short'];
  for (const key of Object.keys(meta)) if (!allowed.includes(key)) fail(`${where}: unknown key "${key}"`);
  if (!CATEGORIES.includes(meta.category)) fail(`${where}: category must be one of ${CATEGORIES.join(', ')}`);
  if (!Array.isArray(meta.modules)) fail(`${where}: modules must be a list`);
  else for (const m of meta.modules) if (!moduleIds.has(m)) fail(`${where}: unknown module "${m}"`);
  if (typeof meta.short !== 'string' || !meta.short.trim()) fail(`${where}: short definition missing`);
  if (!fm[2].trim()) fail(`${where}: definition body missing`);
  if (HTML.test(fm[2])) fail(`${where}: HTML in the definition, use Markdown`);
  glossary.set(id, meta);
}

// 2. Error registry.
const registry = readJson('errors/registry.json');
const codes = new Map();
if (registry) {
  if (registry.schema_version !== 1) fail('errors/registry.json: schema_version must be 1');
  const hexes = [];
  for (const [i, e] of (registry.errors ?? []).entries()) {
    const where = `errors/registry.json errors[${i}] (${e.code})`;
    if (!/^[A-Z0-9]+(_[A-Z0-9]+)*$/.test(e.code ?? '')) fail(`${where}: code must be UPPER_SNAKE_CASE`);
    if (codes.has(e.code)) fail(`${where}: duplicate code`);
    codes.set(e.code, e);
    if (typeof e.name !== 'string' || !e.name.trim()) fail(`${where}: name missing`);
    if (typeof e.book_ref !== 'string' || !e.book_ref.trim()) fail(`${where}: book_ref missing`);
    if (e.module !== null && !moduleIds.has(e.module)) fail(`${where}: unknown module "${e.module}"`);
    for (const m of e.also ?? []) if (!moduleIds.has(m)) fail(`${where}: unknown module "${m}" in also`);
    if (e.hex !== null) {
      if (!/^0x[0-9A-F]{2}$/.test(e.hex)) fail(`${where}: hex must look like 0x01`);
      hexes.push(e.hex);
    }
    if (e.glossary !== null) {
      const g = glossary.get(e.glossary);
      if (!g) fail(`${where}: glossary/${e.glossary}.md does not exist`);
      else if (g.error_code !== e.code) fail(`${where}: glossary/${e.glossary}.md must have error_code "${e.code}"`);
      if (e.summary !== null) fail(`${where}: summary must be null when a glossary entry exists`);
    } else if (typeof e.summary !== 'string' || !e.summary.trim()) {
      fail(`${where}: summary required when there is no glossary entry`);
    }
  }
  if (new Set(hexes).size !== hexes.length) fail('errors/registry.json: duplicate hex code');
  const sorted = [...codes.keys()].slice().sort();
  if (sorted.join() !== [...codes.keys()].join()) fail('errors/registry.json: errors must be sorted by code');
}
for (const [id, g] of glossary) {
  if (g.error_code !== null && g.error_code !== undefined && codes.get(g.error_code)?.glossary !== id) {
    fail(`glossary/${id}.md: error_code "${g.error_code}" does not point back to this file in the registry`);
  }
}

// 3. Audit logs: one JSON file per chapter or directory, keyed by section ID.
const TIERS = ['CONSENSUS', 'EMERGING', 'EXPERIMENTAL'];
const sections = new Set();
for (const file of readdirSync(join(root, 'audit')).filter((f) => f.endsWith('.json'))) {
  const where = `audit/${file}`;
  const doc = readJson(where);
  if (!doc) continue;
  if (doc.schema_version !== 1) fail(`${where}: schema_version must be 1`);
  if (doc.module !== null && !moduleIds.has(doc.module)) fail(`${where}: unknown module "${doc.module}"`);
  for (const [sid, a] of Object.entries(doc.entries ?? {})) {
    const w = `${where} ${sid}`;
    if (!/^sec[A-Za-z0-9]+([-_][A-Za-z0-9]+)*$/.test(sid)) fail(`${w}: section ID must look like sec1-8-1`);
    if (sections.has(sid)) fail(`${w}: section ID used twice`);
    sections.add(sid);
    for (const key of ['title', 'core_claim', 'query', 'summary']) {
      if (typeof a[key] !== 'string' || !a[key].trim()) fail(`${w}: ${key} missing`);
      else if (HTML.test(a[key])) fail(`${w}: HTML in ${key}, use Markdown`);
    }
    if (!TIERS.includes(a.tier)) fail(`${w}: tier must be one of ${TIERS.join(', ')}`);
    if (!['ON', 'OFF', 'N/A'].includes(a.controlled_studies)) fail(`${w}: controlled_studies must be ON, OFF or N/A`);
    if (!Array.isArray(a.primary_anchors) || !a.primary_anchors.length) fail(`${w}: primary_anchors missing`);
    if (!/^https:\/\//.test(a.full_audit ?? '')) fail(`${w}: full_audit must be an https URL`);
  }
}

// 4. Deck mapping.
const deck = readJson('deck/cards.json');
if (deck) {
  const SUITS = { core: 22, cpu: 14, net: 14, sys: 14, disk: 14 };
  const seen = new Set();
  for (const [i, c] of (deck.cards ?? []).entries()) {
    const where = `deck/cards.json cards[${i}] (${c.id})`;
    if (!(c.suit in SUITS)) fail(`${where}: unknown suit "${c.suit}"`);
    if (c.id !== `${c.suit}-${c.num}`) fail(`${where}: id must be {suit}-{num}`);
    if (seen.has(c.id)) fail(`${where}: duplicate id`);
    seen.add(c.id);
    const expected = deck.deck_modules?.[c.deck_module];
    if (!expected) fail(`${where}: unknown deck_module "${c.deck_module}"`);
    else if (expected.join() !== (c.modules ?? []).join()) fail(`${where}: modules must equal deck_modules.${c.deck_module}`);
    for (const m of c.modules ?? []) if (!moduleIds.has(m)) fail(`${where}: unknown module "${m}"`);
    for (const code of c.errors ?? []) if (!codes.has(code)) fail(`${where}: unknown error code "${code}"`);
    if (!/^https:\/\/www\.dreammachine\.systems\/deck\//.test(c.url ?? '')) fail(`${where}: url must point to dreammachine.systems/deck`);
  }
  for (const [suit, n] of Object.entries(SUITS)) {
    const count = (deck.cards ?? []).filter((c) => c.suit === suit).length;
    if (count !== n) fail(`deck/cards.json: suit ${suit} has ${count} cards, expected ${n}`);
  }
}

// 5. Module error tables mirror the registry.
for (const [id, path] of Object.entries(modulePath)) {
  if (!path || !existsSync(join(root, path, 'README.md'))) continue;
  const text = readFileSync(join(root, path, 'README.md'), 'utf8');
  const section = text.split(/^## 5\. Error Codes$/m)[1]?.split(/^## /m)[0];
  if (section === undefined) {
    fail(`${path}README.md: section "## 5. Error Codes" missing`);
    continue;
  }
  const listed = [...section.matchAll(/^\| `([A-Z0-9_]+)` \|/gm)].map((m) => m[1]);
  const owned = [...codes.values()].filter((e) => e.module === id).map((e) => e.code);
  for (const code of listed) {
    if (!codes.has(code)) fail(`${path}README.md: error code ${code} is not in errors/registry.json`);
    else if (codes.get(code).module !== id) fail(`${path}README.md: ${code} belongs to module ${codes.get(code).module}`);
  }
  for (const code of owned) if (!listed.includes(code)) fail(`${path}README.md: owned code ${code} missing from the table`);
}

if (errors.length) {
  console.error(`Data check failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`Data OK: ${glossary.size} glossary terms, ${codes.size} error codes, ${sections.size} audit sections, ${deck?.cards?.length ?? 0} deck cards.`);

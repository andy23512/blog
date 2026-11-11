/**
 * Verifies that the files meant to be byte-identical across the two blog
 * editions (`blog` and `blog-zh-tw`) really are. Edition-specific values
 * belong in `site.config.ts`, `_config.yml` and `_config.next.yml`, which are
 * deliberately NOT checked here.
 *
 * Usage:   yarn check:sync [--sibling <path>]
 * Exit:    0 = in sync, 1 = differences found, 2 = usage / environment error.
 *
 * This file itself lives in `bin/`, so it must stay byte-identical too.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { basename, join, resolve } from "path";

const EDITIONS = ["blog", "blog-zh-tw"];

/** Directories whose whole contents must be identical. */
const SHARED_DIRS = ["bin", "model", "util", "scripts", "scaffolds"];

/** Individual files that must be identical. */
const SHARED_FILES = [
  ".eslintrc.js",
  ".github/dependabot.yml",
  ".github/workflows/pages.yml",
  ".gitignore",
  ".gitlab-ci.yml",
  "LICENSE",
  "_config.landscape.yml",
  "package.json",
  "tsconfig.json",
  "yarn.lock",
];

const IGNORED_NAMES = new Set([".DS_Store"]);

function listFiles(root: string, relDir: string): string[] {
  const absDir = join(root, relDir);
  if (!existsSync(absDir)) return [];
  const result: string[] = [];
  for (const name of readdirSync(absDir)) {
    if (IGNORED_NAMES.has(name)) continue;
    const rel = `${relDir}/${name}`;
    if (statSync(join(root, rel)).isDirectory()) {
      result.push(...listFiles(root, rel));
    } else {
      result.push(rel);
    }
  }
  return result;
}

function fail(message: string): never {
  console.error(message);
  process.exit(2);
}

const self = process.cwd();
const selfName = basename(self);
const siblingFlag = process.argv.indexOf("--sibling");

let sibling: string;
if (siblingFlag !== -1) {
  const value = process.argv[siblingFlag + 1];
  if (!value) fail("--sibling needs a path");
  sibling = resolve(value);
} else {
  const other = EDITIONS.find((e) => e !== selfName);
  if (!EDITIONS.includes(selfName) || !other) {
    fail(
      `Run this from one of ${EDITIONS.join(" / ")}, or pass --sibling <path>.`,
    );
  }
  sibling = resolve(self, "..", other);
}
if (!existsSync(sibling) || !statSync(sibling).isDirectory()) {
  fail(`Sibling directory not found: ${sibling}`);
}
const siblingName = basename(sibling);

const paths = new Set<string>();
for (const dir of SHARED_DIRS) {
  for (const root of [self, sibling]) {
    for (const file of listFiles(root, dir)) paths.add(file);
  }
}
for (const file of SHARED_FILES) paths.add(file);

const problems: string[] = [];
for (const rel of [...paths].sort()) {
  const inSelf = existsSync(join(self, rel));
  const inSibling = existsSync(join(sibling, rel));
  if (!inSelf && !inSibling) {
    problems.push(`missing in both : ${rel} (stale entry in SHARED_FILES?)`);
  } else if (inSelf && !inSibling) {
    problems.push(`only in ${selfName} : ${rel}`);
  } else if (!inSelf && inSibling) {
    problems.push(`only in ${siblingName} : ${rel}`);
  } else if (
    !readFileSync(join(self, rel)).equals(readFileSync(join(sibling, rel)))
  ) {
    problems.push(`differs         : ${rel}`);
  }
}

if (problems.length === 0) {
  console.log(
    `OK: ${paths.size} shared files are identical (${selfName} vs ${siblingName}).`,
  );
} else {
  console.error(
    `NOT in sync (${selfName} vs ${siblingName}): ${problems.length} problem(s)`,
  );
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

# CLAUDE.md

## What this is

Tangent's Blog — the English edition of an unofficial CharaChorder & Forge blog. It's a Hexo static site whose posts are generated from HackMD notes rather than written directly as markdown in this repo (though the generated `.md` files under `source/_posts/` are committed).

This repo has a sibling, `blog-zh-tw` (Traditional Chinese edition). Per the comment in `site.config.ts`, everything under `bin/`, `model/`, `util/`, and `scripts/` is meant to be **byte-identical** across both repos — put any edition-specific values in `site.config.ts` instead of branching logic in those shared files.

## Tech stack

- Hexo 7 (static site generator) with the `hexo-theme-next` theme
- TypeScript build/fetch scripts run via `tsx`
- Node 20, package manager `yarn` (see `packageManager` field in `package.json`)

## Key commands

- `yarn install` — install dependencies
- `yarn start` — full pipeline: fetch HackMD notes → fetch note table → generate posts → run dev server (`hexo server -o`)
- `yarn server` — just run the Hexo dev server (`hexo server -o`), no regeneration
- `yarn build` — `hexo generate`, outputs to `public/`
- `yarn clean` — `hexo clean`
- `yarn og` — regenerate the Open Graph image (`bin/generate-og-image.ts`), committed as `source/images/og-image.jpg`
- `yarn deploy` — `hexo deploy`
- No test suite. Lint config exists (`.eslintrc.js`, TS + `eslint:recommended`) but there's no `lint` script in `package.json`; run `eslint` directly if needed.

CI: `.github/workflows/pages.yml` runs `npm install && npm run build` and deploys `public/` to GitHub Pages on push to `main`. There's also a `.gitlab-ci.yml` doing the same for GitLab Pages.

## Architecture / pipeline

Posts are not authored by hand here — they're pulled from HackMD:

1. `bin/fetch-hackmd-notes.ts` — calls the HackMD API (auth token from `token.json`, gitignored) for notes tagged `CC / Forge`, writes `res/hackmd-note-data.json`.
2. `bin/fetch-note-table.ts` — pulls a published Google Sheet (URL in `config.json`, gitignored) listing which notes belong to this edition, writes `res/note-table-data.json`.
3. `bin/generate-posts.ts` — cross-references the two, converts HackMD notes into Hexo post markdown under `source/_posts/`, rewrites internal note-to-note links into Hexo `post_path` tags, and downloads referenced images into `source/images/`.
4. `hexo generate` / `hexo server` then builds/serves the site normally from `source/`.

Supporting pieces:
- `model/` — TS interfaces for HackMD notes and note-table rows
- `util/` — `slugify.ts` (post filename generation) and `normalize-headings.ts`
- `scripts/` — Hexo filter/injector scripts (custom head/footer/post-meta) registered via Hexo's plugin system, referenced from `_config.yml`/theme config
- `_config.yml` — main Hexo config; `_config.next.yml` — NexT theme config; `_config.landscape.yml` — empty/unused leftover from the default theme

## Gotchas

- `token.json`, `config.json`, and everything in `res/` (except committed images) are gitignored — they contain secrets/URLs (HackMD API token, Google Sheet URL) and generated intermediate data. A fresh clone won't have `token.json`; you need one to run `fetch-hackmd-notes.ts` end to end.
- `db.json` (Hexo's local cache) and `public/` (build output) are also gitignored — don't hand-edit or rely on `db.json` state.
- Changes to `bin/`, `model/`, `util/`, or `scripts/` should generally be mirrored in the `blog-zh-tw` sibling repo since they're supposed to stay byte-identical; edition-specific behavior belongs in `site.config.ts`.
- `source/_posts/*.md` files are generated output committed to the repo — treat regeneration (`yarn start`) as the source of truth rather than hand-editing individual post files, unless making a one-off fix.

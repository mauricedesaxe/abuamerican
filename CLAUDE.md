# Project conventions

This is a marketing site (Next.js 12 + React 17) deployed on Vercel. The stack is intentionally pinned and not being upgraded — when in doubt, match existing patterns rather than introducing newer idioms.

## Stack

- Next.js 12.1.6, React 17, TypeScript 4.8 — pinned, do not upgrade.
- Tailwind CSS 2.2 (JIT mode) for styling.
- Yarn 1.22.22 as the package manager (pinned via `packageManager`).
- Node 24.x (pinned via `engines` and `.nvmrc`).
- Single API route: `pages/api/saveEmail.ts` — proxies to ConvertKit.

## Local setup

```bash
nvm use            # picks Node 24 from .nvmrc
yarn install       # uses Yarn 1, do not run with Yarn 2+
cp .env.example .env.local  # then fill in real values
yarn dev
```

Env vars used by the app live in `.env.example`. Ask the project owner for real values.

## Branching and PRs

`main` is protected. You cannot push to it directly. All changes go through a PR.

- Branch from `main`. Use a short, descriptive name (e.g. `fix-hero-copy`, `add-newsletter-section`).
- One PR = one logical change. Keep them small and focused.
- A PR cannot merge until:
  - Vercel preview deploy succeeds.
  - The code owner approves it.
- The owner self-approves their own PRs (GitHub disallows self-approval, but admins can bypass).
- Merging is **rebase-only**. Squash and merge-commit are disabled in repo settings, so the merge button only offers rebase. Keep your commits clean and atomic — they will land on `main` exactly as written.
- If your branch falls behind `main` and rebasing produces conflicts, resolve them locally and force-push your feature branch. Branches other than `main` allow force-push.

## Commits within a PR

Prefer atomic commits — one concern per commit, with a clear message. This makes review and `git bisect` actually useful. Examples:

- ✅ `fix newsletter form submit handler`
- ✅ `update hero image and alt text`
- ❌ `wip` / `fixes` / `update stuff`

Imperative mood, lowercase, no trailing period. Body (optional) explains _why_ if not obvious from the diff.

## What not to do

- Do not run `yarn install` with Yarn 2+ — it silently rewrites the lockfile into PnP format. The `packageManager` field will warn you.
- Do not bump dep versions casually. The deps are old but pinned for a reason. If a real upgrade is needed, do it as its own PR with a clear justification.
- Do not commit anything from `.yarn/`, `.pnp.*`, `.yarnrc.yml`, `.env*` — `.gitignore` covers these but double-check.
- Do not bypass branch protection on `main` even though admin can. The whole point is the PR-based workflow.

## Rollback

Last known-stable production state before active development resumed is tagged `v-stable-2026-05-07`. To revert:

```bash
git checkout v-stable-2026-05-07
```

Then redeploy that ref via Vercel.

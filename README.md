# abuamerican

Marketing site for Abu American, deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org) 12.1.6 (pages router)
- [React](https://react.dev) 17
- [TypeScript](https://www.typescriptlang.org) 4.8
- [Tailwind CSS](https://tailwindcss.com) 2.2 (JIT mode)
- [ConvertKit](https://convertkit.com) for newsletter signups (via `pages/api/saveEmail.ts`)

The stack is pinned and not being upgraded. See `CLAUDE.md` for the full rationale.

## Prerequisites

- **Node 24.x** — `.nvmrc` is provided, so `nvm use` will switch automatically.
- **Yarn 1.22.22** — `packageManager` is pinned in `package.json`. Do **not** install with Yarn 2+.

If you don't have Node installed:

```bash
# install nvm first: https://github.com/nvm-sh/nvm
nvm install 24
nvm use
```

## Local development

```bash
yarn install
cp .env.example .env.local
# fill .env.local with real values from the project owner
yarn dev
```

The dev server runs on http://localhost:3000.

## Environment variables

The newsletter signup endpoint requires ConvertKit credentials. See `.env.example` for the full list. Get real values from the project owner — never commit `.env.local`.

| Variable               | Used for                                   |
| ---------------------- | ------------------------------------------ |
| `CONVERTKIT_FORM_ID`   | Target ConvertKit form for email signups   |
| `CONVERTKIT_API_KEY`   | ConvertKit API key for the signup endpoint |

## Scripts

| Command       | What it does                           |
| ------------- | -------------------------------------- |
| `yarn dev`    | Start the Next.js dev server           |
| `yarn build`  | Production build (also runs on Vercel) |
| `yarn start`  | Run a built app locally                |

## Contributing

`main` is protected — direct pushes are blocked. All changes go through a PR that must pass Vercel preview deploy and receive code-owner approval before merging.

Read `CLAUDE.md` before opening your first PR. It covers branch naming, atomic-commit style, and what not to do.

## Deployment

Pushes to PRs trigger Vercel preview deploys. Merging to `main` triggers a production deploy. Both are managed by the Vercel GitHub integration — no extra action needed.

## Rollback

Last known-stable point before active development resumed is tagged `v-stable-2026-05-07`. See `CLAUDE.md` for rollback steps.

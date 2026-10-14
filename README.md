# Ismaning — V0

A Settlers II–inspired browser economy game. M0 establishes the application and verification tools; this preview does not yet implement gameplay.

## Run locally

Install Node.js 22.12 or newer, then run:

```sh
npm ci
npm run dev
```

Open the address printed by Vite. The scene shows a flat 64 × 64 grass map. Resize the window or tap **Center map** to fit the map. The layout accommodates phone safe areas and provides a 48px touch target.

```sh
npm test
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Structure

- `src/simulation`: plain TypeScript world data, with no Phaser or browser dependencies.
- `src/presentation`: Phaser scenes and future input/rendering adapters.
- `src/main.ts`: application bootstrap.
- `src/style.css`: responsive surrounding interface.
- `tests`: Node's built-in test runner checks compiled simulation modules. This keeps test tooling small and avoids the vulnerable Vitest dependency chain reported during initial setup.
- `scripts/lint.mjs`: lightweight TypeScript source rules for explicit types, debugger/eval statements and simulation isolation. Compiler checks additionally reject unused code. This is a small custom linter, not ESLint.
- `public/flag.svg`: original placeholder flag asset used as the favicon.

## GitHub setup and review

The connected repository is `jacopogallucci-lang/ismaning` (supersedes the original plan's proposed `settlers-inspired` name). M0 is proposed on `m0-foundation`. Obtain the owner's approval before merging. Configure branch protection to require the `validate` job and prevent unreviewed merges. The repository currently is private; the confirmed specification calls for a public repository for free Pages hosting. Resolve visibility and Pages eligibility before deployment.

In the repository's **Settings → Pages**, select **GitHub Actions** as the source. The workflow validates pull requests and deploys only the `main` branch after tests and build pass. Enable Pages before running deployment. Relative asset paths support both project and account Pages URLs. Hosting remains pending until repository setup and an approved merge.

## Project documents

`V0_SPEC.md`, `MASTER_ROADMAP.md`, and `IMPLEMENTATION_PLAN.md` contain the full text recovered from the supplied Word documents. Unchanged Word originals are preserved in `docs/source/`. Source documents retain their original titles and historical setup status; the game is now named Ismaning. Current implementation progress lives in `M0_REVIEW.md` so it is separate from the original plan.

## Manual Safari verification for M0

After an approved merge and successful Pages deployment:

1. Open the workflow's published Pages URL in Safari on iPhone or iPad.
2. Confirm the Ismaning header and green placeholder canvas appear without a blank screen.
3. Rotate between portrait and landscape. Confirm the canvas resizes and the map fits.
4. Tap **Center map** and confirm the map stays centered and the button is accessible.
5. Repeat in a desktop browser using a mouse and a resized window.

M0 does not include map gestures or terrain rules; those belong to M1. A local preview can be checked on the Mac with `npm run dev`, but device testing above requires an accessible hosted URL.

M0 has no external assets, copied Settlers artwork, production chains, carriers, saves or victory logic. Those belong to later milestones.

# Ismaning M0 review

## Changes

Phaser 3 + TypeScript + Vite application with a 64 × 64 flat grass map, responsive surrounding interface, and a touch-sized Center map button. Simulation data lives in a module that does not import Phaser or browser APIs. Includes local development instructions, a lockfile, a Node test runner, and GitHub Pages validation/deployment workflow.

The three supplied Word documents have been recovered in full. Markdown copies replace the initial partial working records, with unchanged originals in `docs/source/`. The source plan's proposed repository name is superseded by the user's confirmed name Ismaning. No additional gameplay milestone is authorized or implemented.

## Verification

- Two world foundation tests pass using Node's built-in runner.
- Source lint, TypeScript checking and Vite production build pass. Compiler rules reject unused locals/parameters; the custom source linter rejects explicit any, debugger, eval and browser/presentation coupling in simulation.
- The production bundle includes Phaser and produces a size warning (about 1.21 MB JavaScript, 333 KB compressed); optimization is deferred until a measured need.
- Initial installation audit reported Vitest/mocker and Tinypool issues. Those packages were removed from the manifest, installed dependency tree and lockfile. A fresh online audit is pending because this session cannot reach the npm registry.
- Browser launch and Safari/touch verification are pending: opening the local preview port was blocked by session permissions.
- Remote repository is now connected; CI verification is pending on the M0 pull request. Pages deployment remains pending approved merge and hosting setup.

## Remaining setup

The game folder exists at `outputs/ismaning` within this chat's workspace, with local branch `m0-foundation`.

The folder is registered as the Codex project `ismaning`, and this chat belongs to it. The connected GitHub plugin confirms account `jacopogallucci-lang` and repository `jacopogallucci-lang/ismaning`. The repository currently is private, whereas the confirmed specification calls for a public repository for free Pages. The CLI's network access remains blocked. No changes merged and no site published.

Publish M0 to a feature branch and open a pull request. Run remote CI (including a fresh audit), obtain the owner's approval before merging, and resolve the outstanding browser verification. Set Pages source to GitHub Actions, resolve repository visibility/hosting eligibility and configure branch protection before merging.

## Check against recovered M0 plan

- Present: Vite, TypeScript, Phaser 3, responsive placeholder viewport, independent deterministic world initialization, tests, build, relative Pages assets, deployment workflow and README.
- Present: exact Safari phone/tablet manual verification steps in README.
- Present: dedicated lightweight source lint tooling and a CI lint step, plus separate typecheck step.
- Pending: hosted placeholder canvas acceptance, screenshots, online audit and pull request; these require the remaining access/setup checks.
- The grass grid is a placeholder only. M1 will establish the terrain data, logical geometry, coordinate transforms and camera gestures; no unconfirmed road adjacency or footprint rules are assumed here.

## Latest completion attempt

- Added an original static flag asset and passed lint, two tests, typecheck and build after the changes.
- Prepared a self-contained `ismaning-preview.html` beside the project folder for manual review without a server. Automated browser inspection is still unverified: the browser policy explicitly disallows local file URLs. No alternate browser route was used to bypass that policy.
- Attempted repository creation through the supported browser UI; GitHub redirects to its sign-in page. The connector confirms the correct account, but has no repository-creation action and still returns 404 for the target repository.
- No merge approval requested yet: visual verification, fresh online audit, remote PR/CI and hosted acceptance remain open.

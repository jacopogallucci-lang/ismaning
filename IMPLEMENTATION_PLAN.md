# Settlers-Inspired — Codex Implementation Plan

Status: Ready to execute after GitHub/Codex access is established. Do not merge without user approval.

# Development workflow

GitHub repository under jacopogallucci-lang, public for free GitHub Pages; proposed repo name `settlers-inspired` (not yet created/verified).

Main branch protected by process: Codex opens one focused PR per milestone, reports tests and screenshots, user reviews and explicitly approves merge. GitHub branch protection can be configured where supported.

GitHub Actions run lint/typecheck/unit tests/build on PRs and deploy main to Pages.

Never use copyrighted Settlers II assets. Keep tasks small enough to verify on phone.

Game's own docs (`V0_SPEC.md`, `MASTER_ROADMAP.md`, this plan) are source of truth.

# Build sequence

## M0 — Repository and deployable skeleton

Codex: create Vite + TypeScript + Phaser 3 project; basic responsive viewport; static asset placeholders; GitHub Pages base-path configuration; CI checks, Pages workflow; README with local and iPad testing. Acceptance: build passes, hosted page loads with placeholder canvas.

## M1 — Pure simulation world and renderer

Codex: implement fixed 64x64 map data, terrain rules, coordinate transforms, basic original pixel-art tile renderer, camera drag/pinch/zoom, selection; simulation state separate from Phaser. Tests: tile validity, coordinate round-trips, map bounds. Acceptance: smooth map navigation on mobile.

## M2 — Building placement and construction model

Codex: five building definitions, footprint/terrain checks, HQ start, building ghost, building state machine, construction costs and timers, placeholder building sprites. Ensure no instant construction bypass. Tests: valid/invalid sites, cost requirements, state transitions. Acceptance: player can place sites, inspect them and see waiting status.

## M3 — Flags, roads, carriers and logistics

Codex: graph model; flag placement; drag-to-build road with preview/confirm; limited carrier pool and assignment; per-segment transport, shortest path and FIFO allocation; physical goods and conservation assertions. Tests: multi-hop delivery, disconnected roads, shortages, no carriers, graph changes, no duplication. Acceptance: one wood unit moves along multiple flagged road segments.

## M4 — Production and resources

Codex: forest resource counters, stone deposits, forester regeneration, lumberjack and stonecutter production, sawmill recipe, finite buffers, HQ storage, requests and transport. Tests: input/output blocking, depletion, regrowth, cyclic economy and construction deliveries. Acceptance: sustained wood→planks and stone loops, with no inventory creation bugs.

## M5 — Persistence and goals

Codex: versioned IndexedDB save/autosave/manual slots; JSON export/import; pause/resume; full in-flight state; cumulative production counters; victory overlay with Continue. Tests: deterministic save/load mid-delivery and mid-construction; no false victory. Acceptance: reload browser and continue same settlement.

## M6 — UI, balancing and release

Codex: touch-friendly retro panels, status/inspection, speed controls, tool modes, error feedback, optional developer replenishment mode; mobile performance tuning; original placeholder art polish; CI and deployment validation. Acceptance: end-to-end new game to victory on iPad and desktop; no critical errors.

# Suggested first Codex task (paste after repo connected)

"Read V0_SPEC.md, MASTER_ROADMAP.md, and IMPLEMENTATION_PLAN.md. Implement milestone M0 only. Use Phaser 3, TypeScript and Vite. Create a responsive game canvas with a simple original placeholder screen, a minimal deterministic simulation module independent of Phaser, test/typecheck/build scripts, and GitHub Actions for PR validation and GitHub Pages deployment. Configure Vite base path for repository `settlers-inspired` or document the needed change if the repo name differs. Do not implement game features from later milestones. Open a pull request with a concise summary, tests run, and exact manual verification steps for Safari on iPhone/iPad. Do not merge."

# Current blocker and next actions

Create or verify public repo on GitHub account `jacopogallucci-lang`.

Connect GitHub to Codex through its supported authorization flow; earlier connection attempt failed. If still failing, troubleshoot browser login/permissions or use a computer later.

Commit the three Markdown files to the repository.

Submit M0 prompt to Codex; review PR and test deployed build after approval/merge.

# Engineering questions for Codex to propose, not silently decide

Logical tile grid (square-isometric vs hex-like Settlers II), road edge geometry and flag capacity.

Building entrance rules and small/medium/large footprint sizes.

Exact forest/stone counters, production radius and regeneration caps.

Road deletion policy for carriers and in-flight cargo; HQ dispatch semantics.

Deterministic tie-breaking and reservation semantics for FIFO allocations.

Record proposals in a PR or ADR before implementing the affected milestone.

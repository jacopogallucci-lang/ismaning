# Settlers-Inspired — V0 Specification

Status: Design decisions confirmed; implementation not started. Date: 2026-10-13.

# North star

Create an original, lightweight, 1990s pixel-art strategy/economic game inspired closely by the feel and logistics of The Settlers II. Do not reuse copyrighted artwork, sound, maps, or code. V0 must be expandable without replacing the core simulation.

# Platform and technology

Phaser 3 + TypeScript + Vite, HTML5 browser game.

iPhone/iPad touch-first; desktop mouse/keyboard; future Mac standalone packaging possible.

Pure TypeScript simulation independent of Phaser; deterministic fixed-step ticks, configurable game speed 1x/2x/4x.

Public GitHub repository and GitHub Pages hosting via GitHub Actions. No backend for V0.

One fixed 64x64 map, flat, no height simulation. Terrain: grass, forests, mountains, water, stone deposits. Whole map buildable where terrain permits; no territorial ownership mechanics.

# Confirmed V0 scope

Five building types ONLY: prebuilt Headquarters, Lumberjack, Forester, Sawmill, Stonecutter. Headquarters is the only warehouse/storage hub. Future multi-warehouse capability must be architecturally possible.

Small/medium/large building footprint categories and terrain restrictions, configurable per building. Building placement previews valid/invalid and requires connection to road network. Exact per-building footprint assignments TBD in data configuration.

Road network made of flags and segments, authentic Settlers II-style transport. Touch-friendly drag-to-build road with preview, confirm/cancel, automatic endpoint flags. Each segment has at most one assigned carrier initially; assignment automatically draws from a limited workforce pool. If no carrier available, segment cannot transport until assigned. Future traffic upgrades supported.

Goods are discrete units, physically transported by carriers from flag to flag; shortest-path routing on graph; no teleporting. Automatic allocation to eligible resource requests, equal default priority and FIFO among eligible requests; priority fields available for later customization. Need deterministic tie-breaking.

Starting state: 1 HQ, 30 planks, 20 stones, 20 available carriers. These are configurable. HQ has effectively unlimited storage for V0; development replenish controls separated from normal play.

Construction state machine: Placed -> Waiting for Materials -> Under Construction -> Operational. Planks/stones must be delivered via logistics, followed by construction timer; no simulated builders yet. Buildings consume materials; demolition policy TBD in implementation assumptions.

Production in discrete cycles; recipes in data files; finite input and output storage, default capacity 5 units each where applicable; pauses on missing input or full output. Production buildings require NO assigned worker in V0. Only road carriers consume worker pool.

Natural resource extraction is abstract: lumberjack needs forest within range; forester replenishes forest resource counter; stonecutter extracts finite local stone deposits. No physical resource workers or individual tree-cutting animation in V0. Keep spatial resource model for later expansion.

Initial economy balancing (tunable, not claimed to match original): HQ prebuilt; Lumberjack 2 planks, 10 sec, 1 wood per 12 sec; Forester 2 planks, 10 sec, replenishes forest per 15 sec; Sawmill 3 planks + 2 stones, 20 sec, consumes 1 wood and produces 1 plank per 15 sec; Stonecutter 2 planks, 10 sec, 1 stone per 18 sec. Forester output is a change to forest resource, not a transportable good. Precise spatial regeneration units/radii TBD.

UI: retro pixel-art aesthetic, modern touch controls; drag to pan (outside active road-building mode), pinch to zoom, tap to select, build menu, road tool, context menu for demolition, resource status bar, production/building status. Mouse equivalent on desktop.

Persistence: IndexedDB autosave every 60 seconds plus manual save/load, export/import save file, versioned schema. Save all authoritative simulation state, including in-flight goods, carrier state, road graph, queues, construction progress, map resources, and objective counters. Pause simulation when app not active; no offline production. Browser storage can be cleared; exports are backups.

Victory when ALL conditions are met: at least 15 operational buildings, 100 planks cumulatively produced (exclude starting planks), and 50 stones cumulatively extracted (exclude starting stones). Show victory screen, allow continuing play.

# Key technical invariants

Simulation owns authoritative state; Phaser only displays state and translates input into commands.

Deterministic updates using fixed-step simulation; no game logic depending on frame rate.

Every transported good has a location/state and destination; only a carrier physically transfers it across a road segment.

Conservation of resources: produced, stored, reserved, in transit, consumed and lost quantities reconcile.

All resource requests, routes, building types, recipes and timing are data-driven and stable-ID based.

Road connectivity, pathfinding and request assignment can be replaced/extended without changing building recipes.

Save/load restores the same simulation state, without duplicating goods or carriers.

Automated tests cover deadlocks, shortages, construction, route failures, save/load and victory.

# Implementation defaults proposed (NOT yet user-confirmed)

Tile-based logical map with a documented coordinate scheme; isometric-like projection rendered in Phaser. Clarify tile vs flag graph adjacency before coding.

Flag placed at each building's designated entrance; road drawing snaps to permitted graph edges and automatically creates a flag at endpoint. Require connectivity to HQ for operational logistics; initial HQ has a usable entrance flag.

Building sites can be placed before road completion, but stay waiting/inactive until connected. Construction materials must be dispatched from HQ and arrive through the flag network. Prevent resource deadlock with starting inventory and valid build locations.

Default road path selection: shortest segment distance, stable ID tie-break. Carrier services one segment, picks up from its start flag and deposits at next flag. Requests reserve inventory to avoid double-allocation.

Recalculate routing when roads change, without losing in-transit goods; safe removal policy for occupied segments.

Use placeholder original pixel-art shapes/sprites at first; replace with original assets after simulation is stable.

Exact footprints, extraction radius, depletion/regrowth quantities, route limits, storage per flag, road build rules, demolition refunds, carrier reassignment, and production blocking need implementation-level resolution and tests.

# Acceptance criteria

New game loads the fixed map and HQ with configured supplies.

Player can pan/zoom, place each of four constructible building types on legal sites, and connect them by flags and roads.

Carrier assignments consume limited pool; deliveries visibly traverse each segment and correctly handle multiple segments.

Wood is generated near forest, delivered to sawmill, converted to planks and returned to HQ; stone production feeds construction and HQ.

Materials are actually consumed and construction waits for deliveries plus timers.

Production stops when output is full or input absent; depleted stone halts extraction; forester can restore forest resource.

Save/reload during active delivery/construction preserves exact inventory and progress.

Victory triggers only after all three goals and Continue works.

Deployed GitHub Pages build usable on Safari iPhone/iPad and desktop; tests and production build pass.

# Explicitly out of scope

AI, military, territory, multiple maps, random generation, multiplayer, additional warehouses, food/tool/metal chains, profession staffing, physical forestry workers, elevation, cloud saves, naval systems, proprietary Settlers assets.

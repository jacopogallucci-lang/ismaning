# Settlers-Inspired — Master Roadmap

Status: Vision and direction; post-V0 milestones are proposals, not committed dates.

# Long-term vision

Reach or exceed the economic, transport, construction, military and map depth of The Settlers II, with original retro art and modern touch/desktop usability. Preserve modularity, avoid throwaway V0 systems.

# V0 — Fixed-map economic foundation (confirmed)

See V0_SPEC.md. Five buildings, HQ storage, wood/plank/stone economy, authentic flags/carriers, abstract extraction, timed construction, 64x64 flat fixed map, saves, economic victory, browser deployment.

# Candidate future milestones (order subject to testing)

## V1 — Economic depth and professions

Specialized workers and tool requirements; physically visible builders and extraction workers.

More production chains: farm, mill, bakery; fishing, hunting, brewing, food supply.

Workforce creation, training, reallocation and capacity constraints.

Production priority UI, configurable routing policy, richer statistics.

## V2 — Warehouses, terrain, maps

Multiple warehouses and stock distribution rules; warehouse worker/carrier dispatch.

Larger and selectable authored maps; map import/export, possible map editor.

Elevation, slopes, authentic building-site restrictions and terrain-aware roads.

Individual trees, saplings, stone formations and visually changing resource tiles.

## V3 — Industry and military economy

Coal, iron, gold, mining, smelting, tools, weapons, gold coins and military supply chains.

Soldier recruitment/ranks, garrisons and military buildings.

Territory ownership, borders and expansion; territory-aware construction.

## V4 — Skirmish and AI

AI economic planner, road building, expansion and combat.

Human vs AI on authored maps; configurable opponent count and difficulty.

Victory/defeat objectives, campaign scenarios, fog of war where appropriate.

## V5+ — Fidelity and expansion

Additional original-era production chains, advanced traffic management and carriers.

Larger maps, map generation, campaigns, balancing and polish.

Optional multiplayer and authoritative simulation/network synchronization (major effort).

Desktop packaging (Tauri/Electron), offline installable PWA, optional cloud sync.

Original music, sounds, animations and pixel art; accessibility and mobile optimization.

# Architecture guardrails

Pure deterministic TypeScript simulation, Phaser adapter, platform-agnostic commands.

Stable IDs for goods, buildings, flags, roads and agents; schema migrations for save versions.

Data-driven definitions for resources, recipes, structures, terrain, maps and objectives.

Graph-based logistics supporting dynamic topology, alternate routing and congestion policies.

Inventory accounting, resource reservations, delivery lifecycle and simulation invariants.

Tests at system boundaries; performance profiling before expanding maps or agent counts.

No proprietary original game assets/code.

# Open items / backlog

V0 implementation defaults in V0_SPEC.md: exact tile geometry and flag adjacency; entrance rules; footprint assignments; resource radii/capacities; transport queue limits; carrier allocation and reassignment; construction delivery reservation; road demolition and stranded goods; save migration behavior.

Balance tuning after playtests; 15 buildings / 100 planks / 50 stones may take longer than desired.

Decide V1 sequencing only after V0 is genuinely playable.

Resolve GitHub account/Codex authorization; do not claim integration is complete.

Decide repository name and whether user wants original game art created separately.

Evaluate offline PWA, Mac app packaging, and cloud saves when there is demand.

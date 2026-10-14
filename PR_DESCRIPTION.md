# Initialize Ismaning M0 browser game foundation

Ismaning now has a Phaser 3 + TypeScript + Vite foundation with a flat 64 × 64 map preview and responsive interface. World data is independent of Phaser, and a Node test runner verifies the map foundation. The Pages workflow validates pull requests and deploys approved changes after they reach main.

Includes README, Safari manual verification steps and full Markdown copies of the supplied specification, roadmap and implementation plan, plus unchanged Word originals. The user-confirmed project name is Ismaning.

Validation: source lint, two tests, TypeScript check and production build pass locally. Initial vulnerable test dependencies were removed. CI includes a fresh dependency audit, lint, typecheck, tests and production build. Browser/Safari verification remains pending because the session cannot start a local server or open local file URLs. No gameplay beyond the map preview is included.

Before merge/deployment: review the CI result, complete manual Safari verification, and configure Pages hosting. The repository currently is private; the specification calls for a public repository for free Pages hosting. Do not merge without the owner's explicit approval.

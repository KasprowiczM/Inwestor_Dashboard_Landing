---
name: nadir-design
description: Use this skill to generate well-branded interfaces and assets for the **BTC Smart Investor Terminal** (codename NADIR) — the invite-only BTC-bottom analytics & investor terminal — either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, components, dashboard + landing templates, and a DESIGN.md handoff.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Quick start:
- Link `styles.css` (one file) — it imports all tokens + fonts. Add `class="nadir-bg"` to `<body>` for the signature sonar-grid canvas.
- Components live under `components/` and compile to `window.NADIRDesignSystem_54e725` (load `_ds_bundle.js`) — **17** components. Foundations are in `guidelines/`; copyable **templates** (landing, Smart dashboard, Investor dashboard, invite gate) are in `templates/`; a standalone launcher is `prototype/index.html`; the dev/AI handoff is `DESIGN.md`.
- Product naming: wordmark **“BTC Smart Investor / Terminal”** via `BrandLockup` (NADIR is code-only). Plans are **Smart** (invite-only, BTC-bottom + meta only) and **Investor** (full terminal) — **no free tier**; gate everything deeper with `LockOverlay`.
- Core principle: **cold is the opportunity** — ice-cyan is the primary accent; Bitcoin gold is reserved for premium/asset (Investor) moments. Dark abyssal canvas only. PL-primary, EN toggle. Institutional precision + invite-only exclusivity. No emoji.

If the user invokes this skill without other guidance, ask them what they want to build, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

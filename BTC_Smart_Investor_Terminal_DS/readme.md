# BTC Smart Investor Terminal — Design System

> *(codename **NADIR** — retained internally for the namespace, tokens and `nadir-bg` class; never shown to users.)*

> **„Nie szukamy idealnego dna — szukamy momentu rozpoczęcia akumulacji."**
> An invite-only analytical terminal for **intelligent BTC-bottom tracking** + a full investor terminal.
> This design system powers the whole **BTC Smart Investor Terminal** product — landing page **and** dashboards.

**BTC Smart Investor Terminal** fuses **21 on-chain, cyclical, sentiment and macro indicators** into a single **Bottom Score (0–100)** and a five-band verdict inside an *Accumulation Window* — a discipline tool, not an oracle. It is a closed, **invite-only** portal with **no free tier** and two tiers: **Smart** (BTC-bottom tracking + strategy meta-info only) and **Investor** (the full terminal).

**Naming:** the product wordmark is **“BTC Smart Investor”** + descriptor **“Terminal”** (use the `BrandLockup` component). The retained **gold Bitcoin mark** and **terminal orb** are kept as-is. The legacy *NADIR* wordmark is **retired from all product surfaces** — it survives only as the internal design-system codename (namespace `NADIRDesignSystem_54e725`, `window.NADIR_*` globals, `nadir-bg`).

## Sources (read-only context — reader may not have access)
- **Live product:** https://btc-dash.64bit.site (invite-only)
- **Repository:** https://github.com/KasprowiczM/Inwestor_Dashboard
- **Codebase explored:** `Inwestor_Dashboard/btc-dashboard/` (Next.js 15, App Router). Key files mined: `src/app/globals.css` (original tokens), `src/components/auth/AuthShell.tsx` (login/orb), `src/domain/indicators.config.ts` (the 21 indicators), `src/i18n/i18n.tsx` (bilingual copy + tone), `README.md` (product model, FREE/FULL split, security).
- **Assets copied in:** logo (gold Bitcoin mark, SVG/PNG/WebP), `orb.png` (login hero), favicon, dashboard preview PNGs → `assets/`.

---

## CONTENT FUNDAMENTALS — how NADIR writes

- **Language:** Bilingual, **Polish primary** with an **EN toggle** (mirrors the app's `i18n`). All landing copy ships in both via `templates/landing/data.js` and the `window.L(lang, pl, en)` helper.
- **Voice:** Institutional precision + an aura of exclusivity. Reads like a research desk that happens to be invite-only. Direct, declarative, second person ("Znajdź dołek", "Find the floor"). Confident but never hype.
- **Casing:** Sentence case for prose and headlines. **UPPERCASE only** for mono eyebrows, labels, plan names (Smart/Investor), and verdict chips.
- **The mono voice:** Data, tickers, eyebrows and disclaimers use JetBrains Mono with a leading `//` — the "terminal" register (`// BOTTOM SCORE · LIVE`).
- **Discipline framing:** Always "tool of discipline, not an oracle." Every surface that gives a verdict pairs it with the disclaimer that it's educational, not financial advice.
- **No emoji** in marketing surfaces (the app's README uses them internally; the brand does not). No exclamation hype. Numbers are specific and real where they are historical or product-level (21 indicators, 2018/2022 calibration, 3×/day dashboard refresh). Landing hero market values are illustrative historical examples, not current readings.
- **Signature lines:** *"Read the cycle. Protect the signal."* (motto, retained from app) · *"Znajdź dołek. Z przewagą analityczną."* / *"Find the floor. With an analytical edge."* (hero).

---

## VISUAL FOUNDATIONS

- **Concept — "cold is the opportunity":** The contrarian thesis is made visible. Most crypto sites scream gold/orange; NADIR makes the **primary accent cold ice-cyan** (`--ice-400 #67E8F9`) and **reserves Bitcoin gold** (`--gold-300 #F7C76B → --gold-500 #FF9900`) for premium/asset moments (Investor plan, the logo, "aggressive accumulation"). The coldest read = the deepest bottom.
- **Canvas:** Abyssal near-black stack (`--abyss #04060A` → `--bg-elevated #151E2C`). Page background is the `--grad-abyss` vertical gradient.
- **Signature motif — depth / sonar:** A fixed **sonar-grid wash** (56px grid + ice glow descending from the top, masked to fade) via `body.nadir-bg` / `.nadir-canvas`. Concentric **sonar rings** descend "to the floor" in hero/invite sections. See `guidelines/brand-depth.html`.
- **Color vibe of imagery:** Cool, slightly desaturated, high-contrast (`saturate(0.92–0.95) contrast(1.06–1.08)`). The orb is gold-on-cold-blue — warm asset, cold environment.
- **Type:** **Bricolage Grotesque** (display — characterful editorial grotesque, weights 400–800, tight `-0.04em` tracking) · **Hanken Grotesk** (body/UI) · **JetBrains Mono** (data/labels). *Upgraded from the app's Inter at the owner's request — see Caveats.*
- **Verdict thermometer (contrarian):** gray `#6B7280` → amber `#F59E0B` → green `#10B981` → ice `#06B6D4`. Bands: <30 too-early · 30–54 observe · 55–77 accumulation · ≥78 aggressive.
- **Cards:** Glass — `--grad-glass` over `--bg-glass`, `1px` hairline border (`--line` 0.10 alpha), `--radius-lg (12px)`, soft outer shadow + inner top-light (`--shadow-card` + `--shadow-layer`). Optional ice/gold glow edge for emphasis.
- **Borders:** Low-alpha cool-white hairlines (0.06 / 0.10 / 0.18). Ice/gold tinted borders signal accent.
- **Radii:** 5 / 8 / 12 / 18 / 26 / pill. Cards 12, panels 18, hero/invite 26, chips pill.
- **Shadows:** Dark-UI elevation = soft large-radius drop + `inset` top highlight. No hard/black drop shadows. Glows (`--glow-ice`, `--glow-gold`) are reserved signal, not decoration.
- **Transparency & blur:** Glass (`backdrop-filter: blur(20px)`) on sticky nav, floating panels, the invite form card. Used for overlays/elevation, not everywhere.
- **Motion:** Restrained. `--ease-out`/`--ease-emph` cubic-beziers; durations 0.16/0.24/0.6s. Score ring sweeps its stroke; verdict marker slides; accordions ease height. No bounces, no infinite decorative loops. Honors `prefers-reduced-motion`.
- **Hover states:** CTAs lift `-2px` + slight brightness; secondary buttons gain an ice border + faint ice fill; links shift muted→primary (or →ice in footer); cards lift + border brightens.
- **Press/active:** Subtle — opacity/curl on the primary; no aggressive shrink.
- **Layout:** `--maxw-content 1240px` marketing container with `--gutter` clamp; `--section-y` clamp(72–160px) vertical rhythm. Sticky glass nav appears on scroll.

---

## ICONOGRAPHY

- The product app draws icons inline (hand-rolled SVG paths) and the **gold Bitcoin "B" logomark** (`assets/logo.svg`) is the one true brand mark — **retained as-is**.
- For the landing kit, icons are a **small custom Lucide-style line set** (1.7 stroke, round caps) in `templates/landing/icons.js` exposed on `window.NADIR_ICONS`: `arrow, lock, check, x, bolt, shield, layers, activity, mail, chevron, target, waves`. This matches Lucide's geometry so a consuming repo can swap in the full **Lucide** library from CDN with no visual break. **Flagged substitution:** the app had no icon font/sprite to copy, so this is a close-match set, not the product's own.
- **No emoji** in any brand surface. Category status is shown with **colored dots/squares** (the 5 indicator-category colors), not glyphs.
- Logo: keep the gold gradient mark; pair with the **“BTC Smart Investor / Terminal”** wordmark via `BrandLockup` (Bricolage display + mono descriptor). Drop-shadow `--gold-glow` for presence on dark. See `guidelines/brand-logo.html`. *(The `guidelines/brand-logo.html` specimen still shows the legacy NADIR wordmark — code-only reference; product surfaces use BrandLockup.)*

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — `logo.svg/png/webp`, `orb.png`, `favicon-dark.png`, dashboard preview PNGs.
- `readme.md` (this), `SKILL.md`.

**Foundations** (`guidelines/` — 13 `@dsCard` specimens): Colors (Accent, Surfaces, Verdict Thermometer, Text & Hairlines) · Type (Display, Body, Mono, Scale) · Spacing (Scale, Radii) · Brand (Logo, Depth/Sonar, Glass & Eyebrow, Shadows & Glows).

**Components** (`components/` — `window.NADIRDesignSystem_54e725`, **17**)
- `core/` — **BrandLockup** (mark + wordmark), **Button** (primary ice / gold / secondary / ghost), **Badge** (data freshness), **StatusChip** (verdict capsules), **Card** (glass + accent edge), **Eyebrow** (mono kicker), **Input** (auth-grade), **SegmentedControl** (ranges / view switches), **Modal** (dialog / drawer), **Tooltip** + **InfoDot** (metric helper), **LockOverlay** (gated-panel veil → upgrade).
- `data/` — **ScoreRing** (signature Bottom-Score gauge), **VerdictScale** (contrarian band track), **Gauge** (semicircle sentiment / probability), **KpiStat** (mono KPI tile), **Sparkline** (mini area chart).

**Templates** (`templates/<slug>/` — copyable starting points; not compiled into the bundle)
- `landing/` — full invite-only landing page: Nav (sticky, PL/EN toggle), Hero (orb + live score), HowItWorks, Families (7 signal families), ProductPreview, Methodology (21 indicators), Pricing (**Smart vs Investor**, invite-only), Trust, FAQ, RequestInvite, Footer. Content in `data.js`; layout in `landing.css`.
- `dashboard-smart/` — gated **Smart** dashboard: bottom status + strategy meta only; `LockOverlay` panels over the 21-indicator table, whale/ETF log and DCA plan → upgrade.
- `dashboard-investor/` — full **Investor** terminal: 21-indicator confluence, price + sentiment/probability gauges, cycle phase, whale/ETF event log, DCA tranches.
- `invite-gate/` — invite/access wall (code entry + request invite).

**Prototype:** `prototype/index.html` — standalone launcher linking all four screens + the handoff doc.

**Handoff:** `DESIGN.md` — full implementation contract for dev/AI agents (tokens, components, layout patterns, states, responsive, screen map).

> **Disclaimer (carry into all surfaces):** Educational and informational only. Not investment advice or a financial recommendation.

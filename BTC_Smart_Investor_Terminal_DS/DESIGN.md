# BTC Smart Investor Terminal — Design Handoff (DESIGN.md)

> Invite-only analytical terminal for **intelligent BTC-bottom tracking** + a full investor terminal.
> This file is the implementation contract for dev & AI agents (Claude Code, Codex, Gemini). It describes the design system, components, layout patterns, states, responsive rules, and the screen map. Pair it with `readme.md` (system overview) and the live screens in `prototype/index.html`.

**Product:** BTC Smart Investor Terminal  ·  **Access:** invite-only (no free tier)  ·  **Plans:** Smart, Investor  ·  **Language:** bilingual PL (primary) / EN.

---

## 0. How to consume this system

The compiler emits `_ds_bundle.js` (UMD) exposing every component on a single global namespace:

```
window.NADIRDesignSystem_54e725   // run check_design_system to re-confirm the suffix
```

**Plain HTML / React page** (how the landing works):
```html
<link rel="stylesheet" href="/styles.css">          <!-- tokens + base, link THIS only -->
<script src="/_ds_bundle.js"></script>               <!-- defines the namespace -->
<script>
  const { Button, ScoreRing, LockOverlay } = window.NADIRDesignSystem_54e725;
</script>
```

**Templates** (`templates/<slug>/`) are copyable starting points. Each loads the system through a sibling `ds-base.js` (lists the stylesheets + bundle). Current templates:
- `templates/landing/` — full marketing site (React + Babel, multi-file screen).
- `templates/dashboard-smart/` — gated Smart dashboard (Design Component).
- `templates/dashboard-investor/` — full Investor dashboard (Design Component).
- `templates/invite-gate/` — invite/access wall (Design Component).

**Do not** `<script src>` a component's `.jsx` directly — exports are only reachable through the compiled bundle namespace.

**`styles.css` is the single entry point.** It `@import`s, in order: `fonts → colors → typography → spacing → effects → base`. Everything below is a CSS custom property defined there.

> ⚠️ **Background gotcha:** `var(--grad-abyss)` is a *gradient* (a background-image). If you also set `background-image` on the same element, declare the abyss as the **last** image layer and set `background-color: var(--abyss)` as the base — otherwise the later `background-image` wipes it and you get a white page. See `prototype/index.html`.

---

## 1. Brand

- **Mark (retained, never alter):** gold Bitcoin “₿” coin mark. Assets: `assets/logo.svg`, `assets/logo.png`, `assets/orb.png` (gold-coin orb), `assets/favicon-dark.png`.
- **Name lockup:** wordmark **“BTC Smart Investor”** with descriptor **“Terminal”** beneath. Use the `BrandLockup` component (`layout="stack" | "inline" | "mark"`). The legacy “NADIR” wordmark is retired from product surfaces (the internal namespace/token prefix still reads `NADIR…` — that is code-only, never shown to users).
- **Concept:** *“cold is the opportunity.”* Abyssal near-black canvas; **ice-cyan = the analytical signal (primary)**; **Bitcoin gold = asset heat & premium, reserved** (never a default button).
- **Voice:** professional, data-driven, contrarian, calm. Mono eyebrows with a glowing signal dot label sections. Polish primary, English secondary.

---

## 2. Tokens

### Color
| Group | Tokens | Use |
|---|---|---|
| Canvas | `--abyss` `--bg-deep/base/surface/card/elevated/inset` `--bg-glass` `--bg-glass-strong` | page → cards → glass |
| Hairlines | `--line-faint` `--line` `--line-strong` `--line-ice` `--line-gold` | borders by emphasis |
| Text | `--text-primary` `--text-secondary` `--text-muted` `--text-faint` `--text-on-ice` `--text-on-gold` | hierarchy + CTA ink |
| Ice (PRIMARY) | `--ice-100…700` `--ice-glow` | signal, primary CTA, focus |
| Gold (premium) | `--gold-200…600` `--gold-glow` | asset/premium/Investor only |
| Depth | `--depth-700/800/900` | sonar/topographic motif |
| Verdict thermometer | `--signal-too-early`(gray) `--signal-observe`(amber) `--signal-accumulate`(green) `--signal-aggressive`(ice) + `*-glow` | contrarian: coldest = deepest bottom |
| Indicator categories | `--category-fundament/core/auxiliary/confirmation/macro` | 21-indicator grid legend |
| Semantic/status | `--success --warning --danger --info --live --stale --missing` | data freshness, alerts |
| **Plans** | `--plan-smart(+line/glow)` = ice · `--plan-investor(+line/glow)` = gold | tier identity |
| **Metric semantics** | `--metric-probability`(ice) `--metric-risk`(amber) `--metric-risk-low`(green) `--price-up/down` `--flow-in`(green)/`--flow-out`(red) | dashboards |
| **Sentiment ramp** | `--sentiment-fear`(green, contrarian) `--sentiment-neutral`(amber) `--sentiment-greed`(red) | Fear↔Greed |
| **Gating** | `--lock-veil` `--lock-veil-2` `--lock-border`(gold) | Smart locked panels → upgrade |

### Type
- Display: **Bricolage Grotesque** (`--font-display`) — headings, scores, verdicts.
- Body/UI: `--font-sans`. Numeric/labels: `--font-mono` (eyebrows, KPIs, timestamps, chips).
- Sizes/weights come from `typography.css`; headings are 800 weight, tight letter-spacing (≈ −0.03em).

### Spacing / radius
- 8px rhythm. Radii: `--radius-sm/md/lg/xl/pill`. Container widths in `spacing.css`.

### Effects (the “depth / sonar” signature)
- Shadows: `--shadow-xs/card/raise/layer`. Glows: `--glow-ice(-strong)` `--glow-gold`. Blur: `--blur-glass`.
- Gradients: `--grad-abyss` (page), `--grad-glass` (card sheen), `--grad-depth` (ice radial), `--grad-heat` (gold radial), `--grad-ice-cta` `--grad-gold-cta`.
- Texture: 56–58px sonar grid via 2 linear-gradients at `--grid-line` opacity.
- Motion: `--ease-out --ease-emph --dur-fast/dur/dur-slow`.

---

## 3. Component inventory (17)

All under `window.NADIRDesignSystem_54e725`. Props show the meaningful variants; every component also accepts `style`.

### Core
- **BrandLockup** — `size` sm/md/lg · `layout` stack/inline/mark · `tagline` · `glow` · `href`. Retained mark + wordmark; self-contained.
- **Button** — `variant` **primary**(ice CTA)/**gold**(premium, reserved)/secondary/ghost · `size` sm/md/lg · `iconLeft/Right` · `fullWidth` · `disabled` · `href` · `onClick`.
- **Card** — glass surface · `eyebrow` · `title` · `accent` ice/gold/null (glow edge) · `interactive` (hover lift) · `padding`.
- **Badge** — freshness pill · `tone` live/stale/missing/ice/gold/neutral · `dot`. (header “System fresh”.)
- **StatusChip** — outlined verdict/tier capsule · `tone` ice/emerald/amber/red/slate/gold · `size`. (verdict band, plan tier, zone state.)
- **Eyebrow** — mono kicker + glowing dot · `prefix` (default `//`) · `color`. The section-label voice.
- **Input** — labelled text field · `type` · `iconLeft` · `hint` · focus ring + password reveal. (invite/code entry.)
- **SegmentedControl** — `options` (string|`{value,label}`)[] · `value/defaultValue` · `accent` ice/gold · `size` · `fullWidth`. Time ranges / view switches.
- **Modal** — dialog or drawer · `open` · `onClose` · `eyebrow/title/footer` · `width` · `side` null(center)/`right`(drawer) · `closeOnBackdrop`. Invite flow, detail, confirm.
- **Tooltip** + **InfoDot** — hover/focus helper for complex metrics · Tooltip `content` · `side` · `maxWidth`; InfoDot is a ready `?` trigger.
- **LockOverlay** — **gated-panel veil** (the Smart→Investor mechanism) · `children` (teased, blurred) · `title`(“Investor only”) · `note` · `cta` · `onUpgrade` · `blur` · `minHeight` · `compact`.

### Data / viz
- **ScoreRing** — signature Bottom-Score ring · `score` 0–`max` · `size` · `label` · `verdict` override too_early/observe/accumulate/aggressive · stroke follows the contrarian band.
- **VerdictScale** — horizontal 0–100 band with marker · `score`. The 5-band thermometer readout.
- **Gauge** — semicircle · `value/min/max` · `size` · `segments` `{to,color}[]` (Fear↔Greed) or single `color` · `label/unit/caption`. Sentiment, bottom probability, confidence.
- **KpiStat** — mono KPI tile · `label` · `value` · `unit` · `sub` · `accent` (value color) · `align`.
- **Sparkline** — mini area/line · `data` number[] · `color` · `area` · `glow` · `markers`. Metric cards, indicator rows, price container.

---

## 4. Layout patterns

### Dashboard shell (Smart + Investor)
- **Left sidebar** 250px, sticky full-height glass: `BrandLockup` (stack/sm) → nav items → spacer → Settings → **plan card** (tier chip + note; Smart adds an Upgrade button).
  - Nav: Overview · BTC Bottom Strategy · Indicators & Signals · Whales & ETF Flows · History & Cycles · **Alerts · Telegram** · Settings/Account. On **Smart**, the middle three are **locked** (muted, “PRO” tag, `cursor:not-allowed`).
- **Main**: sticky glass header (Eyebrow + H1 left; `SegmentedControl` range + `Badge` freshness + primary/gold action right) → content stack at 24–26px padding.
- **Content grid**: `repeat(auto-fit, minmax(290px,1fr))` for tiles; hero/price use explicit 2-col `minmax(0,…fr)` grids; everything collapses to 1-col on narrow.
- **Hero verdict** (both plans): `ScoreRing` + verdict (`StatusChip`) + `VerdictScale` + a row of `KpiStat`.

### Landing sections (in order)
Nav → Hero → HowItWorks (strategy) → Families (7 signal families) → ProductPreview (live dashboard mock) → Methodology (21 indicators, Investor-detail) → Pricing (Smart vs Investor, invite-only) → Trust (backtesting/authority, no unrealistic claims) → FAQ (collapse/expand) → RequestInvite → Footer.

### Invite gate
Centered column on sonar-arc backdrop: orb → `BrandLockup` → eyebrow → headline → `Input` (code) + primary Enter → divider → “no code?” + gold Request invite → tier chips → disclaimer.

### Prototype hub
`prototype/index.html` — standalone launcher (tokens only, no bundle) linking all four screens + this doc.

---

## 5. Interaction & states

- **Hover:** cards lift `translateY(-2…4px)` + border → `--line-strong` + shadow; buttons brighten; CTA arrows nudge `translateX(4px)`.
- **Focus:** ice focus ring on inputs/controls (keyboard-visible). Maintain ≥44px hit targets.
- **Loading:** glass skeletons — pulse `--bg-elevated` blocks at card dimensions; keep layout stable.
- **Empty:** muted icon + one line + a single action (e.g. “No invite yet → Request invite”).
- **Error:** `--danger` hairline + short mono message + retry; never block the whole shell — degrade per-card.
- **Gated / invite-only (signature):** `LockOverlay` blurs a real teaser and overlays a lock + “Investor only” + gold upgrade CTA (`onUpgrade`). Locked nav items are muted with a “PRO” tag. Access wall = `templates/invite-gate`.
- **Live data:** `Badge tone="live"` + pulsing dot; stale → amber; missing → red.

---

## 6. Responsive

- **Desktop ≥1200px:** full shell, multi-col grids, side-by-side hero.
- **Tablet 720–1199px:** sidebar may collapse to icons or a top drawer; grids reflow to 1–2 cols (`auto-fit minmax`).
- **Mobile <720px:** sidebar → off-canvas/hamburger; all grids 1-col; hero stacks (ring above text); landing cards 1-col; sticky header compresses; hit targets ≥44px; gauges/rings scale by `size`.

---

## 7. Plans & access model

- **No free tier. Invite-only everywhere** — copy uses “Access by invitation / Request invite”, never “Free / Sign up free”.
- **Smart** (replaces *Free*) — ice identity. Tracks the **BTC bottom only**: Bottom Score, 5-band verdict, aggregated sentiment, **flow direction only**, and **meta-info** about the strategy (21 indicators; 7 data families) — **never methodology/formulas, vendor lists, weights, thresholds, or contributions**. Everything deeper is `LockOverlay`-gated to Investor; one primary upgrade CTA.
- **Investor** (replaces *Full*) — gold identity, the **complete terminal**: full 21-indicator confluence (weights, contributions, sparklines), whale & ETF event log w/ amounts, cycle phase, DCA tranche plan, Telegram alerts up to 3 times daily, one-year scoring history, and strategy access for future cycles.

---

## 8. Screen map

| Screen | File | Key components | UX / state notes |
|---|---|---|---|
| **Landing** | `templates/landing/index.html` | BrandLockup, Button, Card, StatusChip, ScoreRing, VerdictScale, KpiStat, Badge, all sections | PL/EN toggle in Nav (state lifted in `App`). FAQ accordion. Pricing = Smart vs Investor, invite-only. Methodology lists 21 indicators (concept only). |
| **Smart dashboard** | `templates/dashboard-smart/DashboardSmart.dc.html` | shell, ScoreRing, VerdictScale, KpiStat, Gauge, StatusChip, **LockOverlay×3**, Modal, Button | **Open:** verdict hero, strategy meta-families (counts), aggregated sentiment, flow *direction*. **Gated:** 21-indicator table, whale/ETF log, DCA plan. Locked nav items. Upgrade CTA → invite Modal. Tweaks: `lang`, `score`. |
| **Investor dashboard** | `templates/dashboard-investor/DashboardInvestor.dc.html` | shell, ScoreRing, VerdictScale, KpiStat, Gauge×2, Sparkline, StatusChip, Badge, SegmentedControl, Modal, Button | Full terminal: verdict hero, price + sentiment/probability gauges, 21-indicator confluence (dots/values/sparklines/contribution bars), cycle phase, whale/ETF event log, DCA tranches, Telegram note. Invite-member Modal. Tweaks: `lang`, `score`. |
| **Invite gate** | `templates/invite-gate/InviteGate.dc.html` | BrandLockup, Input, Button, StatusChip | Code entry → Enter; “no code” → gold Request invite. Tier chips. Disclaimer. Tweaks: `lang`. |
| **Prototype hub** | `prototype/index.html` | tokens only | Launcher → all screens + DESIGN.md + readme. |

---

## 9. File structure

```
styles.css                 → single CSS entry (@imports tokens + base)
tokens/                    → fonts, colors, typography, spacing, effects, base
components/core/           → BrandLockup, Button, Card, Badge, StatusChip, Eyebrow,
                             Input, SegmentedControl, Modal, Tooltip(+InfoDot), LockOverlay
components/data/           → ScoreRing, VerdictScale, Gauge, KpiStat, Sparkline
assets/                    → logo, orb, favicon, preview images
templates/<slug>/          → landing, dashboard-smart, dashboard-investor, invite-gate
prototype/index.html       → standalone launcher
_ds_bundle.js              → compiled UMD bundle (generated — never edit by hand)
DESIGN.md · readme.md      → this handoff + system overview
```

**Naming is developer-facing and stable:** PascalCase components, kebab-case template slugs, CSS custom-property tokens grouped by concern. Each component ships a `.d.ts` (props contract) and a `@dsCard` thumbnail.

---

*Educational/informational product — not financial advice. Invite-only; no free signup.*

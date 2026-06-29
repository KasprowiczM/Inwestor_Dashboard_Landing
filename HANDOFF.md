# Landing Page Handoff

## Scope

Updated the BTC Smart Investor landing page only. No changes were made in the main dashboard repository.

## Current UI Decisions

- Hero headline scale now matches the section-title family instead of the previous oversized poster scale.
- Hero copy uses: "Znajdz dolek. Jak wytrawni inwestorzy." / "Find the floor. Like seasoned investors."
- Primary hero buttons are lower and closer to the top-nav proportions.
- Section vertical spacing is reduced globally through the local `--section-y` override.
- The confluence card shows only "21 model indicators"; it does not expose provider counts.
- Pricing has an EUR/PLN selector:
  - Smart: 99 EUR / 426 PLN.
  - Investor: 399 EUR / 1716 PLN.
- Investor plan copy now says Telegram alerts are available up to 3 times daily and history covers one year of scoring snapshots.
- Trust section removes testimonials, stars, and named data providers.
- Footer disclaimer is laid out as a separate text column for cleaner wrapping.

## Guardrails

- Do not reveal exact data vendors, weights, thresholds, contributions, or formulas on the landing page.
- Keep Smart and Investor invite-only; do not reintroduce FREE/FULL naming.
- Keep pricing UI ready for a future Stripe integration with user-selected currency.
- Public snapshot integration should use only `bottomScore`, `verdictLabel`, `currentPrice`, and `drawdownPct`.

## Verification

- Run `npm run typecheck`.
- Run `npm run build`.
- Check the page in desktop and mobile viewports before shipping visual changes.

# Landing Page Handoff

## Scope

Updated the BTC Smart Investor landing page only. No changes were made in the main dashboard repository.

## Current UI Decisions

- Hero headline scale now matches the section-title family instead of the previous oversized poster scale.
- Hero copy uses: "Znajdz dolek. Z przewaga analityczna." / "Find the floor. With an analytical edge."
- Hero score panel is a historical 2022 illustrative example only. It must not fetch or display current dashboard data.
- Primary hero buttons are lower and closer to the top-nav proportions.
- Section vertical spacing is reduced globally through the local `--section-y` override.
- The confluence card shows only "21 model indicators"; it does not expose provider counts.
- Pricing has an EUR/PLN selector:
  - Smart: 99 EUR / 426 PLN.
  - Investor: 399 EUR / 1716 PLN.
- Investor plan copy now says Telegram alerts are available up to 3 times daily and history covers one year of scoring snapshots.
- Trust section removes testimonials, stars, and named data providers.
- Footer disclaimer is laid out as a separate text column for cleaner wrapping.
- Footer links now resolve to real pages or home sections, not placeholders.
- Added content pages: indicator glossary, Telegram setup, investment disclaimer, privacy/GDPR, and terms.
- Added SEO/GEO assets: `robots.txt`, `sitemap.xml`, `llms.txt`, static meta tags, dynamic route metadata, canonical links, and JSON-LD.
- Added `vercel.json` rewrites for direct entry into SPA subpages.

## Guardrails

- Do not reveal exact data vendors, weights, thresholds, contributions, or formulas on the landing page.
- Keep Smart and Investor invite-only; do not reintroduce FREE/FULL naming.
- Keep pricing UI ready for a future Stripe integration with user-selected currency.
- Landing page must not query dashboard APIs for current market data. Current readings belong inside the authenticated terminal.
- Legal text is a strong operational draft, not a substitute for formal legal review before production publication.
- If new public pages are added, update `sitemap.xml`, `llms.txt`, `vercel.json`, route metadata, and footer links together.

## Verification

- Run `npm run typecheck`.
- Run `npm run build`.
- Check the page in desktop and mobile viewports before shipping visual changes.

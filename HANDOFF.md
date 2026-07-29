# Landing Page Handoff — v28.4 Sync

## Scope

Zaktualizowano landing page **BTC Smart Investor Terminal** (`Inwestor_Dashboard_Landing`) do pełnej spójności z główną aplikacją produkcyjną **BTC Bottom Dashboard (v28.4)**.

## Key Upgrades & UI Decisions (v28.4)

- **Live API Snapshot Integration (`src/lib/api.ts`):** Hero i Product Preview łączą się bezpośrednio z endpointem `https://btc-dash.64bit.site/api/snapshot`.
- **Toggle Trybu Danych:** Dodano przełącznik umożliwiający porównanie odczytu rynkowego na żywo (API) z przykładem historycznym dna z listopada 2022 r.
- **Silnik Scoringowy V2.3.0 Era-Aware:** Wprowadzono pełny opis 4 rodzin konfluencji (Wycena 30%, Podaż 30%, Cykl 20%, Popyt ETF 20%) oraz otoczenia makro.
- **Flaga Generacyjne Dno (Generational Bottom):** Zaprezentowano wykrywanie skrajnej kapitulacji przy dołku ≥4 ortogonalnych bloków.
- **Słownik 28 Wskaźników V2:** Strona `/slownik-wskaznikow` zawiera pełną listę 28 wskaźników podzielonych na 5 czytelnych sekcji.
- **Ochrona Poufności (Server-Side Redaction):** Landing pokazuje wyciąg statusowy bez ujawniania wag, progów normalizacji i wkładów poszczególnych wskaźników.
- **Płatności i Auto-Checkout Stripe:** Przycisk zakupu wyzwala parametrem query `?trigger_checkout=true&plan=...&term=...&currency=...`.
- **Harmonogram Odświeżania:** Dokładna informacja o 3 odświeżeniach/dobę (AM 06:00, PM 12:00, 18:00 UTC), watchdogu świeżości i digeście o 07:00 UTC.

## Guardrails & Security

- Nie ujawniać dokładnych wag ani chronionej metodologii na landing page.
- Wszystkie plany pozostają w konwencji **Invite-Only (Smart vs Investor)**.
- Wykorzystywać bezpieczny handler `fetchPublicSnapshot` z fallbackiem buforowym na wypadek problemów sieciowych.

## Verification Checklist

- [x] Run `npm run typecheck` — 0 błędów typowania TS.
- [x] Run `npm run build` — produkcyjny build zbudowany w dist/.
- [x] Test zapytań do API `https://btc-dash.64bit.site/api/snapshot`.
- [x] Git merge/commit na gałęzi `main`.

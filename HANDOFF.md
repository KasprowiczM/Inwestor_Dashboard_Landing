# Landing Page Handoff — v28.4 Sync

## Scope

Zaktualizowano landing page **BTC Smart Investor Terminal** (`Inwestor_Dashboard_Landing`) do pełnej spójności z główną aplikacją produkcyjną **BTC Bottom Dashboard (v28.4)**. Przeprowadzono głęboki audyt treści, ujednolicono liczbę wskaźników do 28 w całym projekcie oraz zweryfikowano 100% tłumaczeń na język angielski.

## Key Upgrades & UI Decisions (v28.4)

- **Ujednolicenie Liczby Wskaźników:** Zastąpiono wszystkie stare wzmianki (np. 21 czy 24) spójną liczbą **28 wskaźników** w 4 rodzinach konfluencji V2 + makro, zarówno w języku polskim, jak i angielskim.
- **Weryfikacja Tłumaczeń EN:** Przeaudytowano i uzupełniono wszystkie tłumaczenia w `src/App.tsx`, `src/i18n.tsx`, meta-tagach, opisie planów i słowniku.
- **Usunięcie Widoku LIVE ze Strony Publicznej:** Landing page prezentuje wyłącznie historyczny przykład kalibracyjny z dołka 2022 r. Odczyty na żywo są zarezerwowane wyłącznie dla zalogowanych użytkowników zautoryzowanego terminala.
- **Anonimizacja Dostawców Danych:** Usunięto nazwy konkretnych dostawców (BGeometrics, SoSoValue, FRED, alternative.me itp.). Wszędzie stosowany jest opis ogólny o równoległej agregacji danych z wielu niezależnych źródeł rynkowych, giełdowych, on-chain, sentymentu i makro.
- **Silnik Scoringowy V2.3.0 Era-Aware:** Wprowadzono pełny opis 4 rodzin konfluencji (Wycena 30%, Podaż 30%, Cykl 20%, Popyt ETF 20%) oraz otoczenia makro.
- **Flaga Generacyjne Dno (Generational Bottom):** Zaprezentowano wykrywanie skrajnej kapitulacji przy dołku ≥4 ortogonalnych bloków.
- **Słownik 28 Wskaźników V2:** Strona `/slownik-wskaznikow` zawiera pełną listę 28 wskaźników bez ujawniania dostawców i chronionych wag.
- **Płatności i Auto-Checkout Stripe:** Przycisk zakupu wyzwala parametrem query `?trigger_checkout=true&plan=...&term=...&currency=...`.

## Guardrails & Security

- Nie ujawniać dokładnych dostawców, wag, progów normalizacji ani wkładów na landing page.
- Wszystkie odczyty na żywo pozostają chronione wewnątrz zautoryzowanego portalu.

## Verification Checklist

- [x] Run `npm run typecheck` — 0 błędów typowania TS.
- [x] Run `npm run build` — produkcyjny build zbudowany w dist/.
- [x] Audyt 100% treści PL oraz EN — zweryfikowane.
- [x] Git merge/commit na gałęzi `main`.

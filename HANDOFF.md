# Landing Page Handoff — v28.4 Sync

## Scope

Zaktualizowano landing page **BTC Smart Investor Terminal** (`Inwestor_Dashboard_Landing`) do pełnej spójności z główną aplikacją produkcyjną **BTC Bottom Dashboard (v28.4)** oraz usunięto wskazane usterki wizualne i językowe.

## Key Upgrades & UI Decisions (v28.4)

- **Poprawa Tłumaczenia Statystyk EN (`3x Daily`):** Zaktualizowano etykietę odświeżania w sekcjach Hero oraz Trust z hardkodowanego `3× / dobę` na dynamiczne `L(lang, '3× / dobę', '3x Daily')`.
- **Naprawa Wykraczania Tekstu w Kartach KPI (`Generational`):** Skorygowano style CSS dla `.ds-kpi strong` i `.preview-kpis` (`minmax(130px, 1fr)`, `clamp(0.8rem, 1.1vw, 1.25rem)`, `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`), eliminując problem wychodzenia napisów poza krawędź obramowania karty.
- **Trwała Persystencja Języka (`localStorage` + `URL` + SPA Router):** Wybór języka `PL` / `EN` jest zapamiętywany w `localStorage`. Nawigacja między podstronami wykorzystuje nawigację SPA (`window.history.pushState`).
- **Pełne Tłumaczenia 100% EN:** Przeaudytowano wszystkie tytuły, nagłówki, etykiety, modale, karty mockupu terminala, statusy i legalne podstrony.
- **Ujednolicenie Liczby Wskaźników:** Zastąpiono wszystkie stare wzmianki (np. 21 czy 24) spójną liczbą **28 wskaźników** w 4 rodzinach konfluencji V2 + makro.
- **Usunięcie Widoku LIVE ze Strony Publicznej:** Landing page prezentuje wyłącznie historyczny przykład kalibracyjny z dołka 2022 r. Odczyty na żywo są zarezerwowane dla zalogowanych użytkowników terminala.
- **Anonimizacja Dostawców Danych:** Usunięto nazwy konkretnych dostawców (BGeometrics, SoSoValue, FRED, alternative.me itp.).

## Guardrails & Security

- Nie ujawniać dokładnych dostawców, wag, progów normalizacji ani wkładów na landing page.
- Wszystkie odczyty na żywo pozostają chronione wewnątrz zautoryzowanego portalu.

## Verification Checklist

- [x] Run `npm run typecheck` — 0 błędów typowania TS.
- [x] Run `npm run build` — produkcyjny build zbudowany w dist/.
- [x] Test etykiety `3x Daily` w wersji EN w Hero i Trust.
- [x] Test braku wykraczania napisu `Generational` w kartach KPI.
- [x] Git merge/commit na gałęzi `main`.

# Landing Page Handoff — v2.4.0 (Ultra Review V5 Sync)

Data: 2026-09-10

## Scope

Zaktualizowano landing page **BTC Smart Investor Terminal** (`Inwestor_Dashboard_Landing`) do pełnej spójności z architekturą i silnikiem produkcyjnym **BTC Bottom Dashboard (v2.4.0 / Ultra Review V5)** po domknięciu etapów A–H przeglądu Ultra Review.

## Key Upgrades & UI Decisions (v2.4.0 / Ultra Review V5)

- **Podniesienie Wersji Silnika (V2.4.0 Era-Aware Engine):** Zsynchronizowano oznaczenia w sekcjach Hero, Mockupie Terminala, Krokach Metodologii, FAQ i Stopce do wersji V2.4.0 z wyróżnikiem architektury Ultra Review V5.
- **Rygor Kalendarza Sesji USA (NYSE 2024–2028):** Wprowadzono do opisów metodologii i FAQ informację o module kalendarza sesji NYSE (`us-market-calendar.ts`), ujednoliconej regule świeżości T+1 (03:00 ET) oraz rozdzieleniu oceny `flows` i `holdings` (eliminacja fałszywych alarmów w święta i weekendy).
- **Dwufazowa Bariera Transportowa (DeliveryReceipt):** Opisano gwarancję zero duplikatów dla alertów Telegram dzięki dwufazowemu zatwierdzaniu (`begin_send_v5` -> HTTP -> `complete_send_v5`), tokenom dzierżawy (`lease_token`, `fence_token`) oraz kryptograficznej sumie SHA-256 (`contentHash`).
- **Atomowe Plany Publikacji (Publication Plans):** Odnotowano transakcyjne procedury bazy danych weryfikujące 100% dostarczenia zadań publikacji przed sfinalizowaniem statusu decyzji.
- **1487-dniowy Golden Freeze i Replay Manifest:** Zaktualizowano sekcję Zaufania (Trust) i plan Investor, eksponując matematyczną i kryptograficzną odtwarzalność historii cykli co do bajta (38/38 wymagań zweryfikowanych dowodowo).
- **Niezmienny Ledger Audytowy SQL:** Odnotowano ochronę bazy danych (triggery SQL blokujące `DELETE` i `TRUNCATE` na tabelach ledgeru transakcyjnego oraz odebranie uprawnień EXECUTE rolom publicznym).
- **Harmonogram Odświeżania:** Ujednolicono komunikację slotów odświeżania na **06:00, 14:00, 22:00 UTC** z automatyczną prezentacją w strefie czasowej przeglądarki użytkownika oraz porannym digestem o **07:00 UTC**.
- **CHANGELOG.md:** Utworzono oficjalny plik `CHANGELOG.md` w standardzie Keep a Changelog.

## Guardrails & Security

- Nie ujawniać dokładnych dostawców, wag, progów normalizacji ani wkładów na publicznym landing page.
- Wszystkie odczyty na żywo pozostają chronione wewnątrz zautoryzowanego portalu; landing page prezentuje wyłącznie historyczny przykład kalibracyjny z dołka 2022 r.

## Verification Checklist

- [x] Run `npm run typecheck` — 0 błędów typowania TS.
- [x] Run `npm run build` — produkcyjny build pomyślnie zbudowany w dist/.
- [x] Weryfikacja spójności dwujęzycznej (PL / EN).
- [x] Utworzenie CHANGELOG.md i aktualizacja README.md.
- [x] Synchronizacja pamięci projektu w AI Agentic OS.
- [x] Git commit i push do gałęzi main.

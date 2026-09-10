# Dziennik Zmian (CHANGELOG)

Wszystkie istotne zmiany w projekcie **BTC Smart Investor Terminal — Landing Page** (`Inwestor_Dashboard_Landing`) są rejestrowane w tym dokumencie.

Format oparty jest na zasadach [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.4.0] - 2026-09-10

### Dodano (Added)
- **Synchronizacja z architekturą Ultra Review V5 (Etapy A–H):**
  - Odzwierciedlenie rygoru kalendarza sesji rynkowych USA (**NYSE 2024–2028**, moduł `us-market-calendar.ts`) z terminem świeżości T+1 (03:00 ET najbliższego dnia sesyjnego po T) oraz rozdzieleniem oceny przepływów (`flows`) i posiadanych zasobów (`holdings`).
  - Prezentacja dwufazowej bariery transportowej powiadomień **DeliveryReceipt** (`begin_send_v5` -> HTTP -> `complete_send_v5`) z tokenami dzierżawy (`lease_token`, `fence_token`), sumą kontrolną SHA-256 (`contentHash`) i unikalnym `providerMessageId` gwarantującą zero duplikatów alertów.
  - Prezentacja atomowych planów publikacji (**Publication Plans**) weryfikujących 100% dostarczenia zadań manifestu przed sfinalizowaniem statusu decyzji.
  - Prezentacja **1487-dniowego golden freeze** i deterministycznego manifestu odtwarzalności (replay manifest), weryfikowanego kryptograficznie co do bajta w planie Investor i sekcji zaufania.
  - Uwzględnienie niezmiennego ledgeru audytowego SQL (**state-transition audit ledger**) chronionego triggerami bazy blokującymi operacje `DELETE` i `TRUNCATE` oraz utwardzonymi uprawnieniami ACL (`service_role`).
  - Ujednolicenie harmonogramu odświeżania danych wewnątrz terminala do trzech slotów: **06:00, 14:00, 22:00 UTC** z automatycznym przeliczaniem na lokalną strefę czasową przeglądarki inwestora oraz porannym digestem o **07:00 UTC**.

### Zmieniono (Changed)
- **Oznaczenie wersji silnika:** Podniesiono oznaczenie w całym serwisie z `V2.3.0` do **`V2.4.0 Era-Aware Engine (Ultra Review V5)`** (hero, kroki metodologii, mockup terminala, FAQ, stopka).
- **Karty statystyk i filary Zaufania (Trust & Resilience):**
  - `1487 Dni` (golden freeze i replay manifest co do bajta).
  - `Multi-Source` (niezależne źródła rynkowe i on-chain).
  - `Dziennie` (sloty 06/14/22 UTC w strefie lokalnej).
  - `Ultra Review V5` (niezmienny ledger audytowy SQL).
- **FAQ i Telegram:** Uzupełniono odpowiedzi o specyfikację silnika V2.4.0, procedury Publication Plans oraz barierę DeliveryReceipt.
- **Tytuły i opisy meta (SEO / OpenGraph):** Zaktualizowano tytuły stron w `ROUTES` pod kątem silnika V2.4.0 i Ultra Review V5.

---

## [2.3.0] - 2026-09-08

### Dodano (Added)
- **Miesięczny model subskrypcyjny PLN:** Prezentacja planów Smart (299 PLN/mies.) oraz Investor (999 PLN/mies.) bez blokady 6-miesięcznej.
- **Dopasowanie schematu JSON-LD:** Zgodność ofert w znacznikach schema.org ze stawkami miesięcznymi w PLN.
- **Trwała persystencja języka:** Zapis wyboru PL/EN w `localStorage` z integracją z routerem SPA (`window.history.pushState`).

### Zmieniono (Changed)
- **Etykieta statystyk odświeżania:** Zmiana formatu z `3× / dobę` na czystą postać `Dziennie` (PL) / `Daily` (EN) w Hero i Trust.
- **Ujednolicenie liczby wskaźników:** Spójne oznaczenie 28 wskaźników V2 w 4 rodzinach konfluencji + makro.
- **Ochrona danych i anonimizacja źródeł:** Usunięcie komercyjnych nazw dostawców danych na publicznym landing page.
- **Widok kalibracyjny:** Hero i podgląd prezentują wyłącznie sprawdzony odczyt z dołka 2022 r.; odczyty na żywo chronione po zalogowaniu.

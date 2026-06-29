# BTC Bottom Dashboard — Landing Page

Oficjalne repozytorium strony lądowania (landing page) dla projektu **[BTC Bottom Dashboard (Strategia Inwestora Długoterminowego)](https://github.com/KasprowiczM/Inwestor_Dashboard)**.

Strona produkcyjna głównego panelu: [https://btc-dash.64bit.site](https://btc-dash.64bit.site)

---

## 🎯 Cel Projektu

Główny portal **BTC Bottom Dashboard** to zaawansowane narzędzie dla inwestorów kryptowalutowych, oceniające rynek w oparciu o 21 wskaźników on-chain, makro i sentymentu (obliczając *Bottom Score* w skali 0–100). Ponieważ dostęp do terminala oraz rejestracja są ograniczone do systemu zaproszeń (**Invite-Only**), ten **landing page** ma kluczowe zadania:

1. **Edukacja i Prezentacja:** Wyjaśnienie założeń Strategii Inwestora Długoterminowego BTC oraz przedstawienie korzyści z korzystania z panelu.
2. **Dwupoziomowy Model:** Wyjaśnienie różnicy między planem **Smart** i **Investor** bez używania modelu FREE/FULL.
3. **Konwersja:** Zbieranie zapisów na listę oczekujących (Waitlist) lub umożliwienie wysłania prośby o zaproszenie do administratora.
4. **Teaser Produktowy:** Pokazanie bezpiecznego, publicznego kontekstu Bottom Score bez ujawniania wag, progów, wkładów ani listy dostawców danych.

---

## 🛠️ Proponowany Stos Technologiczny

Projekt jest przygotowany pod nowoczesne technologie webowe:
*   **Framework:** React + Vite.
*   **Stylizacja:** Vanilla CSS / TailwindCSS (zapewniające płynne animacje, glassmorphism i elegancki Dark Mode).
*   **Integracja:** Linkowanie do głównego dashboardu, formularza zaproszenia i docelowo bezpieczny odczyt publicznego snapshotu.

---

## 🔌 Integracja z Głównym Dashboardem

Landing page powinien korzystać wyłącznie z bezpiecznego, zredagowanego endpointu publicznego:

*   **Snapshot:** `https://btc-dash.64bit.site/api/snapshot`
*   **Publiczny zakres danych:** `bottomScore`, `verdictLabel`, `currentPrice`, `drawdownPct`
*   **Zasada:** nie ujawniać wag, progów, wkładów, listy dostawców danych ani szczegółowej metodologii.

Przejścia do produktu prowadzą do:
*   **Dashboard:** `https://btc-dash.64bit.site`
*   **Logowanie:** `https://btc-dash.64bit.site/login`

## 💳 Plany i Waluty

Landing prezentuje dwa plany, oba invite-only:

*   **Smart:** 99 EUR albo 426 PLN.
*   **Investor:** 399 EUR albo 1716 PLN.

Przełącznik waluty w sekcji planów przygotowuje UI pod późniejsze podłączenie płatności Stripe w wybranej walucie.

## 🧭 Aktualny Handoff

Ostatni etap zmian landing page:

*   Hero ma mniejszy nagłówek, zbliżony skalą do tytułów sekcji, oraz niższe CTA.
*   Hasło hero brzmi: „Znajdź dołek. Jak wytrawni inwestorzy.”
*   Sekcje mają ciaśniejszy pionowy rytm.
*   Karta konfluencji nie pokazuje liczby źródeł danych, tylko 21 wskaźników w modelu.
*   Metodologia mówi o kalibracji na dołkach 2018/2022 i uwzględnieniu ery ETF.
*   Sekcja zaufania nie zawiera testimoniali, gwiazdek ani nazw dostawców danych.
*   Stopka ma disclaimer w osobnej, czytelniejszej kolumnie.

---

## 🚀 Uruchomienie Lokalne

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/KasprowiczM/Inwestor_Dashboard_Landing.git
   cd Inwestor_Dashboard_Landing
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Skonfiguruj plik ze zmiennymi środowiskowymi `.env.local`:
   ```bash
   VITE_DASHBOARD_URL=https://btc-dash.64bit.site
   ```

4. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

---

## 👥 Autor

* **Kamil Kasprowicz** — [GitHub](https://github.com/KasprowiczM)

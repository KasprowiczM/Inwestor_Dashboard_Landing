# BTC Bottom Dashboard — Landing Page

Oficjalne repozytorium strony lądowania (landing page) dla projektu **[BTC Bottom Dashboard (Strategia Inwestora Długoterminowego)](https://github.com/KasprowiczM/Inwestor_Dashboard)**.

Strona produkcyjna głównego panelu: [https://btc-dash.64bit.site](https://btc-dash.64bit.site)

---

## 🎯 Cel Projektu

Główny portal **BTC Bottom Dashboard** to zaawansowane narzędzie dla inwestorów kryptowalutowych, oceniające rynek w oparciu o 21 wskaźników on-chain, makro i sentymentu (obliczając *Bottom Score* w skali 0–100). Ponieważ dostęp do pełnej wersji panelu (Plan FULL) oraz rejestracja są ograniczone do systemu zaproszeń (**Invite-Only**), ten **landing page** ma kluczowe zadania:

1. **Edukacja i Prezentacja:** Wyjaśnienie założeń Strategii Inwestora Długoterminowego BTC oraz przedstawienie korzyści z korzystania z panelu.
2. **Dwupoziomowy Model:** Wyjaśnienie różnicy między planem darmowym (Plan FREE / Light) a pełnym (Plan FULL).
3. **Konwersja:** Zbieranie zapisów na listę oczekujących (Waitlist) lub umożliwienie wysłania prośby o zaproszenie do administratora.
4. **Teaser Produktowy:** Pokazanie symulowanego stanu rynku zgodnego z design systemem, bez pobierania live danych i bez ujawniania szczegółów strategii.

---

## 🛠️ Proponowany Stos Technologiczny

Projekt jest przygotowany pod nowoczesne technologie webowe:
*   **Framework:** React + Vite.
*   **Stylizacja:** Vanilla CSS / TailwindCSS (zapewniające płynne animacje, glassmorphism i elegancki Dark Mode).
*   **Integracja:** Linkowanie do głównego dashboardu i formularza zaproszenia bez pobierania danych live na landing page'u.

---

## 🔌 Integracja z Głównym Dashboardem

Landing page nie odpytuje publicznego API głównej aplikacji. Hero pokazuje statyczny, demonstracyjny stan Bottom Score zgodny z design systemem, a przejścia do produktu prowadzą do:
*   **Dashboard:** `https://btc-dash.64bit.site`
*   **Logowanie:** `https://btc-dash.64bit.site/login`

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

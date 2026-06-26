# BTC Bottom Dashboard — Landing Page

Oficjalne repozytorium strony lądowania (landing page) dla projektu **[BTC Bottom Dashboard (Strategia Inwestora Długoterminowego)](https://github.com/KasprowiczM/Inwestor_Dashboard)**.

Strona produkcyjna głównego panelu: [https://btc-dash.64bit.site](https://btc-dash.64bit.site)

---

## 🎯 Cel Projektu

Główny portal **BTC Bottom Dashboard** to zaawansowane narzędzie dla inwestorów kryptowalutowych, oceniające rynek w oparciu o 21 wskaźników on-chain, makro i sentymentu (obliczając *Bottom Score* w skali 0–100). Ponieważ dostęp do pełnej wersji panelu (Plan FULL) oraz rejestracja są ograniczone do systemu zaproszeń (**Invite-Only**), ten **landing page** ma kluczowe zadania:

1. **Edukacja i Prezentacja:** Wyjaśnienie założeń Strategii Inwestora Długoterminowego BTC oraz przedstawienie korzyści z korzystania z panelu.
2. **Dwupoziomowy Model:** Wyjaśnienie różnicy między planem darmowym (Plan FREE / Light) a pełnym (Plan FULL).
3. **Konwersja:** Zbieranie zapisów na listę oczekujących (Waitlist) lub umożliwienie wysłania prośby o zaproszenie do administratora.
4. **Dynamiczny Teaser:** Wyświetlanie aktualnego werdyktu rynkowego lub Bottom Score pobieranego bezpośrednio z publicznego API głównego dashboardu (`/api/snapshot`) lub bazy danych, aby zachęcić użytkowników do interakcji.

---

## 🛠️ Proponowany Stos Technologiczny

Projekt jest przygotowany pod nowoczesne technologie webowe:
*   **Framework:** React / Next.js (lub czysty HTML/CSS/JS w zależności od wymagań dotyczących optymalizacji SEO i szybkości ładowania).
*   **Stylizacja:** Vanilla CSS / TailwindCSS (zapewniające płynne animacje, glassmorphism i elegancki Dark Mode).
*   **Integracja API:** Komunikacja z API głównego projektu w celu pobierania stanu rynku (publiczny Bottom Score / verdict).

---

## 🔌 Integracja z Głównym Dashboardem

Aby wyświetlić aktualne dane rynkowe na landing page'u bez konieczności duplikowania logiki obliczeniowej, strona może odpytywać publiczny endpoint głównej aplikacji:
*   **Endpoint:** `https://btc-dash.64bit.site/api/snapshot` (lub dedykowany endpoint dla planu FREE).
*   **Zwracane dane:** Uproszczony Bottom Score, aktualny werdykt (np. *Strefa Akumulacji*, *Obserwuj*) oraz cena spot.

---

## 🚀 Uruchomienie Lokalne

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/KasprowiczM/Inwestor_Dashboard_Landing.git
   cd Inwestor_Dashboard_Landing
   ```

2. Zainstaluj zależności (po zainicjowaniu projektu, np. Next.js):
   ```bash
   npm install
   ```

3. Skonfiguruj plik ze zmiennymi środowiskowymi `.env.local`:
   ```bash
   NEXT_PUBLIC_MAIN_DASHBOARD_URL=https://btc-dash.64bit.site
   ```

4. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

---

## 👥 Autor

* **Kamil Kasprowicz** — [GitHub](https://github.com/KasprowiczM)

# BTC Bottom Dashboard — Landing Page

Oficjalne repozytorium strony lądowania (landing page) dla projektu **[BTC Bottom Dashboard (Strategia Inwestora Długoterminowego)](https://github.com/KasprowiczM/Inwestor_Dashboard)**.

Strona produkcyjna głównego panelu: [https://btc-dash.64bit.site](https://btc-dash.64bit.site)

---

## 🎯 Cel Projektu

Główny portal **BTC Bottom Dashboard** to zaawansowany terminal analityczny dla inwestorów kryptowalutowych, oceniający rynek w oparciu o 28 wskaźników w ramach silnika **V2 Era-Aware (v2.3.0)** podzielonych na 4 rodziny konfluencji (Wycena 30%, Podaż 30%, Cykl 20%, Popyt ETF 20%) oraz otoczenie makro (obliczając *Bottom Score* w skali 0–100). Ponieważ dostęp do terminala oraz rejestracja są ograniczone do systemu zaproszeń (**Invite-Only**), ten **landing page** realizuje kluczowe zadania:

1. **Edukacja i Prezentacja:** Wyjaśnienie założeń Strategii Inwestora Długoterminowego BTC w erze spotowych ETF oraz przedstawienie korzyści z korzystania z panelu.
2. **Dwupoziomowy Model:** Wyjaśnienie różnicy między planem **Smart** (widok statusu na żywo z server-side redaction) i **Investor** (pełny terminal analityczny, wagi, progi, flaga Generacyjne Dno, alerty).
3. **Podgląd Historyczny:** Hero i sekcje pokazują wyłącznie sprawdzony przykładowy odczyt historyczny z kalibracji dna poprzednich cykli (np. dołek 2022). Bieżące odczyty na żywo chronią wartość produktu i są dostępne wyłącznie po zalogowaniu do zamkniętego terminala.
4. **Płatności Stripe & Zaproszenia:** Zbieranie zapisów na listę oczekujących (Waitlist) oraz wyzwalanie auto-checkoutu Stripe. Kwoty EUR/USD są orientacyjne — obciążenie zawsze w PLN.
5. **Słownik 28 Wskaźników V2:** Publiczny opis 28 wskaźników on-chain, podaży, sentymentu, ery ETF i makroekonomii bez ujawniania nazw zewnętrznych dostawców danych.
6. **Pełna Dwujęzyczność (PL/EN) & Dopracowany UI:** Czytelne etykiety `Dziennie` (PL) / `Daily` (EN) w kafekach statystyk oraz dopasowany układ kart KPI.

---

## 🛠️ Stos Technologiczny

* **Framework:** React + Vite.
* **Stylizacja:** Vanilla CSS + Nadir Design System v2 (glassmorphism, dark mode, neon-gold/ice accents).
* **Agregacja Danych:** Model korzysta z wielu niezależnych i zweryfikowanych źródeł rynkowych, giełdowych, on-chain i makro równocześnie.
* **Płatności:** Integracja dynamicznych linków Stripe Checkout (`?trigger_checkout=true`).

---

## 💳 Plany i Waluty

Landing prezentuje dwa plany w modelu invite-only z wyzwalaniem Stripe checkout:

* **Smart:** 299 PLN / 79 EUR / $89 netto miesięcznie (płatność zawsze w PLN, VAT doliczany na checkoutcie)
* **Investor:** 999 PLN / 239 EUR / $269 netto miesięcznie (płatność zawsze w PLN, VAT doliczany na checkoutcie)

---

## 🧭 Dokumentacja i Zasady Ochrony Treści (v28.4)

* **Hero Section:** Prezentacja odczytu historycznego z kalibracji dna 2022 z etykietami `Dziennie` (PL) oraz `Daily` (EN).
* **Karty KPI i Layout:** Wartości kart KPI (np. `Generational`) posiadają zabezpieczenia przed wychodzeniem poza ramki (`white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`, responsywny `clamp()`).
* **Anonimizacja Źródeł:** Brak nazw zewnętrznych dostawców.
* **Spójna Liczba Wskaźników:** Wszędzie na stronie widnieje dokładna liczba 28 wskaźników V2.
* **Persystencja Języka:** Stan `lang` jest trwale zapamiętywany i zachowywany podczas nawigacji SPA.

---

## 🚀 Uruchomienie Lokalne

```bash
git clone https://github.com/KasprowiczM/Inwestor_Dashboard_Landing.git
cd Inwestor_Dashboard_Landing
npm install
npm run dev
# Landing uruchomi się na http://localhost:5173
```

---

## 👥 Autor

* **Kamil Kasprowicz** — [GitHub](https://github.com/KasprowiczM)

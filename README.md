# BTC Bottom Dashboard — Landing Page

Oficjalne repozytorium strony lądowania (landing page) dla projektu **[BTC Bottom Dashboard (Strategia Inwestora Długoterminowego)](https://github.com/KasprowiczM/Inwestor_Dashboard)**.

Strona produkcyjna głównego panelu: [https://btc-dash.64bit.site](https://btc-dash.64bit.site)

---

## 🎯 Cel Projektu

Główny portal **BTC Bottom Dashboard** to zaawansowany terminal analityczny dla inwestorów kryptowalutowych, oceniający rynek w oparciu o 28 wskaźników w ramach silnika **V2 Era-Aware (v2.3.0)** podzielonych na 4 rodziny konfluencji (Wycena 30%, Podaż 30%, Cykl 20%, Popyt ETF 20%) oraz otoczenie makro (obliczając *Bottom Score* w skali 0–100). Ponieważ dostęp do terminala oraz rejestracja są ograniczone do systemu zaproszeń (**Invite-Only**), ten **landing page** realizuje kluczowe zadania:

1. **Edukacja i Prezentacja:** Wyjaśnienie założeń Strategii Inwestora Długoterminowego BTC w erze spotowych ETF oraz przedstawienie korzyści z korzystania z panelu.
2. **Dwupoziomowy Model:** Wyjaśnienie różnicy między planem **Smart** (widok statusu na żywo z server-side redaction) i **Investor** (pełny terminal analityczny, wagi, progi, flaga Generacyjne Dno, alerty).
3. **Podgląd Historyczny:** Hero i sekcje pokazują wyłącznie sprawdzony przykładowy odczyt historyczny z kalibracji dna poprzednich cykli (np. dołek 2022). Bieżące odczyty na żywo chronią wartość produktu i są dostępne wyłącznie po zalogowaniu do zamkniętego terminala.
4. **Płatności Stripe & Zaproszenia:** Zbieranie zapisów na listę oczekujących (Waitlist) oraz wyzwalanie auto-checkoutu Stripe dla wybranych walut (PLN, EUR, USD).
5. **Słownik 28 Wskaźników V2:** Publiczny opis 28 wskaźników on-chain, podaży, sentymentu, ery ETF i makroekonomii bez ujawniania nazw zewnętrznych dostawców danych.
6. **Pełna Dwujęzyczność & Persystencja Języka (PL/EN):** Wybór języka jest trwale zapamiętywany w `localStorage` i query param `?lang=en`. Nawigacja między podstronami oraz kotwicami odbywa się w trybie SPA (`history.pushState`), dzięki czemu zmiana podstrony nie powoduje powrotu do języka polskiego.

---

## 🛠️ Stos Technologiczny

* **Framework:** React + Vite.
* **Stylizacja:** Vanilla CSS + Nadir Design System v2 (glassmorphism, dark mode, neon-gold/ice accents).
* **Agregacja Danych:** Model korzysta z wielu niezależnych i zweryfikowanych źródeł rynkowych, giełdowych, on-chain i makro równocześnie.
* **Płatności:** Integracja dynamicznych linków Stripe Checkout (`?trigger_checkout=true`).

---

## 💳 Plany i Waluty

Landing prezentuje dwa plany w modelu invite-only z wyzwalaniem Stripe checkout:

* **Smart:**
  * Miesięcznie: 179 PLN / 39 EUR / $45
  * 6 Miesięcy: 859 PLN / 199 EUR / $225
* **Investor:**
  * 6 Miesięcy: 2849 PLN / 649 EUR / $719

---

## 🧭 Dokumentacja i Zasady Ochrony Treści (v28.4)

* **Hero Section:** Prezentacja wyłącznie odczytu historycznego z kalibracji dna 2022. Brak publicznego API na żywo.
* **Anonimizacja Źródeł:** Brak nazw zewnętrznych dostawców (opisy mówią o agregacji z wielu niezależnych źródeł rynkowych).
* **Spójna Liczba Wskaźników:** Wszędzie na stronie widnieje dokładna liczba 28 wskaźników V2 (usunięto wszelkie stare wzmianki o 21/24 wskaźnikach).
* **Persystencja Języka:** Stan `lang` jest trwale zapamiętywany i zachowywany podczas nawigacji SPA po podstronach.
* **Silnik Scoringowy V2 Engine (v2.3.0):** 4 rodziny konfluencji, mnożnik spójności `c_agree`, flaga *Generacyjne Dno* (≥4 ortogonalne bloki na dnie).
* **Podstrony:** `/slownik-wskaznikow` (pełne 28 wskaźników), `/telegram`, `/zastrzezenia`, `/prywatnosc`, `/regulamin`.
* **SEO & GEO:** `robots.txt`, `sitemap.xml`, `llms.txt`, Open Graph, JSON-LD i rewrites Vercel.

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

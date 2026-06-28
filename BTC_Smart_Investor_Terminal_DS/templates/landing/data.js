/* BTC Smart Investor Terminal — landing content layer (bilingual PL/EN).
   Real strategy data from the product. Exposed on window.NADIR_CONTENT (internal namespace). */
(function () {
  // tiny bilingual picker
  window.L = (lang, pl, en) => (lang === 'en' ? en : pl);

  // Brand strings — single source of truth for the rename.
  window.BTC_BRAND = {
    full:  'BTC Smart Investor Terminal',
    short: 'BTC Terminal',
    line1: 'BTC Smart Investor',   // wordmark line 1
    line2: 'Terminal',             // wordmark line 2 (descriptor)
  };

  const CAT = {
    fundament:    { color: 'var(--category-fundament)',    pl: 'Fundament',     en: 'Fundamentals' },
    core:         { color: 'var(--category-core)',         pl: 'Core',          en: 'Core' },
    auxiliary:    { color: 'var(--category-auxiliary)',    pl: 'Pomocnicze',    en: 'Auxiliary' },
    confirmation: { color: 'var(--category-confirmation)', pl: 'Potwierdzenie', en: 'Confirmation' },
    macro:        { color: 'var(--category-macro)',        pl: 'Makro',         en: 'Macro' },
  };

  // 7 signal families — the marketing-level taxonomy of "what the strategy reads".
  // Surface-level only: counts + concepts, never formulas. Powers the landing
  // "Indicators & data sources" section and the Smart-plan meta cards.
  const FAMILIES = [
    { key: 'history',   icon: 'target',   count: 6, tone: 'var(--category-fundament)',
      pl: 'Historia i cykle',          en: 'History & cycles',
      plD: 'Dane historyczne BTC i przebieg poprzednich cykli — punkt odniesienia dla każdego dna.',
      enD: 'Historical BTC data and the shape of past cycles — the reference frame for every bottom.' },
    { key: 'time',      icon: 'activity', count: 3, tone: 'var(--category-core)',
      pl: 'Okna czasowe i sezonowość', en: 'Time windows & seasonality',
      plD: 'Analiza czasu i cyklu — okna, w których historycznie formowały się dołki.',
      enD: 'Time and cycle analysis — the windows in which bottoms historically formed.' },
    { key: 'percent',   icon: 'bolt',     count: 4, tone: 'var(--category-auxiliary)',
      pl: 'Procenty i procent składany', en: 'Percentage & compounding',
      plD: 'Wyliczenia procentowe i składane — skala drawdownu i potencjału odbicia.',
      enD: 'Percentage and compounded-percentage math — drawdown depth and rebound potential.' },
    { key: 'risk',      icon: 'shield',   count: 4, tone: 'var(--category-confirmation)',
      pl: 'Prawdopodobieństwo i ryzyko', en: 'Probability & risk',
      plD: 'Metryki prawdopodobieństwa i ryzyka — jak pewny jest odczyt strefy.',
      enD: 'Probability and risk metrics — how confident the zone read actually is.' },
    { key: 'market',    icon: 'waves',    count: 5, tone: 'var(--category-core)',
      pl: 'Bieżące wskaźniki rynku',     en: 'Current market indicators',
      plD: 'Aktualny stan rynku — momentum, trend i pozycja wobec średnich.',
      enD: 'The live market state — momentum, trend and position versus key averages.' },
    { key: 'sentiment', icon: 'activity', count: 2, tone: 'var(--category-macro)',
      pl: 'Sentyment rynku',             en: 'Market sentiment',
      plD: 'Strach i chciwość tłumu — kontrariański sygnał wokół dna.',
      enD: 'Crowd fear and greed — the contrarian signal around the floor.' },
    { key: 'whales',    icon: 'layers',   count: 3, tone: 'var(--category-fundament)',
      pl: 'Wieloryby i przepływy ETF',   en: 'Whales & ETF flows',
      plD: 'Ruchy dużego kapitału on-chain i bilans spotowych ETF — co robią silne ręce.',
      enD: 'Large on-chain capital moves and spot-ETF balance — what strong hands are doing.' },
  ];

  // 21 real indicators from indicators.config.ts (Investor-only detail).
  const INDICATORS = [
    { cat: 'fundament', pl: 'Dni od ATH', en: 'Days since ATH' },
    { cat: 'fundament', pl: 'Drawdown od ATH', en: 'Drawdown from ATH' },
    { cat: 'core', pl: 'Cena vs LTH Realized', en: 'Price vs LTH Realized' },
    { cat: 'core', pl: 'MVRV Z-Score', en: 'MVRV Z-Score' },
    { cat: 'core', pl: 'NUPL', en: 'NUPL' },
    { cat: 'core', pl: 'CBBI Score', en: 'CBBI Score' },
    { cat: 'core', pl: 'Cena do 200WMA', en: 'Price to 200WMA' },
    { cat: 'core', pl: 'Puell Multiple', en: 'Puell Multiple' },
    { cat: 'core', pl: 'Reserve Risk', en: 'Reserve Risk' },
    { cat: 'auxiliary', pl: 'RSI Miesięczny', en: 'Monthly RSI' },
    { cat: 'auxiliary', pl: 'Fear & Greed', en: 'Fear & Greed' },
    { cat: 'auxiliary', pl: 'Bilans ETF', en: 'ETF balance' },
    { cat: 'auxiliary', pl: 'Momentum ETF', en: 'ETF flow momentum' },
    { cat: 'auxiliary', pl: 'Rezerwy giełdowe', en: 'Exchange reserves' },
    { cat: 'confirmation', pl: 'LTH SOPR', en: 'LTH SOPR' },
    { cat: 'confirmation', pl: 'VDD Multiple', en: 'VDD Multiple' },
    { cat: 'confirmation', pl: 'Pi Cycle Bottom', en: 'Pi Cycle Bottom' },
    { cat: 'confirmation', pl: 'UTXO w stracie', en: 'UTXOs in loss' },
    { cat: 'confirmation', pl: 'Hash Ribbons', en: 'Hash Ribbons' },
    { cat: 'confirmation', pl: 'STH MVRV', en: 'STH MVRV' },
    { cat: 'macro', pl: 'Płynność netto USD', en: 'USD net liquidity' },
    { cat: 'macro', pl: 'Indeks Dolara', en: 'Dollar Index' },
    { cat: 'macro', pl: 'Spread 10Y-2Y', en: '10Y-2Y spread' },
    { cat: 'macro', pl: 'VIX', en: 'VIX' },
  ];

  const STEPS = [
    {
      n: '01',
      plT: 'Konfluencja, nie pojedynczy sygnał',
      enT: 'Confluence, not a single signal',
      plD: '21 wskaźników on-chain, cyklicznych, sentymentu i makro — odświeżanych trzy razy dziennie z redundancją źródeł.',
      enD: '21 on-chain, cycle, sentiment and macro indicators — refreshed three times a day with source redundancy.',
    },
    {
      n: '02',
      plT: 'Jeden Bottom Score 0–100',
      enT: 'One Bottom Score 0–100',
      plD: 'Silnik waży wskaźniki, weryfikuje kompletność danych i confidence, po czym sprowadza wszystko do jednej liczby.',
      enD: 'The engine weights indicators, checks data completeness and confidence, then collapses it to a single number.',
    },
    {
      n: '03',
      plT: 'Werdykt i Okno Akumulacji',
      enT: 'Verdict and Accumulation Window',
      plD: 'Pięć werdyktów w ramach okna DCA — od „za wcześnie" po „agresywną akumulację". Decyzja, nie wykres.',
      enD: 'Five verdicts inside the DCA window — from "too early" to "aggressive accumulation". A decision, not a chart.',
    },
  ];

  const BANDS = [
    { tone: 'slate',   range: '0–29',   pl: 'Za wcześnie / Obserwuj', en: 'Too early / Observe', plD: 'Okno zamknięte. Cierpliwie czekaj.', enD: 'Window closed. Wait patiently.' },
    { tone: 'amber',   range: '30–54',  pl: 'Obserwuj', en: 'Observe', plD: 'Akumulacja się zbliża. Przygotuj plan.', enD: 'Accumulation nears. Prepare the plan.' },
    { tone: 'emerald', range: '55–77',  pl: 'Strefa akumulacji', en: 'Accumulation zone', plD: 'Okno otwarte. Regularne zakupy DCA.', enD: 'Window open. Regular DCA buys.' },
    { tone: 'ice',     range: '78–100', pl: 'Agresywna akumulacja', en: 'Aggressive accumulation', plD: 'Najchłodniejszy odczyt. Przyspiesz DCA.', enD: 'Coldest read. Accelerate DCA.' },
  ];

  // Two invite-only tiers. No free signup; nothing here is truly free.
  const PLANS = [
    {
      key: 'smart',
      name: 'Smart',
      tag: 'Na zaproszenie',
      tagEn: 'Invite-only',
      accent: 'ice',
      plPrice: 'Tylko dno', enPrice: 'Bottom only',
      plPer: 'dostęp na zaproszenie', enPer: 'access by invitation',
      plDesc: 'Inteligentne śledzenie dna BTC. Widzisz status strategii i zagregowane sygnały — bez wglądu w metodologię.',
      enDesc: 'Smart tracking of the BTC bottom. You see the strategy status and aggregated signals — without seeing the methodology.',
      features: [
        { pl: 'Bottom Score na żywo i 5-pasmowy werdykt', en: 'Live Bottom Score & 5-band verdict', on: true },
        { pl: '„Gdzie jesteśmy" w oknie akumulacji', en: '"Where we are" in the accumulation window', on: true },
        { pl: 'Meta strategii: 21 wskaźników w 7 rodzinach danych', en: 'Strategy meta: 21 indicators across 7 data families', on: true },
        { pl: 'Zagregowany indeks sentymentu i momentum', en: 'Aggregated sentiment & momentum index', on: true },
        { pl: 'Wieloryby i ETF — tylko kierunek', en: 'Whales & ETF — direction only', on: true },
        { pl: 'Pełna siatka 21 wskaźników, wagi i wkłady', en: 'Full 21-indicator grid, weights & contributions', on: false },
        { pl: 'Planer transz DCA i progi wejścia', en: 'DCA tranche planner & entry thresholds', on: false },
        { pl: 'Replay historii, cykle i alerty Telegram', en: 'History replay, cycles & Telegram alerts', on: false },
      ],
    },
    {
      key: 'investor',
      name: 'Investor',
      tag: 'Pełny terminal',
      tagEn: 'Full terminal',
      accent: 'gold',
      plPrice: 'Pełny dostęp', enPrice: 'Full access',
      plPer: 'na zaproszenie', enPer: 'by invitation',
      plDesc: 'Cały terminal: konfluencja on-chain, wagi, wkłady, plan DCA i alerty. Poważny wybór dla zaangażowanego inwestora BTC.',
      enDesc: 'The whole terminal: on-chain confluence, weights, contributions, DCA plan and alerts. The serious choice for the committed BTC investor.',
      features: [
        { pl: 'Wszystko z planu Smart', en: 'Everything in Smart', on: true },
        { pl: 'Pełna siatka 21 wskaźników ze sparklines', en: 'Full 21-indicator grid with sparklines', on: true },
        { pl: 'Wagi, wkłady, progi normalizacji, mnożnik G', en: 'Weights, contributions, thresholds, G-multiplier', on: true },
        { pl: 'Planer transz DCA i strefy wejścia', en: 'DCA tranche planner & entry zones', on: true },
        { pl: 'Pełna oś zdarzeń wielorybów i ETF', en: 'Full whale & ETF event timeline', on: true },
        { pl: 'Replay historii i cykli (2018 · 2022)', en: 'History & cycle replay (2018 · 2022)', on: true },
        { pl: 'Alerty Telegram co 60 min', en: 'Telegram alerts every 60 min', on: true },
        { pl: 'Flaga Generacyjne Dno', en: 'Generational Bottom flag', on: true },
      ],
    },
  ];

  const FAQ = [
    {
      pl: 'Dlaczego dostęp tylko na zaproszenie?',
      en: 'Why is access invite-only?',
      plA: 'BTC Smart Investor Terminal to zamknięty portal — nie ma darmowej rejestracji. Nowi użytkownicy dołączają wyłącznie na zaproszenie aktywnego członka lub administratora. Utrzymujemy mały, świadomy krąg i chronimy metodologię strategii.',
      enA: 'BTC Smart Investor Terminal is a closed portal — there is no free signup. New users join only on an invite from an active member or admin. We keep a small, deliberate circle and protect the strategy methodology.',
    },
    {
      pl: 'Czym różni się Smart od Investor?',
      en: 'How does Smart differ from Investor?',
      plA: 'Smart śledzi wyłącznie dno BTC: pokazuje Bottom Score, werdykt i zagregowane sygnały oraz meta-informacje o strategii (ile wskaźników, jakie rodziny danych) — bez metodologii. Investor odblokowuje cały terminal: pełną siatkę wskaźników, wagi, wkłady, plan DCA, oś zdarzeń i alerty.',
      enA: 'Smart tracks the BTC bottom only: it shows the Bottom Score, the verdict, aggregated signals and meta-information about the strategy (how many indicators, which data families) — without the methodology. Investor unlocks the whole terminal: the full indicator grid, weights, contributions, the DCA plan, the event timeline and alerts.',
    },
    {
      pl: 'Czy to porada inwestycyjna?',
      en: 'Is this financial advice?',
      plA: 'Nie. BTC Smart Investor Terminal to narzędzie dyscypliny, nie wyrocznia. Wskaźniki i algorytmy mają charakter edukacyjny i informacyjny — decyzje podejmujesz na podstawie własnej analizy i oceny ryzyka.',
      enA: 'No. BTC Smart Investor Terminal is a discipline tool, not an oracle. The indicators and algorithms are educational and informational — you decide based on your own analysis and risk assessment.',
    },
    {
      pl: 'Skąd pochodzą dane?',
      en: 'Where does the data come from?',
      plA: 'On-chain z BGeometrics (12 rotacyjnych kluczy), sentyment z alternative.me, ETF z publicznych źródeł, makro z FRED (Rezerwa Federalna). Cena: Binance → Kraken → CoinGecko z fallbackiem.',
      enA: 'On-chain from BGeometrics (12 rotating keys), sentiment from alternative.me, ETF from public sources, macro from FRED (Federal Reserve). Price: Binance → Kraken → CoinGecko with fallback.',
    },
    {
      pl: 'Jak często aktualizują się dane?',
      en: 'How often does data update?',
      plA: 'Trzy razy na dobę (06:00 / 12:00 / 18:00 UTC) z dwóch niezależnych systemów. Wbudowany dead-man\'s switch wysyła alert, jeśli najnowszy snapshot jest starszy niż 18 godzin.',
      enA: 'Three times a day (06:00 / 12:00 / 18:00 UTC) from two independent systems. A built-in dead-man\'s switch alerts if the latest snapshot is older than 18 hours.',
    },
  ];

  window.NADIR_CONTENT = { CAT, FAMILIES, INDICATORS, STEPS, BANDS, PLANS, FAQ };
})();

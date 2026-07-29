import React from 'react';
import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  Check,
  ChevronDown,
  FileText,
  KeyRound,
  Layers,
  Lock,
  Mail,
  Scale,
  Shield,
  Target,
  UserCheck,
  Waves,
  X,
  Zap,
} from 'lucide-react';

type Lang = 'pl' | 'en';
type Currency = 'eur' | 'pln' | 'usd';
type RouteKey = 'home' | 'glossary' | 'telegram' | 'disclaimer' | 'privacy' | 'terms';
type Tone = 'ice' | 'emerald' | 'amber' | 'red' | 'slate' | 'gold' | 'live' | 'stale' | 'neutral';

const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL ?? 'https://btc-dash.64bit.site';

function L(lang: Lang, pl: string, en: string) {
  return lang === 'en' ? en : pl;
}

const CAT = {
  valuation: { color: 'var(--category-core)', pl: 'Wycena (Valuation)', en: 'Valuation & Cost Basis' },
  holder: { color: 'var(--category-fundament)', pl: 'Podaż i Zachowanie (Holder & Supply)', en: 'Holder Behavior & Supply' },
  cycle: { color: 'var(--category-auxiliary)', pl: 'Cykl i Sentyment (Cycle & Sentiment)', en: 'Cycle Timing & Sentiment' },
  etf: { color: 'var(--category-confirmation)', pl: 'Popyt ETF (Era ETF)', en: 'Institutional Demand & ETF' },
  macro: { color: 'var(--category-macro)', pl: 'Tło Makro (Macro Context)', en: 'Macroeconomic Context' },
};

const FAMILIES = [
  {
    key: 'valuation',
    icon: Target,
    count: 4,
    weight: '30%',
    tone: 'var(--category-core)',
    pl: 'Wycena rynkowa (Valuation)',
    en: 'Valuation & Cost Basis',
    plD: 'MVRV Z-Score, NUPL, LTH Realized Price i STH MVRV — bada relację ceny rynkowej do zrealizowanej bazy kosztowej inwestorów.',
    enD: 'MVRV Z-Score, NUPL, LTH Realized Price and STH MVRV — evaluates market price vs realized cost basis of investors.',
  },
  {
    key: 'holder',
    icon: Shield,
    count: 10,
    weight: '30%',
    tone: 'var(--category-fundament)',
    pl: 'Zachowanie i podaż (Holder & Supply)',
    en: 'Holder Behavior & Supply Stress',
    plD: 'LTH SOPR, UTXOs in Loss %, VDD Multiple, Hash Ribbons, Puell Multiple, Cena do 200WMA, Mayer Multiple, Pi Cycle Bottom i Reserve Risk — mierzy stopień kapitulacji i stres podażowy.',
    enD: 'LTH SOPR, UTXOs in Loss %, VDD Multiple, Hash Ribbons, Puell Multiple, Price to 200WMA, Mayer Multiple, Pi Cycle Bottom & Reserve Risk — measures capitulation & supply stress.',
  },
  {
    key: 'cycle',
    icon: Activity,
    count: 6,
    weight: '20%',
    tone: 'var(--category-auxiliary)',
    pl: 'Cykl i psychologia (Cycle & Sentiment)',
    en: 'Cycle Timing & Crowd Sentiment',
    plD: 'Drawdown od ATH, Dni od ATH, Monthly RSI(14), Weekly RSI, Bull Run Index i Fear & Greed — timing cykliczny i sentyment tłumu.',
    enD: 'Drawdown from ATH, Days since ATH, Monthly RSI(14), Weekly RSI, Bull Run Index and Fear & Greed — cycle timing & crowd psychology.',
  },
  {
    key: 'etf',
    icon: Layers,
    count: 4,
    weight: '20%',
    tone: 'var(--category-confirmation)',
    pl: 'Popyt instytucjonalny (Era ETF)',
    en: 'Institutional Demand & ETF Era',
    plD: 'ETF Balance, ETF Balance Trend, ETF Flow Momentum i Exchange Reserve — nowa dynamika kapitału po 2024r.',
    enD: 'ETF Balance, ETF Balance Trend, ETF Flow Momentum and Exchange Reserve — post-2024 institutional capital dynamics.',
  },
  {
    key: 'macro',
    icon: Waves,
    count: 4,
    weight: 'Aux',
    tone: 'var(--category-macro)',
    pl: 'Otoczenie makroekonomiczne (Macro)',
    en: 'Macroeconomic Context & Liquidity',
    plD: 'Płynność netto USD, Indeks Dolara (DXY), Spread 10Y-2Y i VIX Volatility Index — tło płynnościowe dla aktywów ryzykownych.',
    enD: 'USD Net Liquidity, Dollar Index (DXY), 10Y-2Y Spread and VIX Volatility Index — global risk liquidity backdrop.',
  },
];

const INDICATORS = [
  // --- 1. Wycena (Valuation) ---
  { cat: 'valuation', pl: 'MVRV Z-Score', en: 'MVRV Z-Score', plD: 'Ocenia odchylenie wartości rynkowej od zrealizowanej. Niskie odczyty historycznie wyznaczały dołki cyklu.', enD: 'Evaluates market value deviation from realized value. Low readings historically marked cycle bottoms.', sample: [76, 65, 52, 38, 28, 24, 31, 42] },
  { cat: 'valuation', pl: 'NUPL (Net Unrealized Profit/Loss)', en: 'NUPL', plD: 'Pokazuje bilans niezrealizowanych zysków i strat. Przejście w strefę kapitulacji (poniżej 0) sygnalizuje ekstremalne schłodzenie.', enD: 'Shows unrealized profit/loss balance. Entering capitulation zone (below 0) signals extreme cooling.', sample: [72, 60, 44, 30, 21, 19, 27, 38] },
  { cat: 'valuation', pl: 'LTH Realized Price Ratio', en: 'LTH Realized Price Ratio', plD: 'Cena bazowa długoterminowych posiadaczy. Spadek ceny spot poniżej LTH Realized Price oznacza głęboką kapitulację rynku.', enD: 'Long-term holder cost basis. Spot price falling below LTH Realized Price marks deep market capitulation.', sample: [82, 76, 66, 55, 44, 39, 43, 50] },
  { cat: 'valuation', pl: 'STH MVRV', en: 'STH MVRV', plD: 'Mierzy pozycję krótkoterminowych inwestorów. Gdy świeży kapitał znajduje się pod presją strat, szansa na zwrot wzrasta.', enD: 'Measures short-term holder position. When recent capital holds steep losses, potential turning points emerge.', sample: [73, 61, 49, 38, 31, 28, 35, 44] },

  // --- 2. Podaż i Zachowanie (Holder & Supply) ---
  { cat: 'holder', pl: 'LTH SOPR', en: 'LTH SOPR', plD: 'Sprawdza, czy długoterminowi posiadacze sprzedają ze stratą. Odczyty < 1.0 to klasyczna flaga wyprzedania.', enD: 'Checks whether long-term holders realize losses. Readings < 1.0 are a classic oversold flag.', sample: [66, 54, 43, 34, 28, 26, 33, 45] },
  { cat: 'holder', pl: 'UTXOs in Loss %', en: 'UTXOs in Loss %', plD: 'Procent monet przetrzymywanych na minusie. Gdy ponad 50–60% UTXO jest w stracie, rynek znajduje się blisko dna.', enD: 'Percentage of coins held in loss. When over 50–60% of UTXOs sit in loss, the market approaches a floor.', sample: [20, 31, 45, 58, 67, 72, 63, 51] },
  { cat: 'holder', pl: 'Value Days Destroyed (VDD) Multiple', en: 'VDD Multiple', plD: 'Łączy wiek i wartość przemieszczanych monet. Niski mnożnik potwierdza brak wyprzedaży ze strony starych portfeli.', enD: 'Combines age and volume of moved coins. Low multiple confirms absence of old wallet sell-offs.', sample: [58, 52, 44, 36, 30, 33, 41, 49] },
  { cat: 'holder', pl: 'Hash Ribbons', en: 'Hash Ribbons', plD: 'Sygnalizuje kapitulację górników i ponowne wyjście hash rate z dołka. Warstwa potwierdzenia struktury sieci.', enD: 'Signals miner capitulation and hash rate recovery. A network structure confirmation layer.', sample: [48, 42, 36, 31, 29, 35, 43, 55] },
  { cat: 'holder', pl: 'Puell Multiple', en: 'Puell Multiple', plD: 'Mierzy przychody górników w relacji do średniej rocznej. Poziomy < 0.5 oznaczają skrajny stres ekonomiczny wydobycia.', enD: 'Measures miner revenue vs 1-year moving average. Levels < 0.5 mean severe mining economic stress.', sample: [68, 59, 45, 33, 25, 28, 36, 48] },
  { cat: 'holder', pl: 'Cena do 200WMA', en: 'Price to 200WMA', plD: 'Stosunek ceny spot do 200-tygodniowej średniej kroczącej. Historycznie dno cyklu wypadało na lub poniżej 200WMA.', enD: 'Spot price ratio to the 200-week moving average. Cycle floors historically formed near or below 200WMA.', sample: [90, 78, 62, 47, 36, 33, 40, 52] },
  { cat: 'holder', pl: 'Mayer Multiple', en: 'Mayer Multiple', plD: 'Stosunek ceny spot do 200-dniowej średniej kroczącej (200DMA). Odczyty w przedziale 0.5–0.65 wyznaczały dno bessy.', enD: 'Ratio of spot price to 200-day moving average (200DMA). Readings between 0.5–0.65 marked bear market bottoms.', sample: [85, 74, 62, 53, 48, 51, 58, 65] },
  { cat: 'holder', pl: 'Pi Cycle Bottom', en: 'Pi Cycle Bottom', plD: 'Odległość 150-dniowej EMA od 471-dniowej SMA pomnożonej przez 0.745. Wartości <= 0 wyznaczają sygnał dołka.', enD: 'Distance between 150-day EMA and 471-day SMA multiplied by 0.745. Values <= 0 trigger a bottom buy signal.', sample: [35, 28, 20, 12, 4, -2, 3, 10] },
  { cat: 'holder', pl: 'Reserve Risk', en: 'Reserve Risk', plD: 'Ocenia relację ryzyka do potencjału zysku na podstawie przekonania i cierpliwości długoterminowych posiadaczy.', enD: 'Evaluates risk-to-reward ratio based on the conviction and patience of long-term holders.', sample: [70, 58, 41, 30, 24, 23, 29, 40] },
  { cat: 'holder', pl: 'Funding Rate (8h)', en: 'Funding Rate (8h)', plD: 'Stopa finansowania pozycji wieczystych (perpetual futures). Ujemny funding potwierdza kapitulację i dominację pozycji krótkich.', enD: 'Perpetual futures funding rate. Negative funding confirms long-side capitulation and short-side dominance.', sample: [50, 45, 35, 20, 10, 15, 30, 45] },

  // --- 3. Cykl i Sentyment (Cycle & Sentiment) ---
  { cat: 'cycle', pl: 'Drawdown z ATH', en: 'Drawdown from ATH', plD: 'Procentowy spadek od szczytu wszech czasów. W erze ETF silnik V2 uwzględnia zarówno głębokie (-75%+), jak i płytkie dołki.', enD: 'Percentage drop from ATH. In the ETF era, V2 engine accounts for both deep (-75%+) and shallow bottoms.', sample: [18, 24, 36, 49, 57, 63, 59, 54] },
  { cat: 'cycle', pl: 'Dni od ATH', en: 'Days since ATH', plD: 'Mierzy czas trwania fazy spadkowej cyklu. Ramuje oczekiwanie w strefie akumulacji (zazwyczaj 300–400 dni od ATH).', enD: 'Measures duration of cycle downtrend. Frames timing expectations in the accumulation zone.', sample: [94, 86, 72, 58, 45, 39, 34, 31] },
  { cat: 'cycle', pl: 'Monthly RSI(14)', en: 'Monthly RSI', plD: 'Wskaźnik impetu na interwale miesięcznym. Wykrywa skrajne wyprzedanie w długim horyzoncie czasowym.', enD: 'Long-term momentum indicator on monthly interval. Detects multi-year oversold regimes.', sample: [64, 55, 43, 33, 27, 30, 38, 46] },
  { cat: 'cycle', pl: 'Weekly RSI(14)', en: 'Weekly RSI', plD: 'RSI z interwału tygodniowego. Szybszy od miesięcznego, używany jako potwierdzenie wyprzedania w oknie dołkowym.', enD: 'Weekly timeframe RSI. Faster than monthly RSI, used to confirm oversold conditions in cycle windows.', sample: [58, 48, 38, 28, 24, 29, 36, 45] },
  { cat: 'cycle', pl: 'Bull Run Index', en: 'Bull Run Index', plD: 'Syntetyczny indeks hossy używany odwrotnie do identyfikacji dołków cyklu.', enD: 'Synthetic bull index used in reverse to identify cycle bottoms.', sample: [80, 68, 50, 32, 18, 14, 22, 35] },
  { cat: 'cycle', pl: 'Fear & Greed Index', en: 'Fear & Greed', plD: 'Indeks strachu i chciwości. Skrajny strach (< 20) służy jako wspierający sygnał kontrariański.', enD: 'Fear & Greed index. Extreme fear (< 20) serves as a supportive contrarian input.', sample: [52, 39, 26, 18, 12, 16, 24, 36] },

  // --- 4. Era ETF i Popyt (Demand & ETF) ---
  { cat: 'etf', pl: 'ETF Balance Context', en: 'ETF Balance', plD: 'Całkowity bilans BTC przetrzymywany w amerykańskich spotowych ETF-ach (kontekst instytucjonalny od 2024 roku).', enD: 'Total BTC balance held across US spot BTC ETFs (institutional adoption context post-2024).', sample: [30, 35, 42, 48, 55, 60, 64, 70] },
  { cat: 'etf', pl: 'ETF Balance Trend (30d Δ)', en: 'ETF Balance Trend', plD: '30-dniowa zmiana (delta) salda BTC w ETF-ach spotowych USA. Mierzy trwały napływ kapitału instytucjonalnego.', enD: '30-day net change in US spot ETF BTC balance. Measures sustained institutional adoption.', sample: [32, 36, 41, 38, 44, 51, 57, 62] },
  { cat: 'etf', pl: 'ETF Flow Momentum (30d)', en: 'ETF Flow Momentum', plD: 'Skumulowane 30-dniowe przepływy netto w USD na podstawie zbiorczych danych rynkowych.', enD: 'Cumulative 30-day net USD flows built on aggregated market data.', sample: [28, 35, 46, 42, 39, 50, 61, 70] },
  { cat: 'etf', pl: 'Exchange Reserve Trend (30d)', en: 'Exchange Reserve Trend', plD: '30-dniowa zmiana netto rezerw Bitcoina na giełdach. Spadek rezerw sugeruje akumulację on-chain.', enD: '30-day net change in exchange BTC reserves. Declining reserves confirm spot accumulation.', sample: [60, 55, 48, 42, 36, 30, 28, 25] },

  // --- 5. Otoczenie Makro (Macro Context) ---
  { cat: 'macro', pl: 'Płynność netto USD', en: 'USD Net Liquidity', plD: 'Tło makro na podstawie bilansu Rezerwy Federalnej, TGA i RRP. Dostępność płynności napędza aktywa ryzykowne.', enD: 'Macro backdrop based on Fed balance sheet, TGA and RRP. Liquidity feeds risk assets.', sample: [38, 36, 40, 45, 43, 48, 54, 60] },
  { cat: 'macro', pl: 'Indeks Dolara (DXY)', en: 'Dollar Index (DXY)', plD: 'Siła dolara amerykańskiego. Szczyt DXY często pokrywał się z lokalnym lub cyklicznym dołkiem na Bitcoinie.', enD: 'US Dollar strength index. DXY peaks often coincide with BTC local or cycle bottoms.', sample: [44, 50, 61, 68, 64, 58, 49, 42] },
  { cat: 'macro', pl: 'Spread Rentowności 10Y-2Y', en: '10Y-2Y Yield Spread', plD: 'Spread rentowności obligacji skarbowych USA. Kontekst cyklu koniunkturalnego i ryzyka recesji.', enD: 'US Treasury yield curve spread. Provides business cycle and recession risk context.', sample: [35, 32, 28, 24, 30, 38, 46, 52] },
  { cat: 'macro', pl: 'Indeks Zmienności VIX', en: 'VIX Volatility Index', plD: 'Indeks zmienności rynków akcji. Wykrywa globalne epizody risk-off i płynnościowej kapitulacji.', enD: 'Equity market volatility index. Detects global risk-off & liquidity capitulation events.', sample: [22, 28, 41, 58, 53, 44, 35, 30] },
];

const STEPS = [
  {
    n: '01',
    plT: 'Konfluencja 4 Rodzin V2 Engine',
    enT: '4-Family Confluence V2 Engine',
    plD: '28 wskaźników podzielonych na Wycenę (30%), Podaż (30%), Cykl (20%) i Popyt ETF (20%) + makro. Kara dyspersji c_agree weryfikuje spójność sygnałów.',
    enD: '28 indicators across Valuation (30%), Supply (30%), Cycle (20%) & ETF Demand (20%) + macro. Dispersion penalty c_agree verifies signal agreement.',
  },
  {
    n: '02',
    plT: 'Bottom Score 0–100 & Generacyjne Dno',
    enT: 'Bottom Score 0–100 & Generational Floor',
    plD: 'Silnik scoringowy V2 Era-Aware (v2.3.0) sprowadza dane do jednej liczby i wykrywa flagę Generacyjnego Dna przy równoczesnym dołku ≥4 bloków.',
    enD: 'V2 Era-Aware scoring engine (v2.3.0) collapses data to one number and flags Generational Bottom when ≥4 core blocks reach extremes.',
  },
  {
    n: '03',
    plT: 'Werdykt, Okno DCA i Alerty Telegram',
    enT: 'Verdict, DCA Window & Telegram Alerts',
    plD: '5-pasmowy werdykt z histerezą chroniącą przed drganiem progów. Odświeżanie 3× dziennie z nadzorem świeżości data-watchdog oraz alertami Telegram.',
    enD: '5-band verdict with threshold hysteresis. 3x daily refreshes with freshness watchdog monitoring and instant Telegram alerts.',
  },
];

const BANDS = [
  { tone: 'slate' as const, range: '0–29', pl: 'Za wcześnie / Obserwuj', en: 'Too early / Observe', plD: 'Okno akumulacji zamknięte. Cierpliwie czekaj na wychłodzenie.', enD: 'Accumulation window closed. Wait patiently for cycle cooling.' },
  { tone: 'amber' as const, range: '30–54', pl: 'Obserwuj / DCA', en: 'Observe / Prepare DCA', plD: 'Akumulacja się zbliża. Przygotuj plan i środki na zakupy.', enD: 'Accumulation nears. Prepare buying tranche plan and capital.' },
  { tone: 'emerald' as const, range: '55–77', pl: 'Strefa akumulacji', en: 'Accumulation zone', plD: 'Okno otwarte. Regularne zakupy DCA z uśrednianiem ceny.', enD: 'Window open. Regular DCA buying with dollar-cost averaging.' },
  { tone: 'ice' as const, range: '78–100', pl: 'Agresywna akumulacja', en: 'Aggressive accumulation', plD: 'Najchłodniejszy odczyt cyklu. Przyspiesz tempo transz DCA.', enD: 'Coldest cycle reading. Accelerate DCA tranche speed.' },
];

const PLANS = [
  {
    key: 'smart',
    name: 'Smart',
    tag: 'Na zaproszenie',
    tagEn: 'Invite-only',
    accent: 'ice',
    plPer: 'wybrana waluta · subskrypcja',
    enPer: 'selected currency · subscription',
    plDesc: 'Inteligentne śledzenie dna BTC. Widzisz status strategii V2, Bottom Score na żywo po zalogowaniu, wskaźniki sentymentu i przepływy ETF — z ochroną poufnej metodologii.',
    enDesc: 'Smart tracking of BTC bottom. Live V2 strategy status after sign-in, Bottom Score, sentiment & ETF flows — with protected methodology.',
    features: [
      { pl: 'Bottom Score na żywo w zamkniętym terminalu i 5-pasmowy werdykt', en: 'Live Bottom Score inside closed terminal & 5-band verdict', on: true },
      { pl: 'Status okna akumulacji i dystans od ATH', en: 'Accumulation window status & ATH distance', on: true },
      { pl: 'Meta strategii V2 Engine: 28 wskaźników w 4 rodzinach', en: 'V2 Engine strategy meta: 28 indicators in 4 families', on: true },
      { pl: 'Zagregowane wskaźniki Fear & Greed i ETF Flows', en: 'Aggregated Fear & Greed & ETF flows', on: true },
      { pl: 'Bezpieczny widok z server-side redaction', en: 'Safe view with server-side redaction', on: true },
      { pl: 'Pełna siatka 24 wskaźników w siatce ze sparklines', en: 'Full 24-indicator grid with sparklines', on: false },
      { pl: 'Wagi, wkłady, progi normalizacji, mnożnik c_agree', en: 'Weights, contributions, thresholds, c_agree multiplier', on: false },
      { pl: 'Planer transz DCA, flaga Generacyjne Dno i alerty', en: 'DCA tranche planner, Generational Bottom flag & alerts', on: false },
    ],
  },
  {
    key: 'investor',
    name: 'Investor',
    tag: 'Pełny terminal',
    tagEn: 'Full terminal',
    accent: 'gold',
    plPer: 'wybrana waluta · pakiet 6-miesięczny',
    enPer: 'selected currency · 6-month package',
    plDesc: 'Pełny terminal analityczny: konfluencja V2 on-chain, wagi, wkłady, flaga Generacyjne Dno, planer DCA i alerty Telegram 3x dziennie.',
    enDesc: 'Full analytical terminal: V2 on-chain confluence, weights, contributions, Generational Bottom flag, DCA planner & 3x daily Telegram alerts.',
    features: [
      { pl: 'Wszystko z planu Smart', en: 'Everything in Smart', on: true },
      { pl: 'Pełna siatka 24 wskaźników z historycznymi wykresami sparklines', en: 'Full 24-indicator grid with historical sparkline charts', on: true },
      { pl: 'Wagi rodzin, wkłady, progi normalizacji i mnożnik c_agree', en: 'Family weights, contributions, thresholds & c_agree multiplier', on: true },
      { pl: 'Flaga Generacyjne Dno (≥4 ortogonalne bloki na dnie)', en: 'Generational Bottom flag (≥4 orthogonal blocks at bottom)', on: true },
      { pl: 'Planer transz DCA i wyliczanie ciągłego pobytu w strefie', en: 'DCA tranche planner & continuous zone duration math', on: true },
      { pl: 'Pełna historia snapshotów, 400-dniowy replay i audyt V1', en: 'Full snapshot history, 400-day replay & V1 audit trail', on: true },
      { pl: 'Alerty Telegram wyzwalane automatycznie 3× na dobę', en: 'Automated Telegram alerts triggered 3x daily', on: true },
      { pl: 'Pełny dostęp do wsparcia i kalibracji na kolejne cykle', en: 'Full access to future cycle support & calibration', on: true },
    ],
  },
];

const FAQ = [
  {
    pl: 'Czym jest Silnik Scoringowy V2 Era-Aware (v2.3.0)?',
    en: 'What is the V2 Era-Aware Scoring Engine (v2.3.0)?',
    plA: 'To najnowsza wersja algorytmu scoringowego, stworzona po debiucie amerykańskich spotowych ETF-ów. Podzieliła wskaźniki na 4 główne rodziny konfluencji: Wycenę (30%), Podaż i Posiadaczy (30%), Cykl i Sentyment (20%) oraz Popyt ETF (20%). Dodatkowo wprowadzono mnożnik spójności c_agree karzący sprzeczność sygnałów oraz flagę Generacyjne Dno.',
    enA: 'It is the latest scoring algorithm version built following the launch of US spot BTC ETFs. It structures indicators into 4 main confluence families: Valuation (30%), Supply & Holders (30%), Cycle & Sentiment (20%), and ETF Demand (20%). It also introduces a dispersion penalty c_agree and Generational Bottom detection.',
  },
  {
    pl: 'Dlaczego na stronie publicznej prezentowany jest tylko widok historyczny?',
    en: 'Why does the public landing page display only historical calibration data?',
    plA: 'Publiczny landing page przedstawia wyłącznie sprawdzony przykład historyczny z kalibracji dna poprzednich cykli (np. dołek z listopada 2022 roku), aby zademonstrować działanie skali Bottom Score i 5-pasmowego werdyktu. Bieżący odczyt rynkowy na żywo oraz aktualne sygnały są chronione i dostępne wyłącznie po zalogowaniu do zamkniętego terminala.',
    enA: 'The public landing page displays strictly historical calibration examples from past cycle floors (e.g. November 2022 bottom) to demonstrate the Bottom Score scale and 5-band verdict. Live real-time market readings and current signals remain protected and accessible exclusively after logging in to the closed terminal.',
  },
  {
    pl: 'Dlaczego dostęp do terminala jest tylko na zaproszenie (Invite-Only)?',
    en: 'Why is terminal access invite-only?',
    plA: 'BTC Smart Investor Terminal to zamknięte środowisko dla świadomych inwestorów długoterminowych. Aby chronić metodologię strategii oraz zapewnić najwyższą wydajność infrastruktury (bramki API z limitem zapytań i rotacją), konta zakładane są wyłącznie poprzez zaproszenia administratorów lub aktywnych członków.',
    enA: 'BTC Smart Investor Terminal is a closed environment for deliberate long-term investors. To protect protected strategy methodology and maintain system performance (rate-limited API gateways), accounts are activated strictly via admin or member invites.',
  },
  {
    pl: 'Jak często aktualizowane są dane rynkowe wewnątrz terminala?',
    en: 'How often are market data updated inside the terminal?',
    plA: 'Wewnątrz zautoryzowanego terminala system aktualizuje dane 3 razy na dobę: slot AM o 06:00 UTC, slot PM o 12:00 UTC oraz o 18:00 UTC. Ponadto wbudowany watchdog świeżości (Freshness Watchdog) wysyła alert na Telegram, jeśli dane byłyby starsze niż 18 godzin.',
    enA: 'Inside the authorized terminal, the system updates data 3 times daily: AM slot at 06:00 UTC, PM slot at 12:00 UTC, and 18:00 UTC. A built-in Freshness Watchdog sends Telegram alerts if readings exceed 18 hours.',
  },
  {
    pl: 'Czym różni się plan Smart od Investor?',
    en: 'How does Smart differ from Investor?',
    plA: 'Plan Smart daje dostęp do bezpiecznego statusu strategii na żywo w terminalu (Bottom Score, werdykt, status okna akumulacji, Fear & Greed i ETF flows) z server-side redaction. Plan Investor odblokowuje pełny terminal: 24 wskaźniki w siatce ze sparklines, wagi, wkłady, flagę Generacyjne Dno, planer DCA oraz alerty Telegram.',
    enA: 'Smart grants access to safe live strategy status inside the terminal (Bottom Score, verdict, window status, Fear & Greed & ETF flows) with server-side redaction. Investor unlocks the whole terminal: 24 indicators with sparklines, weights, contributions, Generational Bottom flag, DCA planner & Telegram alerts.',
  },
  {
    pl: 'Czy to porada inwestycyjna?',
    en: 'Is this financial advice?',
    plA: 'Nie. BTC Smart Investor Terminal to narzędzie analityczne wspierające dyscyplinę inwestycyjną, nie wyrocznia ani rekomendacja. Wszystkie algorytmy mają charakter edukacyjny i informacyjny — decyzje podejmujesz samodzielnie na podstawie własnej oceny ryzyka.',
    enA: 'No. BTC Smart Investor Terminal is an analytical discipline tool, not an oracle or recommendation. All algorithms are educational and informational — investment decisions remain solely your responsibility.',
  },
];

const icon = {
  arrow: <ArrowRight size={17} />,
  lock: <Lock size={13} />,
  check: <Check size={16} />,
  x: <X size={16} />,
  mail: <Mail size={16} />,
  chevron: <ChevronDown size={18} />,
  shield: <Shield size={15} />,
  bolt: <Zap size={16} />,
};

const ROUTES: Record<RouteKey, { path: string; pl: string; en: string; titlePl: string; titleEn: string; descPl: string; descEn: string }> = {
  home: {
    path: '/',
    pl: 'Start',
    en: 'Home',
    titlePl: 'BTC Smart Investor Terminal | Analiza dołka cyklu Bitcoina (v28.4 V2 Engine)',
    titleEn: 'BTC Smart Investor Terminal | Bitcoin cycle-bottom analytics (v28.4 V2 Engine)',
    descPl: 'Invite-only terminal dla inwestora BTC: Konfluencja 28 wskaźników w 4 rodzinach V2 Engine, kalibracja cykli i dyscyplina akumulacji.',
    descEn: 'Invite-only BTC investor terminal: 28-indicator V2 Engine confluence across 4 families, cycle calibration and accumulation discipline.',
  },
  glossary: {
    path: '/slownik-wskaznikow',
    pl: 'Słownik wskaźników',
    en: 'Indicator glossary',
    titlePl: 'Słownik 28 wskaźników V2 Engine | BTC Smart Investor Terminal',
    titleEn: 'V2 Engine 28 Indicator Glossary | BTC Smart Investor Terminal',
    descPl: 'Publiczny słownik 28 wskaźników on-chain, cyklu, sentymentu, ery ETF i makro używanych w silniku V2.',
    descEn: 'Public glossary of 28 on-chain, cycle, sentiment, ETF era and macro indicators used in the V2 engine.',
  },
  telegram: {
    path: '/telegram',
    pl: 'Telegram',
    en: 'Telegram',
    titlePl: 'Instrukcja alertów Telegram 3x/dobę | BTC Smart Investor Terminal',
    titleEn: '3x Daily Telegram Alert Setup | BTC Smart Investor Terminal',
    descPl: 'Instrukcja konfiguracji alertów Telegram w planie Investor: automatyczny digest 07:00 UTC, zmiana reżimu i watchdog świeżości.',
    descEn: 'Telegram alert setup for Investor tier: automated 07:00 UTC digest, regime changes and freshness watchdog alerts.',
  },
  disclaimer: {
    path: '/zastrzezenia',
    pl: 'Zastrzeżenia',
    en: 'Disclaimer',
    titlePl: 'Zastrzeżenia inwestycyjne | BTC Smart Investor Terminal',
    titleEn: 'Investment disclaimer | BTC Smart Investor Terminal',
    descPl: 'Zastrzeżenia dotyczące edukacyjnego charakteru danych, braku rekomendacji inwestycyjnej i odpowiedzialności użytkownika za decyzje.',
    descEn: 'Disclaimers covering educational information, no investment recommendation and user responsibility for decisions.',
  },
  privacy: {
    path: '/prywatnosc',
    pl: 'Prywatność i RODO',
    en: 'Privacy & GDPR',
    titlePl: 'Prywatność i RODO | BTC Smart Investor Terminal',
    titleEn: 'Privacy and GDPR | BTC Smart Investor Terminal',
    descPl: 'Informacje o administratorze danych (ITCS sp. z o.o.), zakresie przetwarzania, Stripe i prawach użytkownika zgodnie z RODO.',
    descEn: 'Information about the data controller (ITCS sp. z o.o.), processing scope, Stripe and user rights under GDPR.',
  },
  terms: {
    path: '/regulamin',
    pl: 'Regulamin',
    en: 'Terms',
    titlePl: 'Regulamin korzystania | BTC Smart Investor Terminal',
    titleEn: 'Terms of use | BTC Smart Investor Terminal',
    descPl: 'Zasady korzystania z invite-only terminala BTC Smart Investor, planów Smart i Investor oraz ograniczeń odpowiedzialności.',
    descEn: 'Terms for using the invite-only BTC Smart Investor terminal, Smart and Investor plans and liability limitations.',
  },
};

const DATA_CONTROLLER = {
  name: 'ITCS sp. z o.o.',
  address: 'ul. Karola Libelta 1A/2, 61-706 Poznań',
  email: 'itcs@itcs.eu',
};

const TELEGRAM_STEPS = [
  {
    icon: Bot,
    plT: 'Utwórz albo wybierz bota',
    enT: 'Create or choose a bot',
    plD: 'W Telegramie otwórz BotFather, utwórz bota komendą /newbot i zapisz token. Token traktuj jak klucz dostępowy.',
    enD: 'Open BotFather in Telegram, create a bot with /newbot and store the token. Treat the token like an access key.',
  },
  {
    icon: KeyRound,
    plT: 'Dodaj chat ID',
    enT: 'Add the chat ID',
    plD: 'Wyślij wiadomość do bota lub dodaj go do prywatnego kanału. W panelu Investor wklej chat ID w ustawieniach alertów.',
    enD: 'Send a message to the bot or add it to a private channel. Paste the chat ID into Investor alert settings.',
  },
  {
    icon: Bell,
    plT: 'Wybierz tryb alertów i digestu',
    enT: 'Choose alert & digest mode',
    plD: 'Ustaw, które zdarzenia (zmiana strefy, Generacyjne Dno, poranny digest 07:00 UTC) mają generować powiadomienia na żywo.',
    enD: 'Select events (zone changes, Generational Bottom, morning 07:00 UTC digest) that trigger live notifications.',
  },
  {
    icon: Check,
    plT: 'Wyślij wiadomość testową',
    enT: 'Send a test message',
    plD: 'Po zapisaniu ustawień zrealizuj wysyłkę testową z panelu w celu weryfikacji dostarczalności.',
    enD: 'After saving settings, execute a test send from the panel to verify deliverability.',
  },
];

const LEGAL_SECTIONS = {
  disclaimer: [
    {
      plT: 'Charakter edukacyjny i informacyjny',
      enT: 'Educational and informational nature',
      plD: 'BTC Smart Investor Terminal, Bottom Score, silnik scoringowy V2, opisy wskaźników, alerty, wykresy i komunikaty w aplikacji mają charakter wyłącznie edukacyjny, informacyjny i analityczny. Nie stanowią rekomendacji inwestycyjnej ani doradztwa finansowego.',
      enD: 'BTC Smart Investor Terminal, Bottom Score, V2 scoring engine, indicator descriptions, alerts, charts and communications are strictly educational, informational and analytical. They do not constitute investment recommendations or financial advice.',
    },
    {
      plT: 'Brak relacji doradczej',
      enT: 'No advisory relationship',
      plD: 'Korzystanie z terminala nie tworzy relacji doradcy inwestycyjnego, maklera ani zarządzającego portfelem. System nie zna Twojej sytuacji finansowej, tolerancji ryzyka ani horyzontu inwestycyjnego.',
      enD: 'Using the terminal does not create an investment adviser or broker relationship. The system does not know your personal financial situation, risk tolerance or investment horizon.',
    },
    {
      plT: 'Ryzyko rynku kryptoaktywów',
      enT: 'Crypto-asset market risk',
      plD: 'Bitcoin jest aktywem zmiennym i cechuje się wysokim ryzykiem straty zainwestowanego kapitału. Dane historyczne (dołki z 2018 i 2022 roku) oraz wyliczenia silnika V2 nie stanowią gwarancji przyszłych wyników.',
      enD: 'Bitcoin is a volatile asset carrying a high risk of capital loss. Historical data (2018 and 2022 cycle bottoms) and V2 engine calculations do not guarantee future results.',
    },
    {
      plT: 'Decyzja i odpowiedzialność użytkownika',
      enT: 'User decision and responsibility',
      plD: 'Każda decyzja inwestycyjna i transakcyjna należy wyłącznie do użytkownika. Przed podjęciem decyzji wykonaj własną analizę (DYOR) i w razie potrzeby skonsultuj się z licencjonowanym doradcą.',
      enD: 'Every investment decision belongs solely to the user. Always perform your own research (DYOR) and consult a licensed adviser if needed.',
    },
    {
      plT: 'Agregacja danych z wielu źródeł',
      enT: 'Multi-source data aggregation',
      plD: 'Dane pochodzą z wielu niezależnych i zweryfikowanych źródeł rynkowych, giełdowych, on-chain, sentymentu oraz makroekonomicznych równocześnie, co zapewnia najwyższą wiarygodność, spójność i odporność pomiaru na opóźnienia.',
      enD: 'Data are aggregated from multiple independent and verified market, exchange, on-chain, sentiment, and macro sources simultaneously to ensure reliability and fault tolerance.',
    },
    {
      plT: 'Brak gwarancji trafności dna',
      enT: 'No bottom-timing guarantee',
      plD: 'Nie gwarantujemy, że Bottom Score, alert lub werdykt bezbłędnie wskaże dokładny dzień lub cenę dna cyklu. Narzędzie służy do identyfikacji reżimu strefy akumulacji i wspomagania dyscypliny DCA.',
      enD: 'We do not guarantee that Bottom Score, alerts or verdicts will pinpoint the exact bottom day or price. The tool identifies accumulation zone regimes to support DCA discipline.',
    },
  ],
  privacy: [
    {
      plT: 'Administrator danych',
      enT: 'Data controller',
      plD: `Administratorem danych osobowych jest ${DATA_CONTROLLER.name}, ${DATA_CONTROLLER.address}. Kontakt w sprawach prywatności i RODO: ${DATA_CONTROLLER.email}.`,
      enD: `The personal data controller is ${DATA_CONTROLLER.name}, ${DATA_CONTROLLER.address}. Privacy contact: ${DATA_CONTROLLER.email}.`,
    },
    {
      plT: 'Zakres danych',
      enT: 'Data scope',
      plD: 'Przetwarzamy minimalny zakres danych potrzebny do obsługi dostępu invite-only: adres e-mail, nazwa konta, status planu i logi autoryzacji. Płatności realizowane są przez zewnętrzny procesor Stripe.',
      enD: 'We process the minimum data required for invite-only access: email address, account name, plan status and auth logs. Payments are processed by Stripe.',
    },
    {
      plT: 'Płatności Stripe',
      enT: 'Stripe payments',
      plD: 'Dane kart płatniczych przetwarzane są bezpośrednio przez Stripe w oparciu o certyfikat PCI-DSS. Landing page nie przechowuje numerów kart ani kodów CVV.',
      enD: 'Card data are processed directly by Stripe under PCI-DSS compliance. The landing page does not store card numbers or CVV codes.',
    },
    {
      plT: 'Podstawy przetwarzania',
      enT: 'Legal bases for processing',
      plD: 'Dane przetwarzane są w celu wykonania umowy lub obsługi wniosku o zaproszenie (art. 6 ust. 1 lit. b RODO) oraz realizacji prawnie uzasadnionego interesu ochrony serwisu (art. 6 ust. 1 lit. f RODO).',
      enD: 'Data are processed to perform contracts or invite requests (Art. 6(1)(b) GDPR) and legitimate security interests (Art. 6(1)(f) GDPR).',
    },
    {
      plT: 'Prawa użytkownika',
      enT: 'User rights',
      plD: 'Przysługuje Ci prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych. Wnioski można zgłaszać na adres e-mail administratora.',
      enD: 'You have the right to access, rectify, erase, restrict processing and port data. Direct requests to the controller email.',
    },
    {
      plT: 'Retencja danych',
      enT: 'Data retention',
      plD: 'Dane konta przechowywane są przez okres aktywności subskrypcji oraz do czasu wygaśnięcia obowiązków podatkowo-księgowych.',
      enD: 'Account data are retained for the duration of subscription activity and applicable statutory tax periods.',
    },
  ],
  terms: [
    {
      plT: 'Dostęp invite-only i aktywacja konta',
      enT: 'Invite-only access & account activation',
      plD: 'BTC Smart Investor Terminal jest usługą zamkniętą. Rejestracja wymaga zaproszenia wysłanego przez administratora lub aktywacji po opłaceniu wybranego pakietu.',
      enD: 'BTC Smart Investor Terminal is a closed service. Registration requires an admin invite or plan checkout activation.',
    },
    {
      plT: 'Zasady planów Smart i Investor',
      enT: 'Smart & Investor plan terms',
      plD: 'Plan Smart oferuje widok statusu strategii V2 na żywo po zalogowaniu z server-side redaction. Plan Investor daje pełny dostęp do siatki 24 wskaźników ze sparklines, wag, flagi Generacyjne Dno i alertów Telegram.',
      enD: 'Smart grants live V2 strategy status inside the terminal with server-side redaction. Investor provides full 24-indicator grid access with sparklines, weights, Generational Bottom flag & Telegram alerts.',
    },
    {
      plT: 'Dozwolony użytek i zakaz redystrybucji',
      enT: 'Permitted use & anti-redistribution',
      plD: 'Zabronione jest kopiowanie, udostępnianie danych osobom trzecim, odsprzedaż sygnałów oraz próby inżynierii wstecznej silnika V2 i chronionych wag strategii.',
      enD: 'Copying, sharing data with third parties, reselling signals or reverse-engineering V2 engine weights is strictly prohibited.',
    },
    {
      plT: 'Treści i własność intelektualna',
      enT: 'Content & intellectual property',
      plD: 'Prawa do algorytmu scoringowego V2, Nadir Design System, znaków towarowych i treści należą do ITCS sp. z o.o.',
      enD: 'Rights to V2 scoring algorithm, Nadir Design System, trademarks and content belong to ITCS sp. z o.o.',
    },
    {
      plT: 'Zmiany i aktualizacje algorytmu',
      enT: 'Algorithm updates',
      plD: 'Zastrzegamy sobie prawo do kalibracji progów, wag i adapterów danych w celu utrzymania najwyższej jakości predykcyjnej w nowo powstających erach rynkowych (np. Era ETF).',
      enD: 'We reserve the right to calibrate thresholds, weights and data adapters to maintain analytical quality across market eras.',
    },
    {
      plT: 'Ograniczenie odpowiedzialności',
      enT: 'Limitation of liability',
      plD: 'W najszerszym dopuszczalnym zakresie nie odpowiadamy za decyzje inwestycyjne użytkownika, straty rynkowe ani opóźnienia w transmisji danych zewnętrznych.',
      enD: 'To the fullest extent permitted, we are not liable for user investment decisions, market losses or third-party data transmission delays.',
    },
  ],
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  href,
  type,
  onClick,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      type={href ? undefined : type ?? 'button'}
      onClick={onClick as never}
      className={`nadir-button nadir-button-${variant} nadir-button-${size} ${fullWidth ? 'is-full' : ''}`}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}

function Badge({ children, tone = 'neutral', dot = true }: { children: React.ReactNode; tone?: Tone; dot?: boolean }) {
  return (
    <span className={`nadir-badge nadir-badge-${tone}`}>
      {dot && <span />}
      {children}
    </span>
  );
}

function StatusChip({ children, tone = 'ice', size = 'md' }: { children: React.ReactNode; tone?: Tone; size?: 'sm' | 'md' }) {
  return <span className={`nadir-status nadir-status-${tone} nadir-status-${size}`}>{children}</span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="nadir-eyebrow">{children}</span>;
}

function BrandLockup() {
  return (
    <a className="ds-brand" href="/" aria-label="BTC Smart Investor Terminal">
      <img src="/assets/logo.svg" alt="" />
      <span>
        <strong>BTC Smart Investor</strong>
        <em>Terminal · V2 Engine</em>
      </span>
    </a>
  );
}

function ScoreRing({ score = 86, size = 168, stroke = 9, label = 'Bottom Score' }: { score?: number; size?: number; stroke?: number; label?: string | null }) {
  const verdict = score >= 78 ? 'aggressive' : score >= 55 ? 'accumulate' : score >= 30 ? 'observe' : 'tooEarly';
  const radius = (size - stroke) / 2 - 4;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, score)) / 100;

  return (
    <div className="ds-score-ring" style={{ width: size }} data-verdict={verdict}>
      <div style={{ width: size, height: size }}>
        <svg width={size} height={size} aria-hidden="true">
          <circle cx={size / 2} cy={size / 2} r={radius} className="ring-track" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="ring-fill"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
        </svg>
        <div className="ring-center">
          <strong>{Math.round(score)}</strong>
          <span>/ 100</span>
        </div>
      </div>
      {label && <em>{label}</em>}
    </div>
  );
}

function VerdictScale({ score = 72, showLabels = true }: { score?: number; showLabels?: boolean }) {
  return (
    <div className="ds-verdict-scale">
      <div className="scale-track">
        <span />
        <span />
        <span />
        <span />
        <i style={{ left: `${Math.max(0, Math.min(100, score))}%` }} />
      </div>
      {showLabels && (
        <div className="scale-labels">
          <span>0</span>
          <span>30</span>
          <span>55</span>
          <span>78</span>
          <span>100</span>
        </div>
      )}
    </div>
  );
}

function KpiStat({
  label,
  value,
  accent,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  accent?: string;
  sub?: string;
}) {
  return (
    <div className="ds-kpi">
      <span>{label}</span>
      <strong style={{ color: accent }}>{value}</strong>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function Input({
  label,
  type = 'text',
  placeholder,
  iconLeft,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  iconLeft?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}) {
  return (
    <label className="ds-input">
      <span>{label}</span>
      <i>{iconLeft}</i>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </label>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'left',
  max = 620,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
  max?: number;
}) {
  return (
    <div className={`ds-section-head ${align === 'center' ? 'is-center' : ''}`} style={{ maxWidth: align === 'center' ? max : undefined }}>
      {eyebrow && (
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function Nav({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: '/#how', pl: 'Jak działa', en: 'How it works' },
    { href: '/#signals', pl: 'Sygnały', en: 'Signals' },
    { href: '/#method', pl: 'Metodologia V2', en: 'V2 Methodology' },
    { href: '/#pricing', pl: 'Plany', en: 'Plans' },
    { href: ROUTES.glossary.path, pl: 'Słownik (28)', en: 'Glossary (28)' },
  ];

  return (
    <header className={`ds-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nadir-container ds-nav-inner">
        <BrandLockup />
        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {L(lang, link.pl, link.en)}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button type="button" className="lang-button" onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}>
            <span className={lang === 'pl' ? 'active' : ''}>PL</span>
            <em>/</em>
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>
          <a className="nav-signin" href={`${DASHBOARD_URL}/login`}>
            {L(lang, 'Zaloguj', 'Sign in')}
          </a>
          <Button variant="primary" size="sm" href="/#invite" iconRight={<ArrowRight size={15} />}>
            {L(lang, 'Zaproszenie', 'Get invite')}
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const score = 86;
  const verdictLabel = L(lang, 'Agresywna Akumulacja (Dno 2022)', 'Aggressive Accumulation (2022 Bottom)');
  const priceDisplay = '$15,760';
  const drawdownDisplay = '-77%';

  return (
    <section id="top" className="ds-hero">
      <div className="hero-wash" aria-hidden="true" />
      <div className="nadir-container hero-grid">
        <div className="hero-copy">
          <Eyebrow>
            {icon.lock} {L(lang, 'Dostęp na zaproszenie · Silnik V2.3 Era-Aware', 'Invite-only · V2.3 Era-Aware Engine')}
          </Eyebrow>
          <h1>
            {L(lang, 'Znajdź', 'Find the')} <span>{L(lang, 'dołek cyklu', 'cycle floor')}</span>.<br />
            {L(lang, 'Z konfluencją V2 Engine.', 'With V2 Engine confluence.')}
          </h1>
          <p>
            {L(
              lang,
              'Zamknięty terminal analityczny łączący 28 wskaźników on-chain, podaży, sentymentu, przepływów spot ETF i makro w jeden precyzyjny Bottom Score.',
              'A closed analytics terminal joining 28 indicators across on-chain, supply, sentiment, spot ETF flows and macro into one precise Bottom Score.',
            )}
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" href="/#invite" iconRight={icon.arrow}>
              {L(lang, 'Poproś o zaproszenie', 'Request invite')}
            </Button>
            <Button variant="secondary" size="lg" href="/#method">
              {L(lang, 'Zobacz silnik V2', 'Explore V2 engine')}
            </Button>
          </div>
          <div className="hero-stats">
            {[
              { v: '28', pl: 'wskaźników w 5 kategoriach', en: 'indicators in 5 categories' },
              { v: '2018 · 2022', pl: 'kalibracja cykli + ETF era', en: 'calibrated cycles + ETF era' },
              { v: '3× / dobę', pl: 'odświeżanie danych w terminalu', en: 'terminal data refreshes' },
            ].map((stat, index) => (
              <div key={stat.v} className={index < 2 ? 'with-border' : ''}>
                <strong>{stat.v}</strong>
                <span>{L(lang, stat.pl, stat.en)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb-card">
            <img src="/assets/orb.png" alt="" />
            <div aria-hidden="true" />
            <div className="orb-live">
              <Badge tone="gold">
                {L(lang, 'Przykład historyczny · Kalibracja Dna 2022', 'Historical example · 2022 bottom calibration')}
              </Badge>
            </div>
          </div>
          <div className="orb-score-panel">
            <ScoreRing score={score} size={104} stroke={8} label={null} />
            <div>
              <span>{L(lang, 'Werdykt strategii V2', 'V2 Strategy verdict')}</span>
              <strong>{verdictLabel}</strong>
              <p>
                BTC {priceDisplay} · <em>{drawdownDisplay}</em> {L(lang, 'od ATH · dane poglądowe', 'from ATH · illustrative data')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ lang }: { lang: Lang }) {
  return (
    <section id="how" className="ds-section">
      <div className="nadir-container">
        <SectionHead
          eyebrow={L(lang, 'Jak działa Silnik V2', 'How V2 Engine Works')}
          title={L(lang, 'Od szumu rynkowego do rygoru jednej decyzji.', 'From market noise to single-decision rigor.')}
          sub={L(
            lang,
            'Zamiast analizowania dziesiątek osobnych wykresów, BTC Smart Investor Terminal sprowadza cykl Bitcoina do konfluencji 4 głównych bloków danych oraz kontekstu makro.',
            'Instead of analyzing dozens of disjointed charts, BTC Smart Investor Terminal collapses the Bitcoin cycle into 4 core data blocks plus macro context.',
          )}
        />
        <div className="steps-grid">
          {STEPS.map((step) => (
            <div key={step.n} className="step-card">
              <strong>{step.n}</strong>
              <i />
              <h3>{L(lang, step.plT, step.enT)}</h3>
              <p>{L(lang, step.plD, step.enD)}</p>
            </div>
          ))}
        </div>
        <div className="score-explainer">
          <div className="score-explainer-panel">
            <div className="score-explainer-head">
              <div>
                <Eyebrow>{L(lang, 'Bottom Score V2 · 0–100', 'Bottom Score V2 · 0–100')}</Eyebrow>
                <h3>{L(lang, 'Kontrariański wskaźnik głębokości dna', 'Contrarian cycle floor gauge')}</h3>
              </div>
              <p>
                {L(
                  lang,
                  'Im wyższy odczyt, tym chłodniejszy rynek i większa szansa na historyczną okazję akumulacyjną w oknie DCA.',
                  'Higher readings indicate a cooler market and a stronger accumulation opportunity inside the DCA window.',
                )}
              </p>
            </div>
            <VerdictScale score={72} />
            <div className="bands-grid">
              {BANDS.map((band) => (
                <div key={band.range} className="band-card">
                  <StatusChip tone={band.tone} size="sm">{band.range}</StatusChip>
                  <strong>{L(lang, band.pl, band.en)}</strong>
                  <p>{L(lang, band.plD, band.enD)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Families({ lang }: { lang: Lang }) {
  return (
    <section id="signals" className="ds-section">
      <div className="nadir-container">
        <SectionHead
          align="center"
          eyebrow={L(lang, '4 Rodziny Konfluencji V2', '4 V2 Confluence Families')}
          title={L(lang, 'Cztery filary sygnału. Jeden wyważony werdykt.', 'Four signal pillars. One weighted verdict.')}
          sub={L(
            lang,
            'Silnik V2 Era-Aware waży wycenę on-chain (30%), stres podażowy posiadaczy (30%), timing cyklu i sentyment (20%) oraz popyt instytucjonalny Ery ETF (20%) z uwzględnieniem otoczenia makro.',
            'The V2 Era-Aware engine weights on-chain valuation (30%), holder supply stress (30%), cycle timing & sentiment (20%), and ETF Era institutional demand (20%) alongside macro context.',
          )}
        />
        <div className="families-grid">
          {FAMILIES.map((family) => {
            const Icon = family.icon;
            return (
              <div key={family.key} className="family-card">
                <div>
                  <span style={{ color: family.tone, borderColor: `${family.tone}40`, boxShadow: `0 0 16px ${family.tone}22` }}>
                    <Icon size={19} />
                  </span>
                  <em>{family.weight} · {String(family.count).padStart(2, '0')} {L(lang, 'sygn.', 'sig.')}</em>
                </div>
                <h3>{L(lang, family.pl, family.en)}</h3>
                <p>{L(lang, family.plD, family.enD)}</p>
              </div>
            );
          })}
          <div className="family-summary">
            <StatusChip tone="ice" size="sm">{L(lang, 'V2 Confluence', 'V2 Confluence')}</StatusChip>
            <div>
              <strong>28</strong>
              <span>{L(lang, 'wskaźników w słowniku (24 w siatce)', 'indicators in glossary (24 in grid)')}</span>
            </div>
            <p>{L(lang, 'Znormalizowane, przefiltrowane przez mnożnik c_agree i zabezpieczone śladem audytowym V1 po stronie serwera.', 'Normalized, filtered through c_agree multiplier and backed by a server-side V1 audit trail.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spark({ points, color }: { points: number[]; color: string }) {
  const width = 220;
  const height = 44;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const d = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / (max - min || 1)) * height;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 5px ${color}66)` }} />
    </svg>
  );
}

function ProductPreview({ lang }: { lang: Lang }) {
  const series = [
    { catColor: 'var(--category-core)', plL: 'MVRV Z-Score (Wycena)', enL: 'MVRV Z-Score (Valuation)', val: '-0.12', pts: [9, 8, 7, 6, 5, 4, 3, 3.4, 3, 2.6] },
    { catColor: 'var(--category-fundament)', plL: 'LTH SOPR (Podaż)', enL: 'LTH SOPR (Supply)', val: '0.94', pts: [3, 4, 5, 4.4, 5.6, 7, 6.4, 7.6, 8.4, 9] },
    { catColor: 'var(--category-confirmation)', plL: 'ETF Flow Momentum (Popyt)', enL: 'ETF Flow Momentum (Demand)', val: '+$142M', pts: [2, 3, 4, 5, 6, 6.8, 7.5, 8.2, 9] },
  ];

  return (
    <section className="ds-section">
      <div className="nadir-container">
        <SectionHead
          align="center"
          eyebrow={L(lang, 'Interfejs Terminala', 'Terminal Interface')}
          title={L(lang, 'Jeden cockpit analityczny. Pełny rynek.', 'One analytical cockpit. The full market.')}
          sub={L(lang, 'Werdykt, dwupoziomowy dostęp (Smart vs Investor), wykresy sparklines i flaga Generacyjne Dno w jednym miejscu.', 'Verdict, dual-tier access (Smart vs Investor), sparklines and Generational Bottom flag in one place.')}
        />
        <div className="preview-frame">
          <div className="preview-urlbar">
            <span><i /><i /><i /></span>
            <div>{icon.lock} btc-dash.64bit.site</div>
          </div>
          <div className="preview-body">
            <div className="preview-command">
              <div>
                <img src="/assets/logo.svg" alt="" />
                <span>
                  <strong>BTC Smart Investor Terminal</strong>
                  <em>{L(lang, 'V2.3.0 Era-Aware Engine · Supabase DB', 'V2.3.0 Era-Aware Engine · Supabase DB')}</em>
                </span>
              </div>
              <div>
                <Badge tone="live">{L(lang, 'Kalibracja Cykli · V2 Engine', 'Cycle Calibration · V2 Engine')}</Badge>
                <StatusChip tone="ice" size="sm">{L(lang, 'Strefa DCA Otwarta', 'DCA Zone Open')}</StatusChip>
              </div>
            </div>
            <div className="preview-hero">
              <div className="preview-verdict">
                <ScoreRing score={72} size={150} label={L(lang, 'Bottom Score V2', 'Bottom Score V2')} />
                <div>
                  <Eyebrow>{L(lang, 'Werdykt strategii', 'Strategy verdict')}</Eyebrow>
                  <h3>{L(lang, 'Strefa Akumulacji', 'Accumulation Zone')}</h3>
                  <VerdictScale score={72} showLabels={false} />
                  <div className="preview-kpis">
                    <KpiStat label={L(lang, 'Silnik Scoringu', 'Scoring Engine')} value="V2 Era-Aware" accent="var(--ice-400)" />
                    <KpiStat label={L(lang, 'Flaga Dna', 'Floor Flag')} value="Generacyjne" accent="var(--signal-aggressive)" />
                    <KpiStat label="Spójność (c_agree)" value="0.88" accent="var(--emerald-400)" />
                  </div>
                </div>
              </div>
              <div className="preview-indicators">
                {series.map((item) => (
                  <div key={item.plL} className="preview-indicator">
                    <div>
                      <span>{L(lang, item.plL, item.enL)}</span>
                      <i style={{ background: item.catColor, boxShadow: `0 0 8px ${item.catColor}` }} />
                    </div>
                    <strong>{item.val}</strong>
                    <Spark points={item.pts} color={item.catColor} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology({ lang }: { lang: Lang }) {
  const order = ['valuation', 'holder', 'cycle', 'etf', 'macro'] as const;
  return (
    <section id="method" className="ds-section">
      <div className="nadir-container">
        <div className="method-top">
          <SectionHead
            eyebrow={L(lang, 'Architektura V2', 'V2 Architecture')}
            title={L(lang, '28 wskaźników. 4 rodziny konfluencji. 1 sprawdzony silnik.', '28 indicators. 4 confluence families. 1 verified engine.')}
            sub={L(
              lang,
              'Każdy odczyt jest normalizowany, ważony i filtrowany przez bramkę kompletności danych. Kalibracja została oparta o historyczne dołki 2018 i 2022 oraz zaktualizowana pod kątem napływów spot ETF USA z wielu niezależnych źródeł.',
              'Every reading is normalized, weighted and filtered through data-completeness gates. Calibration is based on 2018 and 2022 historical floors and updated for US spot ETF flows from multiple independent sources.',
            )}
          />
          <div className="method-legend">
            {order.map((key) => (
              <div key={key}>
                <span style={{ background: CAT[key].color, boxShadow: `0 0 8px ${CAT[key].color}` }} />
                <em>{L(lang, CAT[key].pl, CAT[key].en)}</em>
              </div>
            ))}
          </div>
        </div>
        <div className="method-grid">
          {order.map((key) => {
            const items = INDICATORS.filter((indicator) => indicator.cat === key);
            return (
              <div key={key} className="method-column">
                <div>
                  <span style={{ background: CAT[key].color, boxShadow: `0 0 10px ${CAT[key].color}` }} />
                  <strong style={{ color: CAT[key].color }}>{L(lang, CAT[key].pl, CAT[key].en)}</strong>
                  <em>{String(items.length).padStart(2, '0')}</em>
                </div>
                {items.map((item) => (
                  <p key={item.pl}>
                    <span style={{ background: CAT[key].color }} />
                    {L(lang, item.pl, item.en)}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
        <p className="method-note">
          {L(
            lang,
            '* Wersja publiczna pokazuje architekturę modelu bez ujawniania chronionych progów normalizacji i wag poszczególnych wskaźników.',
            '* Public version presents model architecture without exposing protected normalization thresholds and indicator weights.',
          )}
        </p>
      </div>
    </section>
  );
}

const PRICES = {
  pln: {
    symbol: 'zł',
    smart: {
      monthly: 179,
      '6m': 859,
    },
    investor: {
      '6m': 2849,
    }
  },
  eur: {
    symbol: '€',
    smart: {
      monthly: 39,
      '6m': 199,
    },
    investor: {
      '6m': 649,
    }
  },
  usd: {
    symbol: '$',
    smart: {
      monthly: 45,
      '6m': 225,
    },
    investor: {
      '6m': 719,
    }
  }
} as const;

function Pricing({ lang }: { lang: Lang }) {
  const [currency, setCurrency] = React.useState<Currency>('pln');
  const [smartTerm, setSmartTerm] = React.useState<'monthly' | '6m'>('6m');

  const formatPrice = React.useCallback((amount: number, curr: string) => {
    return new Intl.NumberFormat(lang === 'pl' ? 'pl-PL' : 'en-US', {
      style: 'currency',
      currency: curr.toUpperCase(),
      maximumFractionDigits: 0,
    }).format(amount);
  }, [lang]);

  const getPriceText = React.useCallback((planKey: string) => {
    if (planKey === 'smart') {
      const price = PRICES[currency].smart[smartTerm];
      return formatPrice(price, currency);
    } else {
      const price = PRICES[currency].investor['6m'];
      return formatPrice(price, currency);
    }
  }, [currency, smartTerm, formatPrice]);

  const getPerText = React.useCallback((planKey: string) => {
    if (planKey === 'smart') {
      return smartTerm === 'monthly'
        ? L(lang, 'miesięcznie', 'monthly')
        : L(lang, 'za 6 miesięcy', 'for 6 months');
    } else {
      return L(lang, 'za 6 miesięcy', 'for 6 months');
    }
  }, [smartTerm, lang]);

  return (
    <section id="pricing" className="ds-section">
      <div className="nadir-container">
        <SectionHead
          align="center"
          eyebrow={L(lang, 'Plany Subskrypcyjne', 'Subscription Tiers')}
          title={L(lang, 'Wybierz poziom dostępu i dołącz do terminala.', 'Choose your tier and join the terminal.')}
          sub={L(lang, 'Plan Smart prezentuje stan strategii na żywo w zamkniętym terminalu z bezpiecznym server-side redaction. Plan Investor odblokowuje pełny terminal analityczny. Bezpieczne płatności przez Stripe.', 'Smart shows live strategy status inside the terminal with server-side redaction. Investor unlocks full terminal analytics. Payments processed via Stripe.')}
        />
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="currency-switch" aria-label={L(lang, 'Wybór waluty', 'Currency selector')}>
            {(['pln', 'eur', 'usd'] as const).map((option) => (
              <button key={option} type="button" className={currency === option ? 'is-active' : ''} onClick={() => setCurrency(option)}>
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="currency-switch scale-90" aria-label={L(lang, 'Okres Smart', 'Smart term')}>
            {(['monthly', '6m'] as const).map((option) => (
              <button key={option} type="button" className={smartTerm === option ? 'is-active' : ''} onClick={() => setSmartTerm(option)}>
                {option === 'monthly' ? L(lang, 'Miesięcznie', 'Monthly') : L(lang, '6 miesięcy', '6 months')}
              </button>
            ))}
          </div>
        </div>
        <div className="pricing-grid">
          {PLANS.map((plan) => {
            const gold = plan.accent === 'gold';
            return (
              <div key={plan.key} className={`pricing-card ${gold ? 'is-gold' : ''}`}>
                <div className="pricing-head">
                  <strong>{plan.name}</strong>
                  <StatusChip tone={gold ? 'gold' : 'ice'} size="sm">{L(lang, plan.tag, plan.tagEn)}</StatusChip>
                </div>
                <div className="pricing-price">
                  <strong>{getPriceText(plan.key)}</strong>
                  <span>· {getPerText(plan.key)}</span>
                </div>
                <p>{L(lang, plan.plDesc, plan.enDesc)}</p>
                <i />
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature.pl} className={feature.on ? '' : 'is-off'}>
                      <span>{feature.on ? icon.check : icon.x}</span>
                      <em>{L(lang, feature.pl, feature.en)}</em>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={gold ? 'gold' : 'primary'} 
                  size="lg" 
                  fullWidth 
                  href={`${DASHBOARD_URL}/?trigger_checkout=true&plan=${plan.key}&term=${plan.key === 'investor' ? '6m' : smartTerm}&currency=${currency}`} 
                  iconRight={icon.arrow}
                >
                  {gold ? L(lang, 'Wybierz Investor', 'Select Investor') : L(lang, 'Wybierz Smart', 'Select Smart')}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Trust({ lang }: { lang: Lang }) {
  const stats = [
    { v: '2018 · 2022', plL: 'kalibracja cykli historycznych', enL: 'historical cycle calibration', tone: 'var(--signal-accumulate)' },
    { v: 'Multi-Source', plL: 'niezależne źródła danych', enL: 'independent data sources', tone: 'var(--gold-300)' },
    { v: '3× / dobę', plL: 'odświeżanie danych w terminalu', enL: 'terminal data refreshes', tone: 'var(--ice-400)' },
    { v: 'V1 Audit', plL: 'podwójny ślad audytowy bazy', enL: 'dual DB audit trail', tone: 'var(--emerald-400)' },
  ];
  const pillars = [
    {
      titlePl: 'Kalibracja i rygor historyczny',
      titleEn: 'Calibration and historical rigor',
      copyPl: 'Progi silnika V2 oparto na dołkach z lat 2018 i 2022, z wyliczaniem spójności c_agree i ochroną przed rynkowym szumem.',
      copyEn: 'V2 engine thresholds are calibrated on 2018 and 2022 cycle bottoms with c_agree dispersion protection against noise.',
    },
    {
      titlePl: 'Agregacja danych z wielu źródeł',
      titleEn: 'Multi-source data aggregation',
      copyPl: 'Infrastruktura wykorzystuje równoległą agregację danych z wielu niezależnych źródeł rynkowych z limitem współbieżności i buforowaniem.',
      copyEn: 'Infrastructure uses parallel data aggregation across multiple independent market sources with concurrency limits and caching.',
    },
    {
      titlePl: 'Dyscyplina i nadzór świeżości',
      titleEn: 'Discipline and freshness monitoring',
      copyPl: 'Automatyczny Freshness Watchdog oraz natychmiastowe alerty Telegram dbają o to, by inwestor wewnątrz terminala zawsze bazował na aktualnych odczytach.',
      copyEn: 'Automated Freshness Watchdog and instant Telegram alerts ensure investors inside the terminal always act on up-to-date data.',
    },
  ];

  return (
    <section id="trust" className="ds-section">
      <div className="nadir-container">
        <SectionHead
          eyebrow={L(lang, 'Zaufanie i Odporność', 'Trust & Resilience')}
          title={L(lang, 'Dojrzała analityka dla rycerzy dyscypliny.', 'Mature analytics built for long-term discipline.')}
          sub={L(lang, 'BTC Smart Investor Terminal jest wynikiem miesięcy testów i produkcyjnych szlifów silnika scoringowego V2.', 'BTC Smart Investor Terminal reflects months of production refinement and testing of the V2 scoring engine.')}
        />
        <div className="trust-stats">
          {stats.map((stat) => (
            <div key={stat.v}>
              <strong style={{ color: stat.tone }}>{stat.v}</strong>
              <span>{L(lang, stat.plL, stat.enL)}</span>
            </div>
          ))}
        </div>
        <div className="trust-lower">
          {pillars.map((pillar) => (
            <div key={pillar.titlePl} className="trust-card">
              <h3>{icon.shield} {L(lang, pillar.titlePl, pillar.titleEn)}</h3>
              <p>{L(lang, pillar.copyPl, pillar.copyEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ lang }: { lang: Lang }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="ds-section">
      <div className="nadir-container faq-layout">
        <div className="faq-head">
          <SectionHead eyebrow={L(lang, 'Częste Pytania', 'FAQ')} title={L(lang, 'Co warto wiedzieć przed dołączeniem.', 'What to know before joining.')} />
        </div>
        <div className="faq-list">
          {FAQ.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.pl} className={isOpen ? 'is-open' : ''}>
                <button type="button" onClick={() => setOpen(isOpen ? -1 : index)}>
                  <span>{L(lang, item.pl, item.en)}</span>
                  <i>{icon.chevron}</i>
                </button>
                <p>{L(lang, item.plA, item.enA)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RequestInvite({ lang }: { lang: Lang }) {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  return (
    <section id="invite" className="ds-section">
      <div className="nadir-container">
        <div className="invite-panel">
          <div aria-hidden="true" />
          <div aria-hidden="true" />
          <div className="invite-grid">
            <div>
              <Eyebrow>{L(lang, 'Dostęp na zaproszenie', 'Invite-only access')}</Eyebrow>
              <h2>{L(lang, 'Dołącz do zamkniętego kręgu inwestorów.', 'Join the closed investor circle.')}</h2>
              <p>{L(lang, 'Zostaw e-mail, a gdy zwolni się miejsce w puli dostępowej, przekażemy Ci indywidualny link aktywacyjny.', 'Leave your email and we will send an individual activation link when an access slot opens up.')}</p>
              <div>
                <span>{icon.shield} {L(lang, 'Silnik V2 Era-Aware i server-side redaction', 'V2 Era-Aware engine with server-side redaction')}</span>
                <span>{icon.bolt} {L(lang, 'Alerty Telegram 3x/dobę w planie Investor', '3x daily Telegram alerts on Investor tier')}</span>
              </div>
            </div>
            <div className="invite-form-card">
              {sent ? (
                <div className="sent-card">
                  <span>{icon.check}</span>
                  <h3>{L(lang, 'Jesteś na liście oczekujących.', "You're on the waitlist.")}</h3>
                  <p>{L(lang, 'Przekażemy informację, gdy zwolni się miejsce. Sprawdź skrzynkę e-mail.', 'We will notify you when a seat opens up. Check your email inbox.')}</p>
                </div>
              ) : (
                <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSent(true); }}>
                  <Input label={L(lang, 'E-mail', 'Email')} type="email" placeholder={L(lang, 'ty@inwestor.pl', 'you@investor.com')} iconLeft={icon.mail} value={email} onChange={(event) => setEmail(event.target.value)} required />
                  <Input label={L(lang, 'Imię (opcjonalnie)', 'Name (optional)')} type="text" placeholder={L(lang, 'Jak się do Ciebie zwracać', 'How to address you')} />
                  <Input label={L(lang, 'Kod polecającego (opcjonalnie)', 'Referral code (optional)')} type="text" placeholder="BTC-V2-XXXX" />
                  <Button variant="primary" size="lg" fullWidth type="submit" iconRight={icon.arrow}>
                    {L(lang, 'Wyślij prośbę o dostęp', 'Submit access request')}
                  </Button>
                  <p>{L(lang, 'Zapisując się, akceptujesz że BTC Smart Investor Terminal to narzędzie analityczne, nie porada finansowa.', 'By signing up, you acknowledge BTC Smart Investor Terminal is an analytical tool, not financial advice.')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageShell({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="nadir-container">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
      </section>
      {children}
    </main>
  );
}

function GlossaryPage({ lang }: { lang: Lang }) {
  const order = ['valuation', 'holder', 'cycle', 'etf', 'macro'] as const;
  return (
    <PageShell
      eyebrow={L(lang, 'Słownik Wskaźników V2', 'V2 Indicator Glossary')}
      title={L(lang, '28 wskaźników opisanych czytelnym językiem.', '28 indicators explained clearly.')}
      copy={L(
        lang,
        'Publiczny opis logiki wszystkich 28 wskaźników silnika V2: co mierzy dana grupa i dlaczego ma znaczenie dla rozpoznania strefy akumulacji BTC. Poufne wagi i progi pozostają w zamkniętej części terminala.',
        'Public explanation of all 28 V2 engine indicators: what each group measures and why it matters for BTC accumulation zone identification. Protected weights remain inside the terminal.',
      )}
    >
      <section className="page-section">
        <div className="nadir-container glossary-layout">
          {order.map((key) => (
            <article key={key} className="glossary-family">
              <div className="glossary-family-head">
                <span style={{ background: CAT[key].color, boxShadow: `0 0 12px ${CAT[key].color}` }} />
                <h2>{L(lang, CAT[key].pl, CAT[key].en)}</h2>
                <em>{INDICATORS.filter((indicator) => indicator.cat === key).length}</em>
              </div>
              <div className="glossary-grid">
                {INDICATORS.filter((indicator) => indicator.cat === key).map((indicator) => (
                  <div key={indicator.pl} className="indicator-card">
                    <div>
                      <strong>{L(lang, indicator.pl, indicator.en)}</strong>
                      <StatusChip tone="slate" size="sm">{L(lang, CAT[key].pl, CAT[key].en)}</StatusChip>
                    </div>
                    <p>{L(lang, indicator.plD, indicator.enD)}</p>
                    <Spark points={indicator.sample} color={CAT[key].color} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function TelegramPage({ lang }: { lang: Lang }) {
  return (
    <PageShell
      eyebrow={L(lang, 'Alerty Telegram', 'Telegram Alerts')}
      title={L(lang, 'Sygnały dostarczane dokładnie w momencie zmiany strefy.', 'Signals delivered exactly when zone status changes.')}
      copy={L(
        lang,
        'Alerty w planie Investor to selektywne powiadomienia o najwyższej wartości: automatyczny poranny digest 07:00 UTC, wykrycie flagi Generacyjnego Dna oraz nadzór świeżości Freshness Watchdog.',
        'Investor alerts are high-signal notifications: automated 07:00 UTC digest, Generational Bottom flags, and Freshness Watchdog monitoring.',
      )}
    >
      <section className="page-section">
        <div className="nadir-container telegram-grid">
          {TELEGRAM_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.plT} className="setup-card">
                <div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={22} />
                </div>
                <h2>{L(lang, step.plT, step.enT)}</h2>
                <p>{L(lang, step.plD, step.enD)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="page-section is-tight">
        <div className="nadir-container">
          <div className="notice-panel">
            <Bell size={22} />
            <div>
              <h2>{L(lang, 'Higiena powiadomień', 'Notification hygiene')}</h2>
              <p>
                {L(
                  lang,
                  'Alerty są projektowane tak, by nie spamować użytkownika. Maksymalnie 3 komunikaty na dobę z zachowaniem wysokiej wartości sygnałowej.',
                  'Alerts are designed to avoid noise. Maximum 3 high-signal messages per day.',
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function LegalPage({ lang, kind }: { lang: Lang; kind: 'disclaimer' | 'privacy' | 'terms' }) {
  const route = ROUTES[kind];
  const sectionIcon = kind === 'privacy' ? UserCheck : kind === 'terms' ? FileText : Scale;
  const LegalIcon = sectionIcon;
  return (
    <PageShell
      eyebrow={L(lang, route.pl, route.en)}
      title={L(lang, route.titlePl.replace(' | BTC Smart Investor Terminal', ''), route.titleEn.replace(' | BTC Smart Investor Terminal', ''))}
      copy={L(lang, route.descPl, route.descEn)}
    >
      <section className="page-section">
        <div className="nadir-container legal-layout">
          <aside className="legal-note">
            <LegalIcon size={24} />
            <h2>{L(lang, 'Ważne', 'Important')}</h2>
            <p>
              {L(
                lang,
                'Ten dokument porządkuje zasady publicznie na landing page. Przed publikacją produkcyjną warto zatwierdzić go formalnie z prawnikiem.',
                'This document structures the public landing-page terms.',
              )}
            </p>
            <p>
              {L(lang, `Administrator danych: ${DATA_CONTROLLER.name}, ${DATA_CONTROLLER.address}. Kontakt: ${DATA_CONTROLLER.email}.`, `Controller: ${DATA_CONTROLLER.name}, ${DATA_CONTROLLER.address}. Contact: ${DATA_CONTROLLER.email}.`)}
            </p>
          </aside>
          <div className="legal-sections">
            {LEGAL_SECTIONS[kind].map((section) => (
              <article key={section.plT} className="legal-card">
                <h2>{L(lang, section.plT, section.enT)}</h2>
                <p>{L(lang, section.plD, section.enD)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const cols: Array<{ h: string; links: Array<{ label: string; href: string }> }> = [
    {
      h: L(lang, 'Produkt', 'Product'),
      links: [
        { label: L(lang, 'Jak działa V2', 'How V2 Works'), href: '/#how' },
        { label: L(lang, 'Metodologia V2', 'V2 Methodology'), href: '/#method' },
        { label: L(lang, 'Cennik', 'Pricing'), href: '/#pricing' },
        { label: L(lang, 'Poproś o dostęp', 'Request access'), href: '/#invite' },
      ],
    },
    {
      h: L(lang, 'Zasoby', 'Resources'),
      links: [
        { label: 'FAQ', href: '/#faq' },
        { label: L(lang, ROUTES.glossary.pl, ROUTES.glossary.en), href: ROUTES.glossary.path },
        { label: L(lang, 'Instrukcja Telegram', 'Telegram setup'), href: ROUTES.telegram.path },
      ],
    },
    {
      h: L(lang, 'Prawne', 'Legal'),
      links: [
        { label: L(lang, ROUTES.disclaimer.pl, ROUTES.disclaimer.en), href: ROUTES.disclaimer.path },
        { label: L(lang, ROUTES.privacy.pl, ROUTES.privacy.en), href: ROUTES.privacy.path },
        { label: L(lang, ROUTES.terms.pl, ROUTES.terms.en), href: ROUTES.terms.path },
      ],
    },
  ];
  return (
    <footer className="ds-footer">
      <div className="nadir-container">
        <div className="footer-grid">
          <div>
            <BrandLockup />
            <p>{L(lang, 'Terminal analityczny do prognozowania dołka cyklu Bitcoina z silnikiem V2. Czytaj cykl, chroń sygnał.', 'Analytical terminal for forecasting Bitcoin cycle bottoms with V2 engine. Read the cycle, protect the signal.')}</p>
            <span><i /> {L(lang, 'Silnik V2.3.0 · Wszystkie systemy sprawne', 'V2.3.0 Engine · All systems operational')}</span>
          </div>
          <div className="footer-cols">
            {cols.map((col) => (
              <div key={col.h}>
                <h3>{col.h}</h3>
                <ul>
                  {col.links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BTC Smart Investor Terminal · btc-dash.64bit.site</span>
          <em>{L(lang, 'Narzędzie edukacyjne i informacyjne. Nie stanowi rekomendacji inwestycyjnej ani porady finansowej.', 'An educational and informational tool. Not investment advice or a financial recommendation.')}</em>
        </div>
      </div>
    </footer>
  );
}

function getRouteKey(pathname: string): RouteKey {
  const match = (Object.keys(ROUTES) as RouteKey[]).find((key) => ROUTES[key].path === pathname);
  return match ?? 'home';
}

function ensureMeta(selector: string, create: () => HTMLMetaElement | HTMLLinkElement) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  return element;
}

function updateSeo(lang: Lang, routeKey: RouteKey) {
  const route = ROUTES[routeKey];
  const title = L(lang, route.titlePl, route.titleEn);
  const description = L(lang, route.descPl, route.descEn);
  const url = `https://btc-invest.64bit.site${route.path === '/' ? '' : route.path}`;
  document.title = title;
  ensureMeta('meta[name="description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    return meta;
  }).setAttribute('content', description);
  ensureMeta('link[rel="canonical"]', () => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    return link;
  }).setAttribute('href', url);
  ensureMeta('meta[property="og:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    return meta;
  }).setAttribute('content', title);
  ensureMeta('meta[property="og:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    return meta;
  }).setAttribute('content', description);
  ensureMeta('meta[property="og:url"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    return meta;
  }).setAttribute('content', url);
  ensureMeta('meta[name="twitter:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:title');
    return meta;
  }).setAttribute('content', title);
  ensureMeta('meta[name="twitter:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:description');
    return meta;
  }).setAttribute('content', description);

  let script = document.getElementById('structured-data') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://btc-invest.64bit.site/#organization',
        name: 'ITCS sp. z o.o.',
        url: 'https://itcs.pl',
        email: DATA_CONTROLLER.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Karola Libelta 1A/2',
          postalCode: '61-706',
          addressLocality: 'Poznań',
          addressCountry: 'PL',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://btc-invest.64bit.site/#product',
        name: 'BTC Smart Investor Terminal',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description,
        offers: [
          { '@type': 'Offer', name: 'Smart Monthly', price: '39', priceCurrency: 'EUR', availability: 'https://schema.org/LimitedAvailability' },
          { '@type': 'Offer', name: 'Smart 6 Months', price: '199', priceCurrency: 'EUR', availability: 'https://schema.org/LimitedAvailability' },
          { '@type': 'Offer', name: 'Investor 6 Months', price: '649', priceCurrency: 'EUR', availability: 'https://schema.org/LimitedAvailability' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: lang === 'pl' ? 'pl-PL' : 'en',
        isPartOf: { '@id': 'https://btc-invest.64bit.site/#website' },
        about: { '@id': 'https://btc-invest.64bit.site/#product' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://btc-invest.64bit.site/#website',
        url: 'https://btc-invest.64bit.site',
        name: 'BTC Smart Investor Terminal',
        publisher: { '@id': 'https://btc-invest.64bit.site/#organization' },
      },
    ],
  });
}

export function App() {
  const [lang, setLang] = React.useState<Lang>('pl');
  const [routeKey, setRouteKey] = React.useState<RouteKey>(() => getRouteKey(window.location.pathname));

  React.useEffect(() => {
    document.documentElement.lang = lang;
    updateSeo(lang, routeKey);
  }, [lang, routeKey]);

  React.useEffect(() => {
    const onPopState = () => setRouteKey(getRouteKey(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const page =
    routeKey === 'home' ? (
      <main>
        <Hero lang={lang} />
        <HowItWorks lang={lang} />
        <Families lang={lang} />
        <ProductPreview lang={lang} />
        <Methodology lang={lang} />
        <Pricing lang={lang} />
        <Trust lang={lang} />
        <Faq lang={lang} />
        <RequestInvite lang={lang} />
      </main>
    ) : routeKey === 'glossary' ? (
      <GlossaryPage lang={lang} />
    ) : routeKey === 'telegram' ? (
      <TelegramPage lang={lang} />
    ) : routeKey === 'disclaimer' ? (
      <LegalPage lang={lang} kind="disclaimer" />
    ) : routeKey === 'privacy' ? (
      <LegalPage lang={lang} kind="privacy" />
    ) : (
      <LegalPage lang={lang} kind="terms" />
    );

  return (
    <div>
      <Nav lang={lang} setLang={setLang} />
      {page}
      <Footer lang={lang} />
    </div>
  );
}

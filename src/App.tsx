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
  fundament: { color: 'var(--category-fundament)', pl: 'Fundament', en: 'Fundamentals' },
  core: { color: 'var(--category-core)', pl: 'Core', en: 'Core' },
  auxiliary: { color: 'var(--category-auxiliary)', pl: 'Pomocnicze', en: 'Auxiliary' },
  confirmation: { color: 'var(--category-confirmation)', pl: 'Potwierdzenie', en: 'Confirmation' },
  macro: { color: 'var(--category-macro)', pl: 'Makro', en: 'Macro' },
};

const FAMILIES = [
  {
    key: 'history',
    icon: Target,
    count: 2,
    tone: 'var(--category-fundament)',
    pl: 'Historia i cykle',
    en: 'History & cycles',
    plD: 'Dane historyczne BTC i przebieg poprzednich cykli — punkt odniesienia dla każdego dna.',
    enD: 'Historical BTC data and the shape of past cycles — the reference frame for every bottom.',
  },
  {
    key: 'time',
    icon: Activity,
    count: 2,
    tone: 'var(--category-core)',
    pl: 'Okna czasowe i sezonowość',
    en: 'Time windows & seasonality',
    plD: 'Analiza czasu i cyklu — okna, w których historycznie formowały się dołki.',
    enD: 'Time and cycle analysis — the windows in which bottoms historically formed.',
  },
  {
    key: 'percent',
    icon: Zap,
    count: 2,
    tone: 'var(--category-auxiliary)',
    pl: 'Procenty i procent składany',
    en: 'Percentage & compounding',
    plD: 'Wyliczenia procentowe i składane — skala drawdownu i potencjału odbicia.',
    enD: 'Percentage and compounded-percentage math — drawdown depth and rebound potential.',
  },
  {
    key: 'risk',
    icon: Shield,
    count: 3,
    tone: 'var(--category-confirmation)',
    pl: 'Prawdopodobieństwo i ryzyko',
    en: 'Probability & risk',
    plD: 'Metryki prawdopodobieństwa i ryzyka — jak pewny jest odczyt strefy.',
    enD: 'Probability and risk metrics — how confident the zone read actually is.',
  },
  {
    key: 'market',
    icon: Waves,
    count: 5,
    tone: 'var(--category-core)',
    pl: 'Bieżące wskaźniki rynku',
    en: 'Current market indicators',
    plD: 'Aktualny stan rynku — momentum, trend i pozycja wobec średnich.',
    enD: 'The live market state — momentum, trend and position versus key averages.',
  },
  {
    key: 'sentiment',
    icon: Activity,
    count: 2,
    tone: 'var(--category-macro)',
    pl: 'Sentyment rynku',
    en: 'Market sentiment',
    plD: 'Strach i chciwość tłumu — kontrariański sygnał wokół dna.',
    enD: 'Crowd fear and greed — the contrarian signal around the floor.',
  },
  {
    key: 'whales',
    icon: Layers,
    count: 5,
    tone: 'var(--category-fundament)',
    pl: 'Wieloryby i przepływy ETF',
    en: 'Whales & ETF flows',
    plD: 'Ruchy dużego kapitału on-chain i bilans spotowych ETF — co robią silne ręce.',
    enD: 'Large on-chain capital moves and spot-ETF balance — what strong hands are doing.',
  },
];

const INDICATORS = [
  { cat: 'fundament', pl: 'Dni od ATH', en: 'Days since ATH', plD: 'Mierzy, ile czasu minęło od ostatniego maksimum cyklu. Daje kontekst cierpliwości, nie samodzielny sygnał wejścia.', enD: 'Measures how much time has passed since the last cycle high. It frames patience, not a standalone entry call.', sample: [94, 86, 72, 58, 45, 39, 34, 31] },
  { cat: 'fundament', pl: 'Drawdown od ATH', en: 'Drawdown from ATH', plD: 'Pokazuje głębokość spadku od szczytu. Im większy drawdown, tym silniejszy kontekst cyklicznego wychłodzenia.', enD: 'Shows how far price has fallen from the high. Deeper drawdowns strengthen the cycle-cooling context.', sample: [18, 24, 36, 49, 57, 63, 59, 54] },
  { cat: 'core', pl: 'Cena vs LTH Realized', en: 'Price vs LTH Realized', plD: 'Porównuje cenę rynkową z bazą kosztową długoterminowych posiadaczy. Pomaga ocenić, czy rynek schodzi w rejon kapitulacji.', enD: 'Compares market price with the cost basis of long-term holders. It helps identify whether the market is moving toward capitulation.', sample: [82, 76, 66, 55, 44, 39, 43, 50] },
  { cat: 'core', pl: 'MVRV Z-Score', en: 'MVRV Z-Score', plD: 'Ocenia relację wartości rynkowej do zrealizowanej. Niskie odczyty historycznie pojawiały się w pobliżu stref akumulacji.', enD: 'Evaluates market value against realized value. Low readings have historically appeared near accumulation zones.', sample: [76, 65, 52, 38, 28, 24, 31, 42] },
  { cat: 'core', pl: 'NUPL', en: 'NUPL', plD: 'Pokazuje niezrealizowany zysk lub stratę inwestorów. W strefach dna rynek często przechodzi od chciwości do rezygnacji.', enD: 'Shows investors’ unrealized profit or loss. Near bottoms, the market often moves from greed into surrender.', sample: [72, 60, 44, 30, 21, 19, 27, 38] },
  { cat: 'core', pl: 'Cena do 200WMA', en: 'Price to 200WMA', plD: 'Sprawdza dystans ceny względem 200-tygodniowej średniej. To wolny filtr cykliczny, przydatny do oceny skrajnego wychłodzenia.', enD: 'Checks price distance from the 200-week moving average. It is a slow cycle filter for extreme cooling.', sample: [90, 78, 62, 47, 36, 33, 40, 52] },
  { cat: 'core', pl: 'Puell Multiple', en: 'Puell Multiple', plD: 'Opisuje presję po stronie przychodów górników. Niskie poziomy mogą wskazywać fazę stresu podażowego.', enD: 'Describes miner-revenue pressure. Low levels can indicate supply-side stress.', sample: [68, 59, 45, 33, 25, 28, 36, 48] },
  { cat: 'core', pl: 'Reserve Risk', en: 'Reserve Risk', plD: 'Łączy cenę z przekonaniem długoterminowych posiadaczy. Niskie wartości sugerują lepszą relację ryzyka do potencjału.', enD: 'Combines price with long-term holder conviction. Low values suggest a better risk-to-potential profile.', sample: [70, 58, 41, 30, 24, 23, 29, 40] },
  { cat: 'auxiliary', pl: 'RSI Miesięczny', en: 'Monthly RSI', plD: 'Syntetyzuje momentum w długim interwale. Skrajnie niskie odczyty pomagają odróżnić bessę od zwykłej korekty.', enD: 'Summarizes long-timeframe momentum. Extremely low readings help separate bear-market regimes from ordinary corrections.', sample: [64, 55, 43, 33, 27, 30, 38, 46] },
  { cat: 'auxiliary', pl: 'Fear & Greed', en: 'Fear & Greed', plD: 'Czyta emocje rynku jako sygnał kontrariański. Silny strach jest kontekstem, ale wymaga potwierdzenia w danych twardych.', enD: 'Reads market emotion as a contrarian signal. Extreme fear is context, but still needs hard-data confirmation.', sample: [52, 39, 26, 18, 12, 16, 24, 36] },
  { cat: 'auxiliary', pl: 'Bilans ETF', en: 'ETF balance', plD: 'Uwzględnia przepływy kapitału instytucjonalnego w erze spotowych ETF. To nowa warstwa cyklu po 2024 roku.', enD: 'Accounts for institutional capital flows in the spot-ETF era. It is a new cycle layer after 2024.', sample: [32, 36, 41, 38, 44, 51, 57, 62] },
  { cat: 'auxiliary', pl: 'Momentum ETF', en: 'ETF flow momentum', plD: 'Pokazuje, czy przepływy ETF przyspieszają, słabną albo odwracają kierunek. Wspiera ocenę popytu strukturalnego.', enD: 'Shows whether ETF flows are accelerating, fading or reversing. It supports the read on structural demand.', sample: [28, 35, 46, 42, 39, 50, 61, 70] },
  { cat: 'confirmation', pl: 'LTH SOPR', en: 'LTH SOPR', plD: 'Bada, czy długoterminowi posiadacze realizują zysk czy stratę. Kapitulacja tej grupy może wzmacniać scenariusz dna.', enD: 'Checks whether long-term holders are realizing profit or loss. Their capitulation can strengthen a bottom scenario.', sample: [66, 54, 43, 34, 28, 26, 33, 45] },
  { cat: 'confirmation', pl: 'VDD Multiple', en: 'VDD Multiple', plD: 'Łączy aktywność dawnych monet z wartością rynku. Pomaga wykrywać nietypowe fazy realizacji i kapitulacji.', enD: 'Combines old-coin activity with market value. It helps detect unusual realization and capitulation phases.', sample: [58, 52, 44, 36, 30, 33, 41, 49] },
  { cat: 'confirmation', pl: 'UTXO w stracie', en: 'UTXOs in loss', plD: 'Mierzy, jaka część monet znajduje się poniżej ceny nabycia. Wysoki stres posiadaczy bywa elementem formowania dna.', enD: 'Measures how much of the coin set sits below acquisition price. High holder stress can be part of bottom formation.', sample: [20, 31, 45, 58, 67, 72, 63, 51] },
  { cat: 'confirmation', pl: 'Hash Ribbons', en: 'Hash Ribbons', plD: 'Obserwuje kondycję górników przez dynamikę hash rate. Jest warstwą potwierdzenia, nie samodzielnym wyzwalaczem.', enD: 'Observes miner health through hash-rate dynamics. It is a confirmation layer, not a standalone trigger.', sample: [48, 42, 36, 31, 29, 35, 43, 55] },
  { cat: 'confirmation', pl: 'STH MVRV', en: 'STH MVRV', plD: 'Czyta pozycję krótkoterminowych uczestników rynku. Pomaga ocenić, czy świeży kapitał jest już w stresie.', enD: 'Reads the position of short-term market participants. It helps assess whether recent capital is already under stress.', sample: [73, 61, 49, 38, 31, 28, 35, 44] },
  { cat: 'macro', pl: 'Płynność netto USD', en: 'USD net liquidity', plD: 'Dodaje tło makro: dostępność płynności, która może wspierać albo tłumić apetyt na ryzyko.', enD: 'Adds macro context: available liquidity that can support or suppress risk appetite.', sample: [38, 36, 40, 45, 43, 48, 54, 60] },
  { cat: 'macro', pl: 'Indeks Dolara', en: 'Dollar Index', plD: 'Silny dolar często działa jak wiatr w twarz dla aktywów ryzykownych. Wskaźnik służy do oceny presji makro.', enD: 'A strong dollar often acts as a headwind for risk assets. This indicator frames macro pressure.', sample: [44, 50, 61, 68, 64, 58, 49, 42] },
  { cat: 'macro', pl: 'Spread 10Y-2Y', en: '10Y-2Y spread', plD: 'Pokazuje napięcia w krzywej rentowności. Daje kontekst cyklu gospodarczego, nie sygnał transakcyjny.', enD: 'Shows stress in the yield curve. It provides business-cycle context, not a trading signal.', sample: [35, 32, 28, 24, 30, 38, 46, 52] },
  { cat: 'macro', pl: 'VIX', en: 'VIX', plD: 'Mierzy zmienność i stres na rynku akcji. Pomaga ocenić, czy globalny risk-off wzmacnia presję na BTC.', enD: 'Measures equity-market volatility and stress. It helps assess whether global risk-off pressure is weighing on BTC.', sample: [22, 28, 41, 58, 53, 44, 35, 30] },
];

const STEPS = [
  {
    n: '01',
    plT: 'Konfluencja, nie pojedynczy sygnał',
    enT: 'Confluence, not a single signal',
    plD: '24 wskaźniki on-chain, cykliczne, sentymentu i makro — odświeżane trzy razy dziennie z kontrolą jakości danych.',
    enD: '24 on-chain, cycle, sentiment and macro indicators — refreshed three times a day with data-quality checks.',
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
  { tone: 'slate' as const, range: '0–29', pl: 'Za wcześnie / Obserwuj', en: 'Too early / Observe', plD: 'Okno zamknięte. Cierpliwie czekaj.', enD: 'Window closed. Wait patiently.' },
  { tone: 'amber' as const, range: '30–54', pl: 'Obserwuj', en: 'Observe', plD: 'Akumulacja się zbliża. Przygotuj plan.', enD: 'Accumulation nears. Prepare the plan.' },
  { tone: 'emerald' as const, range: '55–77', pl: 'Strefa akumulacji', en: 'Accumulation zone', plD: 'Okno otwarte. Regularne zakupy DCA.', enD: 'Window open. Regular DCA buys.' },
  { tone: 'ice' as const, range: '78–100', pl: 'Agresywna akumulacja', en: 'Aggressive accumulation', plD: 'Najchłodniejszy odczyt. Przyspiesz DCA.', enD: 'Coldest read. Accelerate DCA.' },
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
    plDesc: 'Inteligentne śledzenie dna BTC. Widzisz status strategii i zagregowane sygnały — bez wglądu w metodologię.',
    enDesc: 'Smart tracking of the BTC bottom. You see the strategy status and aggregated signals — without seeing the methodology.',
    features: [
      { pl: 'Bottom Score na żywo i 5-pasmowy werdykt', en: 'Live Bottom Score & 5-band verdict', on: true },
      { pl: '„Gdzie jesteśmy" w oknie akumulacji', en: '"Where we are" in the accumulation window', on: true },
      { pl: 'Meta strategii: 24 wskaźniki w 7 rodzinach danych', en: 'Strategy meta: 24 indicators across 7 data families', on: true },
      { pl: 'Zagregowany indeks sentymentu i momentum', en: 'Aggregated sentiment & momentum index', on: true },
      { pl: 'Wieloryby i ETF — tylko kierunek', en: 'Whales & ETF — direction only', on: true },
      { pl: 'Pełna siatka 24 wskaźników, wagi i wkłady', en: 'Full 24-indicator grid, weights & contributions', on: false },
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
    plPer: 'wybrana waluta · pakiet 6-miesięczny',
    enPer: 'selected currency · 6-month package',
    plDesc: 'Cały terminal: konfluencja on-chain, wagi, wkłady, plan DCA i alerty. Poważny wybór dla zaangażowanego inwestora BTC.',
    enDesc: 'The whole terminal: on-chain confluence, weights, contributions, DCA plan and alerts. The serious choice for the committed BTC investor.',
    features: [
      { pl: 'Wszystko z planu Smart', en: 'Everything in Smart', on: true },
      { pl: 'Pełna siatka 24 wskaźników ze sparklines', en: 'Full 24-indicator grid with sparklines', on: true },
      { pl: 'Wagi, wkłady, progi normalizacji, mnożnik G', en: 'Weights, contributions, thresholds, G-multiplier', on: true },
      { pl: 'Planer transz DCA i strefy wejścia', en: 'DCA tranche planner & entry zones', on: true },
      { pl: 'Pełna oś zdarzeń wielorybów i ETF', en: 'Full whale & ETF event timeline', on: true },
      { pl: 'Historia scoringu od roku i replay snapshotów', en: 'One-year scoring history and snapshot replay', on: true },
      { pl: 'Alerty Telegram do 3 razy dziennie', en: 'Telegram alerts up to 3 times daily', on: true },
      { pl: 'Flaga Generacyjne Dno', en: 'Generational Bottom flag', on: true },
      { pl: 'Pełny dostęp do strategii na kolejne cykle', en: 'Full strategy access for future cycles', on: true },
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
    plA: 'Model korzysta z kontrolowanych źródeł rynkowych, on-chain, sentymentu, przepływów i makro. Publiczny landing pokazuje tylko bezpieczny kontekst, bez listy dostawców i bez szczegółów metodologii.',
    enA: 'The model uses controlled market, on-chain, sentiment, flow and macro inputs. The public landing only shows safe context, without vendor lists or methodology details.',
  },
  {
    pl: 'Jak często aktualizują się dane?',
    en: 'How often does data update?',
    plA: 'Bieżące odczyty są dostępne w zamkniętym dashboardzie i odświeżane według harmonogramu strategii. Publiczny landing pokazuje tylko historyczny przykład działania skali.',
    enA: 'Current readings are available inside the closed dashboard and refreshed on the strategy schedule. The public landing page shows only a historical example of the scale.',
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
    titlePl: 'BTC Smart Investor Terminal | Analiza dołka cyklu Bitcoina',
    titleEn: 'BTC Smart Investor Terminal | Bitcoin cycle-bottom analytics',
    descPl: 'Invite-only terminal dla inwestora BTC: Bottom Score, konfluencja 24 wskaźników i dyscyplina akumulacji w jednym produkcie.',
    descEn: 'Invite-only BTC investor terminal: Bottom Score, 24-indicator confluence and accumulation discipline in one product.',
  },
  glossary: {
    path: '/slownik-wskaznikow',
    pl: 'Słownik wskaźników',
    en: 'Indicator glossary',
    titlePl: 'Słownik wskaźników BTC Smart Investor Terminal',
    titleEn: 'BTC Smart Investor Terminal indicator glossary',
    descPl: 'Publiczny opis 24 wskaźników używanych do oceny stref akumulacji BTC, bez wag, progów i chronionej metodologii.',
    descEn: 'A public explanation of the 24 indicators used to evaluate BTC accumulation zones, without weights, thresholds or protected methodology.',
  },
  telegram: {
    path: '/telegram',
    pl: 'Telegram',
    en: 'Telegram',
    titlePl: 'Instrukcja alertów Telegram | BTC Smart Investor Terminal',
    titleEn: 'Telegram alert setup | BTC Smart Investor Terminal',
    descPl: 'Instrukcja konfiguracji alertów Telegram dla planu Investor: bot, chat ID, test i higiena powiadomień.',
    descEn: 'Telegram alert setup for the Investor plan: bot, chat ID, test message and notification hygiene.',
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
    descPl: 'Informacje o administratorze danych, zakresie przetwarzania, Stripe i prawach użytkownika zgodnie z RODO.',
    descEn: 'Information about the data controller, processing scope, Stripe and user rights under GDPR.',
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
    plD: 'W Telegramie otwórz BotFather, utwórz bota komendą /newbot i zapisz token. Token traktuj jak hasło administracyjne.',
    enD: 'Open BotFather in Telegram, create a bot with /newbot and store the token. Treat the token like an admin password.',
  },
  {
    icon: KeyRound,
    plT: 'Dodaj chat ID',
    enT: 'Add the chat ID',
    plD: 'Wyślij wiadomość do bota albo dodaj go do prywatnego kanału. W panelu Investor wklej chat ID w ustawieniach alertów.',
    enD: 'Send a message to the bot or add it to a private channel. Paste the chat ID into Investor alert settings.',
  },
  {
    icon: Bell,
    plT: 'Wybierz tryb alertów',
    enT: 'Choose alert mode',
    plD: 'Ustaw, które zdarzenia mają generować powiadomienia. Alerty są projektowane jako sygnały wysokiej wartości, maksymalnie do 3 razy dziennie.',
    enD: 'Choose which events should trigger notifications. Alerts are designed as high-signal messages, up to 3 times daily.',
  },
  {
    icon: Check,
    plT: 'Wyślij wiadomość testową',
    enT: 'Send a test message',
    plD: 'Po zapisaniu ustawień wykonaj test. Jeśli wiadomość nie dotrze, sprawdź token, chat ID, uprawnienia bota i blokady prywatności kanału.',
    enD: 'After saving settings, run a test. If it fails, check the token, chat ID, bot permissions and channel privacy restrictions.',
  },
];

const LEGAL_SECTIONS = {
  disclaimer: [
    {
      plT: 'Charakter edukacyjny i informacyjny',
      enT: 'Educational and informational nature',
      plD: 'BTC Smart Investor Terminal, Bottom Score, opisy wskaźników, alerty, wykresy, materiały tekstowe i wszystkie komunikaty w aplikacji mają charakter edukacyjny, informacyjny i analityczny. Nie stanowią rekomendacji inwestycyjnej, porady finansowej, doradztwa inwestycyjnego, doradztwa podatkowego ani zachęty do kupna, sprzedaży lub utrzymywania jakiegokolwiek aktywa.',
      enD: 'BTC Smart Investor Terminal, Bottom Score, indicator descriptions, alerts, charts, written materials and all in-app communications are educational, informational and analytical. They are not investment recommendations, financial advice, investment advice, tax advice or a solicitation to buy, sell or hold any asset.',
    },
    {
      plT: 'Brak relacji doradczej',
      enT: 'No advisory relationship',
      plD: 'Korzystanie z terminala nie tworzy relacji doradcy inwestycyjnego, maklera, zarządzającego portfelem ani indywidualnego doradcy finansowego. System nie zna Twojej sytuacji finansowej, horyzontu inwestycyjnego, tolerancji ryzyka, zobowiązań ani celów osobistych.',
      enD: 'Using the terminal does not create an investment adviser, broker, portfolio manager or personal financial adviser relationship. The system does not know your financial situation, investment horizon, risk tolerance, liabilities or personal objectives.',
    },
    {
      plT: 'Ryzyko rynku kryptoaktywów',
      enT: 'Crypto-asset market risk',
      plD: 'Bitcoin i inne kryptoaktywa są zmienne, ryzykowne i mogą generować znaczące straty, włącznie z utratą całości zainwestowanego kapitału. Dane historyczne, kalibracja cykli i przykłady nie gwarantują przyszłych wyników.',
      enD: 'Bitcoin and other crypto-assets are volatile, risky and may cause significant losses, including the loss of all invested capital. Historical data, cycle calibration and examples do not guarantee future results.',
    },
    {
      plT: 'Decyzja i odpowiedzialność użytkownika',
      enT: 'User decision and responsibility',
      plD: 'Każda decyzja inwestycyjna należy wyłącznie do użytkownika. Przed podjęciem decyzji należy wykonać własną analizę, ocenić ryzyko i w razie potrzeby skonsultować się z licencjonowanym doradcą właściwym dla danej jurysdykcji.',
      enD: 'Every investment decision belongs solely to the user. Before acting, users should perform their own analysis, assess risk and, where appropriate, consult a licensed adviser in their jurisdiction.',
    },
    {
      plT: 'Ograniczenia danych i dostępności',
      enT: 'Data and availability limitations',
      plD: 'Dane mogą być opóźnione, niepełne, błędne, czasowo niedostępne albo podlegać korektom. Terminal może korzystać z cache, mechanizmów fallback i harmonogramów odświeżania. Żaden odczyt nie powinien być traktowany jako gwarancja ceny, płynności lub momentu rynkowego.',
      enD: 'Data may be delayed, incomplete, incorrect, temporarily unavailable or subject to revision. The terminal may use cache, fallback mechanisms and refresh schedules. No reading should be treated as a guarantee of price, liquidity or market timing.',
    },
    {
      plT: 'Brak gwarancji wyniku',
      enT: 'No performance guarantee',
      plD: 'Nie gwarantujemy, że Bottom Score, alert, werdykt lub jakikolwiek wskaźnik poprawnie wskaże dołek, szczyt, punkt zwrotny albo przyszły wynik inwestycji. Narzędzie ma wspierać dyscyplinę analizy, a nie zastępować ocenę inwestora.',
      enD: 'We do not guarantee that Bottom Score, an alert, a verdict or any indicator will correctly identify a bottom, top, turning point or future investment result. The tool supports analytical discipline; it does not replace investor judgment.',
    },
  ],
  privacy: [
    {
      plT: 'Administrator danych',
      enT: 'Data controller',
      plD: `Administratorem danych osobowych jest ${DATA_CONTROLLER.name}, ${DATA_CONTROLLER.address}. Kontakt w sprawach prywatności i RODO: ${DATA_CONTROLLER.email}.`,
      enD: `The personal data controller is ${DATA_CONTROLLER.name}, ${DATA_CONTROLLER.address}. Privacy and GDPR contact: ${DATA_CONTROLLER.email}.`,
    },
    {
      plT: 'Zakres danych',
      enT: 'Data scope',
      plD: 'Przetwarzamy minimalny zakres danych potrzebny do obsługi dostępu invite-only: adres e-mail, imię lub nazwę podaną dobrowolnie, informacje techniczne konta, status planu oraz podstawowe logi bezpieczeństwa. Formularz landing page nie wymaga danych płatniczych.',
      enD: 'We process the minimum data needed to operate invite-only access: email address, voluntarily provided name or company name, account technical information, plan status and basic security logs. The landing page form does not require payment data.',
    },
    {
      plT: 'Płatności Stripe',
      enT: 'Stripe payments',
      plD: 'Dane kart płatniczych i proces płatności będą obsługiwane przez Stripe jako zewnętrznego operatora płatności. Nie przechowujemy pełnych numerów kart, kodów CVV ani danych uwierzytelniających płatność na landing page.',
      enD: 'Card data and payment processing will be handled by Stripe as an external payment provider. We do not store full card numbers, CVV codes or payment authentication data on the landing page.',
    },
    {
      plT: 'Podstawy przetwarzania',
      enT: 'Legal bases for processing',
      plD: 'Dane mogą być przetwarzane w celu wykonania umowy lub działań przed jej zawarciem, obsługi zaproszeń i konta, spełnienia obowiązków prawnych, zabezpieczenia systemu oraz realizacji prawnie uzasadnionego interesu administratora polegającego na ochronie produktu i komunikacji z użytkownikami.',
      enD: 'Data may be processed to perform a contract or pre-contractual steps, manage invites and accounts, meet legal obligations, secure the system and pursue the controller’s legitimate interest in protecting the product and communicating with users.',
    },
    {
      plT: 'Prawa użytkownika',
      enT: 'User rights',
      plD: 'Użytkownik może żądać dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia danych, wniesienia sprzeciwu oraz złożenia skargi do właściwego organu nadzorczego. Wnioski można kierować na adres administratora danych.',
      enD: 'Users may request access, rectification, erasure, restriction of processing, data portability, objection and may lodge a complaint with the competent supervisory authority. Requests can be sent to the data controller address.',
    },
    {
      plT: 'Retencja i bezpieczeństwo',
      enT: 'Retention and security',
      plD: 'Dane przechowujemy tylko tak długo, jak jest to potrzebne do obsługi dostępu, rozliczeń, bezpieczeństwa i obowiązków prawnych. Stosujemy zasadę minimalizacji, ograniczenia dostępu i rozdzielenia danych płatniczych od danych konta.',
      enD: 'We retain data only as long as needed for access management, billing, security and legal obligations. We apply minimization, access limitation and separation of payment data from account data.',
    },
  ],
  terms: [
    {
      plT: 'Dostęp invite-only',
      enT: 'Invite-only access',
      plD: 'Terminal jest usługą zamkniętą. Konto może zostać utworzone wyłącznie po zaproszeniu, aktywacji lub decyzji administratora. Samo wysłanie formularza nie gwarantuje otrzymania dostępu.',
      enD: 'The terminal is a closed service. An account may be created only after an invite, activation or administrator decision. Submitting the form does not guarantee access.',
    },
    {
      plT: 'Plany Smart i Investor',
      enT: 'Smart and Investor plans',
      plD: 'Plan Smart pokazuje bezpieczny status strategii i zagregowane sygnały. Plan Investor odblokowuje głębsze panele operacyjne, historię scoringu, alerty oraz warstwy metodologiczne dostępne po zalogowaniu.',
      enD: 'Smart shows the safe strategy status and aggregated signals. Investor unlocks deeper operating panels, scoring history, alerts and methodology layers available after sign-in.',
    },
    {
      plT: 'Dozwolone korzystanie',
      enT: 'Permitted use',
      plD: 'Użytkownik zobowiązuje się korzystać z terminala zgodnie z prawem, nie udostępniać dostępu osobom trzecim, nie kopiować chronionej metodologii i nie podejmować prób obejścia zabezpieczeń lub limitów usługi.',
      enD: 'Users agree to use the terminal lawfully, not share access with third parties, not copy protected methodology and not attempt to bypass security controls or service limits.',
    },
    {
      plT: 'Treści i własność intelektualna',
      enT: 'Content and intellectual property',
      plD: 'Interfejs, opisy, układ, logika prezentacji, metodologia, nazwy handlowe i materiały są chronione. Publiczne fragmenty można cytować wyłącznie z podaniem źródła i bez sugerowania rekomendacji inwestycyjnej.',
      enD: 'The interface, descriptions, layout, presentation logic, methodology, trade names and materials are protected. Public excerpts may be quoted only with source attribution and without implying investment advice.',
    },
    {
      plT: 'Zmiany usługi',
      enT: 'Service changes',
      plD: 'Możemy zmieniać zakres funkcji, ceny, harmonogramy odświeżania, limity alertów i sposób prezentacji danych, jeśli wymaga tego jakość produktu, bezpieczeństwo, dostępność danych lub wymagania prawne.',
      enD: 'We may change features, pricing, refresh schedules, alert limits and data presentation where product quality, security, data availability or legal requirements make it necessary.',
    },
    {
      plT: 'Ograniczenie odpowiedzialności',
      enT: 'Limitation of liability',
      plD: 'W najszerszym zakresie dopuszczalnym przez prawo nie odpowiadamy za decyzje inwestycyjne użytkownika, utracone korzyści, straty rynkowe, przerwy w dostępie, opóźnienia danych ani skutki wykorzystania materiałów niezgodnie z ich edukacyjnym charakterem.',
      enD: 'To the fullest extent permitted by law, we are not liable for users’ investment decisions, lost profits, market losses, service interruptions, data delays or consequences of using materials contrary to their educational nature.',
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
        <em>Terminal</em>
      </span>
    </a>
  );
}

function ScoreRing({ score = 72, size = 168, stroke = 9, label = 'Bottom Score' }: { score?: number; size?: number; stroke?: number; label?: string | null }) {
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
    { href: '/#method', pl: 'Metodologia', en: 'Methodology' },
    { href: '/#pricing', pl: 'Plany', en: 'Plans' },
    { href: ROUTES.glossary.path, pl: 'Słownik', en: 'Glossary' },
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
  const verdictLabel = L(lang, 'Dno cyklu 2022', '2022 cycle-bottom zone');
  const price = '$15,760';
  const drawdown = '~77%';

  return (
    <section id="top" className="ds-hero">
      <div className="hero-wash" aria-hidden="true" />
      <div className="nadir-container hero-grid">
        <div className="hero-copy">
          <Eyebrow>
            {icon.lock} {L(lang, 'Dostęp na zaproszenie · portal zamknięty', 'Invite-only · closed terminal')}
          </Eyebrow>
          <h1>
            {L(lang, 'Znajdź', 'Find the')} <span>{L(lang, 'dołek', 'floor')}</span>.<br />
            {L(lang, 'Z przewagą analityczną.', 'With an analytical edge.')}
          </h1>
          <p>
            {L(
              lang,
              'Terminal, który łączy 24 wskaźniki cyklu, rynku, sentymentu i makro w jeden Bottom Score — żeby szybciej rozpoznać, czy BTC zbliża się do strefy akumulacji.',
              'A terminal that turns 24 cycle, market, sentiment and macro indicators into one Bottom Score — so you can recognize when BTC is moving toward an accumulation zone.',
            )}
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" href="/#invite" iconRight={icon.arrow}>
              {L(lang, 'Poproś o zaproszenie', 'Request invite')}
            </Button>
            <Button variant="secondary" size="lg" href="/#method">
              {L(lang, 'Zobacz metodologię', 'See methodology')}
            </Button>
          </div>
          <div className="hero-stats">
            {[
              { v: '24', pl: 'wskaźników w konfluencji', en: 'indicators in confluence' },
              { v: '2018 · 2022', pl: 'cykle backtestowane', en: 'cycles backtested' },
              { v: '3×', pl: 'aktualizacja / dobę', en: 'updates / day' },
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
                {L(lang, 'Przykład historyczny · 2022', 'Historical example · 2022')}
              </Badge>
              </div>
            </div>
            <div className="orb-score-panel">
              <ScoreRing score={score} size={104} stroke={8} label={null} />
              <div>
                <span>{L(lang, 'Werdykt', 'Verdict')}</span>
                <strong>{verdictLabel}</strong>
                <p>
                  BTC {price} · <em>{drawdown}</em> {L(lang, 'od ATH · dane poglądowe', 'from ATH · illustrative data')}
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
          eyebrow={L(lang, 'Jak to działa', 'How it works')}
          title={L(lang, 'Od chaosu danych do jednej decyzji.', 'From data chaos to one decision.')}
          sub={L(
            lang,
            'Nie kolejny dashboard z setką wykresów. BTC Smart Investor Terminal sprowadza cykl do trzech kroków.',
            'Not another dashboard with a hundred charts. BTC Smart Investor Terminal reduces the cycle to three steps.',
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
                <Eyebrow>{L(lang, 'Bottom Score · 0–100', 'Bottom Score · 0–100')}</Eyebrow>
                <h3>{L(lang, 'Kontrariański termometr cyklu', 'A contrarian cycle thermometer')}</h3>
              </div>
              <p>
                {L(
                  lang,
                  'Zimny odczyt = głębszy dołek = większa okazja. Im chłodniej, tym bliżej dna cyklu.',
                  'A cold read = a deeper bottom = a bigger opportunity. The colder it gets, the closer the cycle floor.',
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
          eyebrow={L(lang, 'Sygnały i konfluencja', 'Signals & confluence')}
          title={L(lang, 'Siedem obszarów sygnału. Jedna decyzja.', 'Seven signal areas. One decision.')}
          sub={L(
            lang,
            'Strategia czyta cykl, skalę spadku, ryzyko, bieżący rynek, sentyment oraz przepływy ETF. Smart pokazuje bezpieczny zakres modelu, Investor odblokowuje szczegóły po zalogowaniu.',
            'The strategy reads cycle context, drawdown depth, risk, live market structure, sentiment and ETF flows. Smart shows the safe model scope; Investor unlocks deeper detail after sign-in.',
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
                  <em>{String(family.count).padStart(2, '0')} {L(lang, 'sygn.', 'sig.')}</em>
                </div>
                <h3>{L(lang, family.pl, family.en)}</h3>
                <p>{L(lang, family.plD, family.enD)}</p>
              </div>
            );
          })}
          <div className="family-summary">
            <StatusChip tone="ice" size="sm">{L(lang, 'Konfluencja', 'Confluence')}</StatusChip>
            <div>
              <strong>24</strong>
              <span>{L(lang, 'wskaźników w modelu', 'model indicators')}</span>
            </div>
            <p>{L(lang, 'Ważone, znormalizowane i sprowadzone do jednego Bottom Score. Bez wzorów po stronie przeglądarki.', 'Weighted, normalized and collapsed into one Bottom Score. No formulas in the browser.')}</p>
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
    { catColor: 'var(--category-core)', plL: 'MVRV Z-Score', enL: 'MVRV Z-Score', val: '-0.12', pts: [9, 8, 7, 6, 5, 4, 3, 3.4, 3, 2.6] },
    { catColor: 'var(--category-confirmation)', plL: 'LTH SOPR', enL: 'LTH SOPR', val: '0.97', pts: [3, 4, 5, 4.4, 5.6, 7, 6.4, 7.6, 8.4, 9] },
    { catColor: 'var(--category-core)', plL: 'NUPL', enL: 'NUPL', val: '-0.08', pts: [9, 8.4, 7, 6.4, 5, 4.4, 4, 3.6, 3.2, 3] },
  ];

  return (
    <section className="ds-section">
      <div className="nadir-container">
        <SectionHead
          align="center"
          eyebrow={L(lang, 'Wewnątrz terminala', 'Inside the terminal')}
          title={L(lang, 'Jeden ekran. Cała strategia.', 'One screen. The whole strategy.')}
          sub={L(lang, 'Werdykt, konfluencja i plan DCA — bez przełączania kart. To zobaczysz po zalogowaniu.', 'Verdict, confluence and DCA plan — without switching tabs. This is what you see after sign-in.')}
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
                  <em>{L(lang, 'Research cockpit · konfluencja sygnałów', 'Research cockpit · signal confluence')}</em>
                </span>
              </div>
              <div>
                <Badge tone="live">{L(lang, 'System świeży', 'System fresh')}</Badge>
                <StatusChip tone="ice" size="sm">{L(lang, 'Strefa DCA', 'DCA zone')}</StatusChip>
              </div>
            </div>
            <div className="preview-hero">
              <div className="preview-verdict">
                <ScoreRing score={72} size={150} label={L(lang, 'Bottom Score', 'Bottom Score')} />
                <div>
                  <Eyebrow>{L(lang, 'Werdykt strategii', 'Strategy verdict')}</Eyebrow>
                  <h3>{L(lang, 'Strefa akumulacji', 'Accumulation zone')}</h3>
                  <VerdictScale score={72} showLabels={false} />
                  <div className="preview-kpis">
                    <KpiStat label={L(lang, 'BTC spot', 'BTC spot')} value={L(lang, 'po logowaniu', 'after sign-in')} />
                    <KpiStat label={L(lang, 'Drawdown', 'Drawdown')} value={L(lang, 'po logowaniu', 'after sign-in')} accent="var(--signal-aggressive)" />
                    <KpiStat label="Confidence" value="0.86" accent="var(--ice-400)" />
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
  const order = ['fundament', 'core', 'auxiliary', 'confirmation', 'macro'] as const;
  return (
    <section id="method" className="ds-section">
      <div className="nadir-container">
        <div className="method-top">
          <SectionHead
            eyebrow={L(lang, 'Metodologia', 'Methodology')}
            title={L(lang, '24 wskaźniki. Siedem rodzin. Jeden werdykt.', '24 indicators. Seven families. One verdict.')}
            sub={L(lang, 'Każdy wskaźnik jest znormalizowany, zważony i sprawdzony pod kątem kompletności. Progi kalibrowano na dołkach z 2018 i 2022 roku oraz dostosowano do obecnej ery ETF.', 'Every indicator is normalized, weighted and checked for completeness. Thresholds were calibrated on the 2018 and 2022 cycle bottoms and adapted for the current ETF era.')}
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
            '* Publiczna wersja pokazuje zakres modelu bez listy dostawców danych, wag i progów. Model służy jako wskaźnik reżimu strefy, nie precyzyjny timer dna.',
            '* The public version shows model scope without data vendor lists, weights or thresholds. The model is a regime-zone indicator, not a precise bottom timer.',
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
          eyebrow={L(lang, 'Plany', 'Plans')}
          title={L(lang, 'Wybierz swój plan i zacznij korzystać.', 'Choose your tier and start tracking.')}
          sub={L(lang, 'Smart pokazuje status dna i zagregowane sygnały. Investor odkrywa cały terminal. Płatności realizowane bezpiecznie przez Stripe.', 'Smart shows the bottom status and aggregated signals. Investor reveals the whole terminal. Payments handled securely via Stripe.')}
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
    { v: '2018', plL: 'kalibracja dna cyklu', enL: 'cycle-bottom calibration', tone: 'var(--signal-accumulate)' },
    { v: '2022', plL: 'kalibracja dna cyklu', enL: 'cycle-bottom calibration', tone: 'var(--signal-accumulate)' },
    { v: 'ETF', plL: 'uwzględniona nowa era rynku', enL: 'new market era included', tone: 'var(--gold-300)' },
    { v: '3×', plL: 'odświeżanie / dobę', enL: 'refresh / day', tone: 'var(--ice-400)' },
  ];
  const pillars = [
    {
      titlePl: 'Kalibracja bez obietnic',
      titleEn: 'Calibration without promises',
      copyPl: 'Progi służą do rozpoznania reżimu strefy akumulacji. Landing nie sprzedaje pewności ani dokładnego dnia dołka.',
      copyEn: 'Thresholds are used to identify an accumulation-zone regime. The landing does not sell certainty or an exact bottom day.',
    },
    {
      titlePl: 'Dane kontrolowane w terminalu',
      titleEn: 'Controlled data inside the terminal',
      copyPl: 'Szczegółowe zasilanie, wagi, wkłady i logika kontroli pozostają po stronie zamkniętej aplikacji.',
      copyEn: 'Detailed data feeds, weights, contributions and control logic remain inside the closed application.',
    },
    {
      titlePl: 'Rygor zamiast marketingu',
      titleEn: 'Rigor over marketing',
      copyPl: 'System wspiera dyscyplinę decyzji: obserwować, akumulować lub czekać. Nie zastępuje własnej analizy ryzyka.',
      copyEn: 'The system supports decision discipline: observe, accumulate or wait. It does not replace personal risk analysis.',
    },
  ];

  return (
    <section id="trust" className="ds-section">
      <div className="nadir-container">
        <SectionHead
          eyebrow={L(lang, 'Zaufanie i autorytet', 'Trust & authority')}
          title={L(lang, 'Kalibracja cykli z uwzględnieniem ery ETF.', 'Cycle calibration with the ETF era included.')}
          sub={L(lang, 'Model opiera się na historycznych dołkach z 2018 i 2022 roku, ale nie ignoruje strukturalnej zmiany rynku po wejściu spotowych ETF. Publicznie pokazujemy rygor, nie pełną recepturę.', 'The model uses the 2018 and 2022 historical bottoms, but does not ignore the structural market change after spot ETFs. Publicly, we show rigor, not the full recipe.')}
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
          <SectionHead eyebrow={L(lang, 'Pytania', 'Questions')} title={L(lang, 'Zanim poprosisz o zaproszenie.', 'Before you request an invite.')} />
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
              <h2>{L(lang, 'Dołącz do zamkniętego kręgu.', 'Join the closed circle.')}</h2>
              <p>{L(lang, 'Zostaw e-mail, a gdy zwolni się miejsce, wyślemy Ci zaproszenie. Bez spamu — tylko link do rejestracji.', 'Leave your email and we will send an invite when a seat opens. No spam — just a registration link.')}</p>
              <div>
                <span>{icon.shield} {L(lang, 'Dane redagowane po stronie serwera', 'Server-side redacted data')}</span>
                <span>{icon.bolt} {L(lang, 'Alerty Telegram w planie Investor', 'Telegram alerts on Investor')}</span>
              </div>
            </div>
            <div className="invite-form-card">
              {sent ? (
                <div className="sent-card">
                  <span>{icon.check}</span>
                  <h3>{L(lang, 'Jesteś na liście.', "You're on the list.")}</h3>
                  <p>{L(lang, 'Damy znać, gdy zwolni się miejsce. Sprawdź skrzynkę — czasem zaproszenia trafiają do spamu.', 'We will reach out when a seat opens. Check your inbox — invites sometimes land in spam.')}</p>
                </div>
              ) : (
                <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSent(true); }}>
                  <Input label={L(lang, 'E-mail', 'Email')} type="email" placeholder={L(lang, 'ty@fundusz.pl', 'you@fund.com')} iconLeft={icon.mail} value={email} onChange={(event) => setEmail(event.target.value)} required />
                  <Input label={L(lang, 'Imię (opcjonalnie)', 'Name (optional)')} type="text" placeholder={L(lang, 'Jak się do Ciebie zwracać', 'How to address you')} />
                  <Input label={L(lang, 'Kod polecającego (opcjonalnie)', 'Referral code (optional)')} type="text" placeholder="BTC-XXXX" />
                  <Button variant="primary" size="lg" fullWidth type="submit" iconRight={icon.arrow}>
                    {L(lang, 'Wyślij prośbę', 'Send request')}
                  </Button>
                  <p>{L(lang, 'Zapisując się, akceptujesz że BTC Smart Investor Terminal to narzędzie edukacyjne, nie porada inwestycyjna.', 'By joining you accept that BTC Smart Investor Terminal is an educational tool, not financial advice.')}</p>
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
  const order = ['fundament', 'core', 'auxiliary', 'confirmation', 'macro'] as const;
  return (
    <PageShell
      eyebrow={L(lang, 'Słownik wskaźników', 'Indicator glossary')}
      title={L(lang, '24 sygnały opisane prostym językiem.', '24 signals, explained clearly.')}
      copy={L(
        lang,
        'To publiczny opis logiki modelu: co mierzy dana grupa i dlaczego ma znaczenie. Wagi, progi, wkłady i pełna normalizacja pozostają w terminalu Investor.',
        'This is the public explanation of the model: what each signal group measures and why it matters. Weights, thresholds, contributions and full normalization remain inside Investor.',
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
      eyebrow={L(lang, 'Alerty Telegram', 'Telegram alerts')}
      title={L(lang, 'Ustaw alerty tak, żeby pomagały w decyzji, a nie robiły hałas.', 'Set alerts to support decisions, not create noise.')}
      copy={L(
        lang,
        'Alerty w planie Investor są projektowane jako rzadkie, konkretne komunikaty o zmianie reżimu, świeżości danych i istotnych zdarzeniach strategii.',
        'Investor alerts are designed as rare, specific messages about regime changes, data freshness and material strategy events.',
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
              <h2>{L(lang, 'Dobre praktyki alertów', 'Alert best practices')}</h2>
              <p>
                {L(
                  lang,
                  'Nie traktuj alertu jako polecenia zakupu. Alert ma zwrócić uwagę na zmianę warunków i zachęcić do sprawdzenia pełnego panelu, planu DCA oraz własnego ryzyka.',
                  'Do not treat an alert as a buy instruction. It is meant to draw attention to a change in conditions and prompt a review of the full panel, DCA plan and your own risk.',
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
                'This document structures the public landing-page terms. Before production publication, it should be formally reviewed by legal counsel.',
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
        { label: L(lang, 'Jak działa', 'How it works'), href: '/#how' },
        { label: L(lang, 'Metodologia', 'Methodology'), href: '/#method' },
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
            <p>{L(lang, 'Terminal analityczny do prognozowania dołka cyklu Bitcoina. Czytaj cykl, chroń sygnał.', 'An analytical terminal for forecasting the Bitcoin cycle bottom. Read the cycle, protect the signal.')}</p>
            <span><i /> {L(lang, 'Wszystkie systemy operacyjne', 'All systems operational')}</span>
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

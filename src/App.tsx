import React from 'react';
import {
  Activity,
  ArrowRight,
  Check,
  ChevronDown,
  Layers,
  Lock,
  Mail,
  Shield,
  Target,
  Waves,
  X,
  Zap,
} from 'lucide-react';

type Lang = 'pl' | 'en';
type Currency = 'eur' | 'pln';
type Tone = 'ice' | 'emerald' | 'amber' | 'red' | 'slate' | 'gold' | 'live' | 'neutral';

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
    count: 6,
    tone: 'var(--category-fundament)',
    pl: 'Historia i cykle',
    en: 'History & cycles',
    plD: 'Dane historyczne BTC i przebieg poprzednich cykli — punkt odniesienia dla każdego dna.',
    enD: 'Historical BTC data and the shape of past cycles — the reference frame for every bottom.',
  },
  {
    key: 'time',
    icon: Activity,
    count: 3,
    tone: 'var(--category-core)',
    pl: 'Okna czasowe i sezonowość',
    en: 'Time windows & seasonality',
    plD: 'Analiza czasu i cyklu — okna, w których historycznie formowały się dołki.',
    enD: 'Time and cycle analysis — the windows in which bottoms historically formed.',
  },
  {
    key: 'percent',
    icon: Zap,
    count: 4,
    tone: 'var(--category-auxiliary)',
    pl: 'Procenty i procent składany',
    en: 'Percentage & compounding',
    plD: 'Wyliczenia procentowe i składane — skala drawdownu i potencjału odbicia.',
    enD: 'Percentage and compounded-percentage math — drawdown depth and rebound potential.',
  },
  {
    key: 'risk',
    icon: Shield,
    count: 4,
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
    count: 3,
    tone: 'var(--category-fundament)',
    pl: 'Wieloryby i przepływy ETF',
    en: 'Whales & ETF flows',
    plD: 'Ruchy dużego kapitału on-chain i bilans spotowych ETF — co robią silne ręce.',
    enD: 'Large on-chain capital moves and spot-ETF balance — what strong hands are doing.',
  },
];

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
    plD: '21 wskaźników on-chain, cyklicznych, sentymentu i makro — odświeżanych trzy razy dziennie z kontrolą jakości danych.',
    enD: '21 on-chain, cycle, sentiment and macro indicators — refreshed three times a day with data-quality checks.',
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
    eurPrice: 99,
    plnPrice: 426,
    plPer: 'wybrana waluta · dostęp na zaproszenie',
    enPer: 'selected currency · invite-only access',
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
    eurPrice: 399,
    plnPrice: 1716,
    plPer: 'wybrana waluta · na zaproszenie',
    enPer: 'selected currency · by invitation',
    plDesc: 'Cały terminal: konfluencja on-chain, wagi, wkłady, plan DCA i alerty. Poważny wybór dla zaangażowanego inwestora BTC.',
    enDesc: 'The whole terminal: on-chain confluence, weights, contributions, DCA plan and alerts. The serious choice for the committed BTC investor.',
    features: [
      { pl: 'Wszystko z planu Smart', en: 'Everything in Smart', on: true },
      { pl: 'Pełna siatka 21 wskaźników ze sparklines', en: 'Full 21-indicator grid with sparklines', on: true },
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
    plA: 'Trzy razy na dobę (06:00 / 12:00 / 18:00 UTC) z dwóch niezależnych systemów. Wbudowany dead-man\'s switch wysyła alert, jeśli najnowszy snapshot jest starszy niż 18 godzin.',
    enA: 'Three times a day (06:00 / 12:00 / 18:00 UTC) from two independent systems. A built-in dead-man\'s switch alerts if the latest snapshot is older than 18 hours.',
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
    <a className="ds-brand" href="#top" aria-label="BTC Smart Investor Terminal">
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
    { href: '#how', pl: 'Jak działa', en: 'How it works' },
    { href: '#signals', pl: 'Sygnały', en: 'Signals' },
    { href: '#method', pl: 'Metodologia', en: 'Methodology' },
    { href: '#pricing', pl: 'Plany', en: 'Plans' },
    { href: '#faq', pl: 'FAQ', en: 'FAQ' },
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
          <Button variant="primary" size="sm" href="#invite" iconRight={<ArrowRight size={15} />}>
            {L(lang, 'Zaproszenie', 'Get invite')}
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const score = 72;
  const verdictLabel = L(lang, 'Strefa akumulacji', 'Accumulation zone');
  const price = '$61,480';
  const drawdown = '-58.2%';

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
            {L(lang, 'Jak wytrawni inwestorzy.', 'Like seasoned investors.')}
          </h1>
          <p>
            {L(
              lang,
              'Terminal analityczny, który łączy 21 wskaźników on-chain, cyklicznych i sentymentu w jeden Bottom Score — i mówi wprost, czy jesteś w opłacalnej strefie akumulacji BTC.',
              'An analytical terminal that fuses 21 on-chain, cycle and sentiment indicators into one Bottom Score — and tells you plainly whether you are in a worthwhile BTC accumulation zone.',
            )}
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" href="#invite" iconRight={icon.arrow}>
              {L(lang, 'Poproś o zaproszenie', 'Request invite')}
            </Button>
            <Button variant="secondary" size="lg" href="#method">
              {L(lang, 'Zobacz metodologię', 'See methodology')}
            </Button>
          </div>
          <div className="hero-stats">
            {[
              { v: '21', pl: 'wskaźników w konfluencji', en: 'indicators in confluence' },
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
              <Badge tone="live">{L(lang, 'Dane na żywo', 'Live data')}</Badge>
              </div>
            </div>
            <div className="orb-score-panel">
              <ScoreRing score={score} size={104} stroke={8} label={null} />
              <div>
                <span>{L(lang, 'Werdykt', 'Verdict')}</span>
                <strong>{verdictLabel}</strong>
                <p>
                  BTC {price} · <em>{drawdown}</em> {L(lang, 'od ATH', 'from ATH')}
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
          title={L(lang, 'Siedem rodzin sygnałów. Jedna decyzja.', 'Seven signal families. One decision.')}
          sub={L(
            lang,
            'Strategia czyta dane historyczne i cykle, okna czasowe, procenty składane, prawdopodobieństwo i ryzyko, bieżący rynek, sentyment oraz ruchy wielorybów i ETF. Plan Smart pokazuje rodziny i liczby — Investor odkrywa wskaźniki w środku.',
            'The strategy reads historical data and cycles, time windows, compounded percentages, probability and risk, the live market, sentiment, and whale & ETF moves. Smart shows the families and counts — Investor reveals the indicators inside.',
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
              <strong>21</strong>
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
                    <KpiStat label={L(lang, 'BTC spot', 'BTC spot')} value="$61,480" />
                    <KpiStat label={L(lang, 'Drawdown', 'Drawdown')} value="-58.2%" accent="var(--signal-aggressive)" />
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
            title={L(lang, '21 wskaźników. Pięć rodzin. Jeden werdykt.', '21 indicators. Five families. One verdict.')}
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

function Pricing({ lang }: { lang: Lang }) {
  const [currency, setCurrency] = React.useState<Currency>('eur');
  const formatPrice = React.useCallback((plan: (typeof PLANS)[number]) => {
    const amount = currency === 'eur' ? plan.eurPrice : plan.plnPrice;
    return new Intl.NumberFormat(lang === 'pl' ? 'pl-PL' : 'en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
      maximumFractionDigits: 0,
    }).format(amount);
  }, [currency, lang]);

  return (
    <section id="pricing" className="ds-section">
      <div className="nadir-container">
        <SectionHead
          align="center"
          eyebrow={L(lang, 'Plany', 'Plans')}
          title={L(lang, 'Dwa poziomy. Oba na zaproszenie.', 'Two tiers. Both invite-only.')}
          sub={L(lang, 'Smart pokazuje status dna i zagregowane sygnały. Investor odkrywa cały terminal. Chronione szczegóły są redagowane po stronie serwera — nigdy nie trafiają do przeglądarki.', 'Smart shows the bottom status and aggregated signals. Investor reveals the whole terminal. Protected detail is redacted server-side — it never reaches the browser.')}
        />
        <div className="currency-switch" aria-label={L(lang, 'Wybór waluty', 'Currency selector')}>
          {(['eur', 'pln'] as const).map((option) => (
            <button key={option} type="button" className={currency === option ? 'is-active' : ''} onClick={() => setCurrency(option)}>
              {option.toUpperCase()}
            </button>
          ))}
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
                  <strong>{formatPrice(plan)}</strong>
                  <span>· {L(lang, plan.plPer, plan.enPer)}</span>
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
                <Button variant={gold ? 'gold' : 'primary'} size="lg" fullWidth href="#invite" iconRight={icon.arrow}>
                  {gold ? L(lang, 'Poproś o dostęp Investor', 'Request Investor access') : L(lang, 'Poproś o zaproszenie Smart', 'Request Smart invite')}
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

function Footer({ lang }: { lang: Lang }) {
  const cols = [
    { h: L(lang, 'Produkt', 'Product'), links: [L(lang, 'Jak działa', 'How it works'), L(lang, 'Metodologia', 'Methodology'), L(lang, 'Cennik', 'Pricing'), L(lang, 'Status systemu', 'System status')] },
    { h: L(lang, 'Zasoby', 'Resources'), links: ['FAQ', L(lang, 'Słownik wskaźników', 'Indicator glossary'), 'Changelog', 'Telegram'] },
    { h: L(lang, 'Prawne', 'Legal'), links: [L(lang, 'Zastrzeżenie', 'Disclaimer'), L(lang, 'Prywatność', 'Privacy'), L(lang, 'Regulamin', 'Terms')] },
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
                  {col.links.map((link) => <li key={link}><a href="#top">{link}</a></li>)}
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

export function App() {
  const [lang, setLang] = React.useState<Lang>('pl');

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div>
      <Nav lang={lang} setLang={setLang} />
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
      <Footer lang={lang} />
    </div>
  );
}

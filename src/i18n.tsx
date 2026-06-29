import React from 'react';

export type Lang = 'pl' | 'en';

type Dictionary = Record<string, Record<Lang, string>>;

const dictionary: Dictionary = {
  'nav.how': { pl: 'Jak działa', en: 'How it works' },
  'nav.signals': { pl: 'Sygnały', en: 'Signals' },
  'nav.product': { pl: 'Produkt', en: 'Product' },
  'nav.method': { pl: 'Metodologia', en: 'Method' },
  'nav.plans': { pl: 'Plany', en: 'Plans' },
  'nav.faq': { pl: 'FAQ', en: 'FAQ' },
  'nav.invite': { pl: 'Zaproszenie', en: 'Invite' },
  'nav.dashboard': { pl: 'Wejdź do dashboardu', en: 'Open dashboard' },
  'hero.eyebrow': { pl: 'Dostęp na zaproszenie · portal zamknięty', en: 'Invite-only · closed terminal' },
  'hero.title.a': { pl: 'Znajdź dołek.', en: 'Find the floor.' },
  'hero.title.b': { pl: 'Z przewagą analityczną.', en: 'With an analytical edge.' },
  'hero.copy': {
    pl: 'BTC Smart Investor Terminal łączy sygnały cykliczne, on-chain, sentyment i makro w jeden Bottom Score. To narzędzie dyscypliny, nie wyrocznia.',
    en: 'BTC Smart Investor Terminal fuses cycle, on-chain, sentiment and macro signals into one Bottom Score. It is a discipline tool, not an oracle.',
  },
  'hero.ctaInvite': { pl: 'Poproś o zaproszenie', en: 'Request invite' },
  'hero.ctaDashboard': { pl: 'Panel logowania', en: 'Login panel' },
  'live.eyebrow': { pl: 'Przykład historyczny', en: 'Historical example' },
  'live.title': { pl: 'Bottom Score', en: 'Bottom Score' },
  'live.loading': { pl: 'Przykład kalibracyjny 2022', en: '2022 calibration example' },
  'live.unavailable': { pl: 'Dane poglądowe, nie bieżący odczyt', en: 'Illustrative data, not a live reading' },
  'live.note': {
    pl: 'Landing pokazuje historyczny przykład działania skali. Bieżące odczyty są dostępne dopiero po zalogowaniu do terminala.',
    en: 'The landing page shows a historical example of the scale. Current readings are available only after signing in to the terminal.',
  },
  'stats.indicators': { pl: 'wskaźników w modelu', en: 'model indicators' },
  'stats.families': { pl: 'rodzin danych', en: 'data families' },
  'stats.access': { pl: 'dostęp invite-only', en: 'invite-only access' },
  'section.system': { pl: 'Jeden język wizualny dla terminala i landing page', en: 'One visual language for terminal and landing page' },
  'section.systemCopy': {
    pl: 'Landing komunikuje wartość produktu, a dashboard pozostaje gęstym narzędziem operacyjnym. Oba używają tej samej palety, typografii, tokenów i logiki statusów.',
    en: 'The landing page explains the product, while the dashboard stays a dense operating surface. Both share the same palette, typography, tokens and status logic.',
  },
  'features.score.title': { pl: 'Bottom Score 0-100', en: 'Bottom Score 0-100' },
  'features.score.copy': { pl: 'Jedna liczba dla strefy akumulacji, wsparta confidence i świeżością danych.', en: 'One number for the accumulation zone, backed by confidence and data freshness.' },
  'features.window.title': { pl: 'Okno akumulacji', en: 'Accumulation window' },
  'features.window.copy': { pl: 'Strategia pokazuje, kiedy czekać, obserwować lub uruchamiać zdyscyplinowane DCA.', en: 'The strategy shows when to wait, observe or start disciplined DCA.' },
  'features.gated.title': { pl: 'Warstwa Investor', en: 'Investor layer' },
  'features.gated.copy': { pl: 'Pełna siatka wskaźników, wkłady, historia, alerty i panele operacyjne są dostępne po zaproszeniu.', en: 'Full indicator grid, contributions, history, alerts and operating panels are available by invite.' },
  'how.eyebrow': { pl: 'Jak działa', en: 'How it works' },
  'how.title': { pl: 'Konfluencja sygnałów sprowadzona do jednego werdyktu', en: 'Signal confluence compressed into one verdict' },
  'how.copy': {
    pl: 'Terminal nie próbuje zgadywać jednego dnia dołka. Łączy rodziny danych i pokazuje, czy rynek zbliża się do reżimu akumulacji.',
    en: 'The terminal does not try to guess one exact bottom day. It combines data families and shows whether the market is moving into an accumulation regime.',
  },
  'how.step1.title': { pl: 'Konfluencja, nie pojedynczy sygnał', en: 'Confluence, not one signal' },
  'how.step1.copy': { pl: 'Sygnały cykliczne, sentyment, przepływy i ryzyko są czytane razem, żeby ograniczyć fałszywe alarmy.', en: 'Cycle, sentiment, flow and risk signals are read together to reduce false alarms.' },
  'how.step2.title': { pl: 'Bottom Score 0-100', en: 'Bottom Score 0-100' },
  'how.step2.copy': { pl: 'Smart pokazuje wynik i werdykt. Investor widzi pełną konfluencję i panel operacyjny.', en: 'Smart shows the score and verdict. Investor exposes the full confluence and operating panel.' },
  'how.step3.title': { pl: 'Werdykt i okno akumulacji', en: 'Verdict and accumulation window' },
  'how.step3.copy': { pl: 'System porządkuje decyzję: czekać, obserwować, akumulować lub działać agresywniej.', en: 'The system structures the decision: wait, observe, accumulate or act more aggressively.' },
  'how.scaleTitle': { pl: 'Skala werdyktu', en: 'Verdict scale' },
  'how.band.tooEarly': { pl: 'Za wcześnie', en: 'Too early' },
  'how.band.observe': { pl: 'Obserwuj', en: 'Observe' },
  'how.band.accumulation': { pl: 'Akumulacja', en: 'Accumulation' },
  'how.band.aggressive': { pl: 'Agresywnie', en: 'Aggressive' },
  'families.eyebrow': { pl: 'Rodziny sygnałów', en: 'Signal families' },
  'families.title': { pl: 'Siedem rodzin danych bez ujawniania wag strategii', en: 'Seven data families without exposing strategy weights' },
  'families.copy': {
    pl: 'Na stronie publicznej pokazujemy zakres modelu. Szczegółowe progi, wkłady i normalizacje zostają w zamkniętym terminalu.',
    en: 'The public page shows the model scope. Detailed thresholds, contributions and normalizations stay in the closed terminal.',
  },
  'families.history.title': { pl: 'Historia i cykle', en: 'History and cycles' },
  'families.history.copy': { pl: 'Perspektywa poprzednich bess, czasu od ATH i faz cyklu.', en: 'Previous bear-market, time-since-ATH and cycle-phase perspective.' },
  'families.time.title': { pl: 'Okna czasowe', en: 'Time windows' },
  'families.time.copy': { pl: 'Sezonowość i rytm cyklu używane jako kontekst, nie samodzielny sygnał.', en: 'Seasonality and cycle rhythm used as context, not as a standalone signal.' },
  'families.percent.title': { pl: 'Procenty i zasięgi', en: 'Percent and ranges' },
  'families.percent.copy': { pl: 'Spadki, odbicia i dystans względem historycznych punktów odniesienia.', en: 'Drawdowns, rebounds and distance from historical reference points.' },
  'families.risk.title': { pl: 'Ryzyko i prawdopodobieństwo', en: 'Risk and probability' },
  'families.risk.copy': { pl: 'Warstwa ograniczeń, która pomaga oddzielić reżim dna od zwykłej korekty.', en: 'A guardrail layer that helps separate bottom regimes from ordinary corrections.' },
  'families.market.title': { pl: 'Bieżący rynek', en: 'Current market' },
  'families.market.copy': { pl: 'Cena, zmienność i bieżąca struktura rynku BTC.', en: 'Price, volatility and current BTC market structure.' },
  'families.sentiment.title': { pl: 'Sentyment', en: 'Sentiment' },
  'families.sentiment.copy': { pl: 'Skrajny strach i zachowanie tłumu jako wejście kontrariańskie.', en: 'Extreme fear and crowd behavior as a contrarian input.' },
  'families.flows.title': { pl: 'Wieloryby i ETF', en: 'Whales and ETF' },
  'families.flows.copy': { pl: 'Kierunek przepływów i popytu instytucjonalnego bez publicznego logu zdarzeń.', en: 'Flow and institutional demand direction without a public event log.' },
  'preview.eyebrow': { pl: 'Preview produktu', en: 'Product preview' },
  'preview.title': { pl: 'Dashboard jest aplikacją, nie stroną marketingową', en: 'The dashboard is an application, not a marketing page' },
  'preview.copy': {
    pl: 'Side menu, szybkie statusy, gęste panele i zamknięte widoki Investor tworzą spokojny kokpit decyzyjny dla rynku BTC.',
    en: 'Side menu, quick statuses, dense panels and gated Investor views form a calm BTC decision cockpit.',
  },
  'method.eyebrow': { pl: 'Metodologia bez sekretów strategii', en: 'Method without strategy leakage' },
  'method.title': { pl: 'Pokazujemy kontekst, nie formuły', en: 'Context, not formulas' },
  'method.copy': {
    pl: 'Publiczna strona tłumaczy rodziny sygnałów i sposób myślenia. Szczegółowe wagi, progi i wkłady pozostają w terminalu Investor.',
    en: 'The public page explains signal families and the operating model. Detailed weights, thresholds and contributions remain inside the Investor terminal.',
  },
  'method.chipsLabel': { pl: 'Kategorie metodologii', en: 'Method categories' },
  'method.chip.cycles': { pl: 'Cykle', en: 'Cycles' },
  'method.chip.onchain': { pl: 'On-chain', en: 'On-chain' },
  'method.chip.sentiment': { pl: 'Sentyment', en: 'Sentiment' },
  'method.chip.flows': { pl: 'Przepływy', en: 'Flows' },
  'method.chip.risk': { pl: 'Ryzyko', en: 'Risk' },
  'plans.eyebrow': { pl: 'Plany', en: 'Plans' },
  'plans.title': { pl: 'Smart pokazuje status. Investor odblokowuje terminal.', en: 'Smart shows status. Investor unlocks the terminal.' },
  'plans.copy': {
    pl: 'Oba plany są dostępne wyłącznie na zaproszenie. Różnica dotyczy głębokości danych i paneli operacyjnych.',
    en: 'Both plans are invite-only. The difference is data depth and operating panels.',
  },
  'plans.smart': { pl: 'Smart', en: 'Smart' },
  'plans.investor': { pl: 'Investor', en: 'Investor' },
  'plans.invite': { pl: 'Na zaproszenie', en: 'Invite-only' },
  'plans.smartLabel': { pl: 'Podstawowy status', en: 'Basic status' },
  'plans.investorLabel': { pl: 'Pełny terminal', en: 'Full terminal' },
  'plans.smartCopy': { pl: 'Dla osób, które chcą wiedzieć, czy rynek zbliża się do strefy dna, bez szczegółów strategii.', en: 'For users who want to know whether the market is approaching a bottom zone, without strategy detail.' },
  'plans.investorCopy': { pl: 'Dla osób, które potrzebują pełnej konfluencji, historii, alertów i paneli operacyjnych.', en: 'For users who need full confluence, history, alerts and operating panels.' },
  'plans.smart.f1': { pl: 'Bottom Score i werdykt', en: 'Bottom Score and verdict' },
  'plans.smart.f2': { pl: 'Cena BTC, drawdown i świeżość danych', en: 'BTC price, drawdown and data freshness' },
  'plans.smart.f3': { pl: 'Zagregowany sentyment', en: 'Aggregated sentiment' },
  'plans.smart.f4': { pl: 'Rodziny sygnałów i zakres modelu', en: 'Signal families and model scope' },
  'plans.smart.lock1': { pl: 'Bez wag, progów i wkładów wskaźników', en: 'No weights, thresholds or indicator contributions' },
  'plans.smart.lock2': { pl: 'Bez planu DCA i alertów Telegram', en: 'No DCA plan or Telegram alerts' },
  'plans.investor.f1': { pl: 'Pełna tabela konfluencji 21 wskaźników', en: 'Full 21-indicator confluence table' },
  'plans.investor.f2': { pl: 'Historia cykli i replay snapshotów', en: 'Cycle history and snapshot replay' },
  'plans.investor.f3': { pl: 'Wieloryby, ETF i log zdarzeń', en: 'Whales, ETF and event log' },
  'plans.investor.f4': { pl: 'DCA, alerty Telegram i ustawienia konta', en: 'DCA, Telegram alerts and account settings' },
  'plans.cta': { pl: 'Poproś o dostęp', en: 'Request access' },
  'trust.eyebrow': { pl: 'Zaufanie i rygor', en: 'Trust and rigor' },
  'trust.title': { pl: 'Model ma wskazywać reżim, nie obiecywać wynik', en: 'The model indicates regime, not guaranteed outcome' },
  'trust.copy': {
    pl: 'Historyczne cykle służą do kalibracji kontekstu. Terminal pozostaje narzędziem edukacyjnym i decyzyjnym, a nie rekomendacją inwestycyjną.',
    en: 'Historical cycles calibrate context. The terminal remains an educational and decision-support tool, not investment advice.',
  },
  'trust.stat2018': { pl: 'historyczny dołek cyklu', en: 'historical cycle bottom' },
  'trust.stat2022': { pl: 'historyczny dołek cyklu', en: 'historical cycle bottom' },
  'trust.statModes': { pl: 'tryby decyzji', en: 'decision modes' },
  'trust.statMonitor': { pl: 'monitorowanie rynku', en: 'market monitoring' },
  'trust.sources': { pl: 'Kontrola danych', en: 'Data controls' },
  'faq.eyebrow': { pl: 'FAQ', en: 'FAQ' },
  'faq.title': { pl: 'Najczęstsze pytania przed zaproszeniem', en: 'Common questions before invite' },
  'faq.invite.q': { pl: 'Czy mogę samodzielnie założyć konto?', en: 'Can I create an account myself?' },
  'faq.invite.a': { pl: 'Nie. Dashboard jest invite-only. Landing page służy do poproszenia o dostęp albo przejścia do logowania, jeśli konto już istnieje.', en: 'No. The dashboard is invite-only. This page lets you request access or go to login if you already have an account.' },
  'faq.smart.q': { pl: 'Czym różni się Smart od Investor?', en: 'How is Smart different from Investor?' },
  'faq.smart.a': { pl: 'Smart pokazuje status dna, cenę, drawdown, sentyment i rodziny sygnałów. Investor odblokowuje szczegóły wskaźników, historię, DCA i alerty.', en: 'Smart shows bottom status, price, drawdown, sentiment and signal families. Investor unlocks indicator detail, history, DCA and alerts.' },
  'faq.advice.q': { pl: 'Czy to jest porada inwestycyjna?', en: 'Is this investment advice?' },
  'faq.advice.a': { pl: 'Nie. To narzędzie edukacyjne i analityczne. Decyzje inwestycyjne oraz ryzyko pozostają po stronie użytkownika.', en: 'No. It is an educational and analytical tool. Investment decisions and risk remain with the user.' },
  'faq.data.q': { pl: 'Skąd pochodzą dane?', en: 'Where does the data come from?' },
  'faq.data.a': { pl: 'Model korzysta z kontrolowanych danych rynkowych, sentymentu, makro i on-chain. Publiczny landing nie pokazuje chronionych detali ani listy dostawców.', en: 'The model uses controlled market, sentiment, macro and on-chain inputs. The public landing does not expose protected detail or vendor lists.' },
  'faq.update.q': { pl: 'Jak często odświeżane są dane?', en: 'How often is data refreshed?' },
  'faq.update.a': { pl: 'Dashboard korzysta z cache i harmonogramów odświeżania, żeby nie przeciążać API. Landing nie pokazuje bieżących danych rynkowych.', en: 'The dashboard uses cache and refresh schedules to avoid overloading the API. The landing page does not show current market data.' },
  'invite.eyebrow': { pl: 'Dostęp', en: 'Access' },
  'invite.title': { pl: 'Poproś o zaproszenie do terminala', en: 'Request access to the terminal' },
  'invite.copy': { pl: 'Rejestracja w dashboardzie pozostaje zamknięta. Wyślij krótką prośbę o dostęp albo przejdź do panelu logowania, jeśli masz konto.', en: 'Dashboard registration remains closed. Send a short access request or open the login panel if you already have an account.' },
  'invite.email': { pl: 'E-mail', en: 'Email' },
  'invite.name': { pl: 'Imię lub firma (opcjonalnie)', en: 'Name or company (optional)' },
  'invite.message': { pl: 'Krótka notatka', en: 'Short note' },
  'invite.consent': { pl: 'Wysyłając formularz prosisz o kontakt w sprawie dostępu. Materiały mają charakter edukacyjny.', en: 'By submitting, you request contact about access. Materials are educational.' },
  'invite.submit': { pl: 'Wyślij prośbę', en: 'Send request' },
  'footer.disclaimer': { pl: 'Materiały edukacyjne i informacyjne. To nie jest rekomendacja finansowa ani inwestycyjna.', en: 'Educational and informational materials only. This is not financial or investment advice.' },
};

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = React.createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    const stored = window.localStorage.getItem('btc-invest-lang');
    return stored === 'en' || stored === 'pl' ? stored : 'pl';
  });

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem('btc-invest-lang', next);
    document.documentElement.lang = next;
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = React.useCallback((key: string) => dictionary[key]?.[lang] ?? key, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = React.useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used within I18nProvider');
  return value;
}

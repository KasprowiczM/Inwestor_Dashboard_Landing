/* BTC Smart Investor Terminal — landing app shell.
   NOTE: this file registers window.App and boots a SINGLE React root, guarded so it
   is safe even if a copy is evaluated early (e.g. inlined into a bundle) before the
   section scripts (Nav, Hero, …) have defined their window globals. */
(function () {
  const { useState } = window.React;

  function App() {
    // Resolve sections lazily at render time so a late-arriving definition is picked up.
    const { Nav, Hero, HowItWorks, Families, ProductPreview, Methodology, Pricing, Trust, Faq, RequestInvite, Footer } = window;
    const [lang, setLang] = useState('pl');
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
  window.App = App;

  const NEEDED = ['Nav', 'Hero', 'HowItWorks', 'Families', 'ProductPreview', 'Methodology', 'Pricing', 'Trust', 'Faq', 'RequestInvite', 'Footer'];
  function boot() {
    if (NEEDED.some((n) => typeof window[n] !== 'function')) return false; // deps not ready
    const el = document.getElementById('root');
    if (!el) return false; // not the landing page (e.g. bundle loaded elsewhere)
    if (!window.__landingRoot) window.__landingRoot = window.ReactDOM.createRoot(el);
    window.__landingRoot.render(React.createElement(App));
    return true;
  }
  if (!boot()) {
    let tries = 0;
    const iv = setInterval(() => { if (boot() || ++tries > 80) clearInterval(iv); }, 25);
  }
})();

/* NADIR landing — top navigation */
(function () {
  const { useState, useEffect } = window.React;
  const { Button } = window.NADIRDesignSystem_54e725;
  const I = window.NADIR_ICONS;

  function Nav({ lang, setLang }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll);
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
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        background: scrolled ? 'var(--bg-glass-strong)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        transition: 'all var(--dur) var(--ease-out)',
      }}>
        <div className="nadir-container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 70,
        }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            <img src="../../assets/logo.svg" alt="" style={{ width: 33, height: 33, filter: 'drop-shadow(0 0 8px var(--gold-glow))' }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 16.5, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>BTC Smart Investor</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Terminal</span>
            </span>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 26 }} className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{
                fontSize: 13.5, fontWeight: 600, color: 'var(--text-secondary)', whiteSpace: 'nowrap',
                textDecoration: 'none', transition: 'color var(--dur)',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >{window.L(lang, l.pl, l.en)}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')} style={{
              display: 'flex', alignItems: 'center', gap: 5, height: 34, padding: '0 10px',
              border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.03)', color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, cursor: 'pointer',
              letterSpacing: '0.05em',
            }}>
              <span style={{ color: lang === 'pl' ? 'var(--ice-400)' : 'var(--text-muted)' }}>PL</span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span style={{ color: lang === 'en' ? 'var(--ice-400)' : 'var(--text-muted)' }}>EN</span>
            </button>
            <a href="#" className="nav-signin" style={{
              fontSize: 13.5, fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none',
            }}>{window.L(lang, 'Zaloguj', 'Sign in')}</a>
            <Button variant="primary" size="sm" href="#invite" iconRight={I.arrow({ size: 15 })}>
              {window.L(lang, 'Zaproszenie', 'Get invite')}
            </Button>
          </div>
        </div>
      </header>
    );
  }
  window.Nav = Nav;
})();

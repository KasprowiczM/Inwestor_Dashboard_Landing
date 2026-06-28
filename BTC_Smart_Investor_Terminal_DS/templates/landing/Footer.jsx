/* NADIR landing — footer */
(function () {
  function Footer({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    const cols = [
      { h: L('Produkt', 'Product'), links: [L('Jak działa', 'How it works'), L('Metodologia', 'Methodology'), L('Cennik', 'Pricing'), L('Status systemu', 'System status')] },
      { h: L('Zasoby', 'Resources'), links: ['FAQ', L('Słownik wskaźników', 'Indicator glossary'), L('Changelog', 'Changelog'), 'Telegram'] },
      { h: L('Prawne', 'Legal'), links: [L('Zastrzeżenie', 'Disclaimer'), L('Prywatność', 'Privacy'), L('Regulamin', 'Terms')] },
    ];
    return (
      <footer style={{ borderTop: '1px solid var(--line)', paddingTop: 'clamp(48px,6vw,80px)', paddingBottom: 40, background: 'linear-gradient(180deg, transparent, rgba(103,232,249,0.03))' }}>
        <div className="nadir-container">
          <div className="footer-grid">
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <img src="../../assets/logo.svg" alt="" style={{ width: 34, height: 34, filter: 'drop-shadow(0 0 8px var(--gold-glow))' }} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>BTC Smart Investor</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Terminal</span>
                </span>
              </div>
              <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {L('Terminal analityczny do prognozowania dołka cyklu Bitcoina. Czytaj cykl, chroń sygnał.',
                   'An analytical terminal for forecasting the Bitcoin cycle bottom. Read the cycle, protect the signal.')}
              </p>
              <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--live)', boxShadow: '0 0 8px var(--live)' }} />
                {L('Wszystkie systemy operacyjne', 'All systems operational')}
              </div>
            </div>
            <div className="footer-cols">
              {cols.map((c, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>{c.h}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {c.links.map((l, j) => (
                      <li key={j}><a href="#" style={{ fontSize: 13.5, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color var(--dur)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ice-400)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'clamp(40px,5vw,64px)', paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>© 2026 BTC Smart Investor Terminal · btc-dash.64bit.site</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', maxWidth: 540, textAlign: 'right', lineHeight: 1.5 }}>
              {L('Narzędzie edukacyjne i informacyjne. Nie stanowi rekomendacji inwestycyjnej ani porady finansowej.',
                 'An educational and informational tool. Not investment advice or a financial recommendation.')}
            </span>
          </div>
        </div>
      </footer>
    );
  }
  window.Footer = Footer;
})();

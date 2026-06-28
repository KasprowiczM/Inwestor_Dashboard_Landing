/* BTC Smart Investor Terminal landing — indicators & data sources (7 signal families) */
(function () {
  const { StatusChip } = window.NADIRDesignSystem_54e725;
  const SectionHead = window.SectionHead;
  const I = window.NADIR_ICONS;
  const { FAMILIES } = window.NADIR_CONTENT;

  function Families({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    const totalIndicators = 21, totalSources = 6;
    return (
      <section id="signals" style={{ paddingBlock: 'var(--section-y)', position: 'relative' }}>
        <div className="nadir-container">
          <SectionHead align="center"
            eyebrow={L('Sygnały i źródła danych', 'Signals & data sources')}
            title={L('Siedem rodzin sygnałów. Jedna decyzja.', 'Seven signal families. One decision.')}
            sub={L('Strategia czyta dane historyczne i cykle, okna czasowe, procenty składane, prawdopodobieństwo i ryzyko, bieżący rynek, sentyment oraz ruchy wielorybów i ETF. Plan Smart pokazuje rodziny i liczby — Investor odkrywa wskaźniki w środku.',
                   'The strategy reads historical data and cycles, time windows, compounded percentages, probability and risk, the live market, sentiment, and whale & ETF moves. Smart shows the families and counts — Investor reveals the indicators inside.')}
          />

          <div className="families-grid" style={{ marginTop: 52 }}>
            {FAMILIES.map((f) => (
              <div key={f.key} style={{
                position: 'relative', display: 'flex', flexDirection: 'column', gap: 12,
                padding: 22, borderRadius: 'var(--radius-lg)',
                background: 'var(--grad-glass), var(--bg-glass)', border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-card)', transition: 'border-color var(--dur), transform var(--dur)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--line-strong)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.03)', border: `1px solid ${f.tone}40`, color: f.tone, boxShadow: `0 0 16px ${f.tone}22` }}>
                    {(I[f.icon] || I.activity)({ size: 19 })}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                    {String(f.count).padStart(2, '0')} {L('sygn.', 'sig.')}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>{L(f.pl, f.en)}</div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{L(f.plD, f.enD)}</p>
              </div>
            ))}

            {/* summary tile */}
            <div style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14,
              padding: 24, borderRadius: 'var(--radius-lg)',
              background: 'var(--grad-depth), var(--grad-glass), var(--bg-glass)',
              border: '1px solid var(--line-ice)', boxShadow: 'var(--shadow-card), var(--glow-ice)',
            }}>
              <StatusChip tone="ice" size="sm">{L('Konfluencja', 'Confluence')}</StatusChip>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--ice-400)', lineHeight: 1 }}>{totalIndicators}</span>
                <span style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{L('wskaźników z', 'indicators from')} {totalSources} {L('źródeł danych', 'data sources')}</span>
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
                {L('Ważone, znormalizowane i sprowadzone do jednego Bottom Score. Bez wzorów po stronie przeglądarki.',
                   'Weighted, normalized and collapsed into one Bottom Score. No formulas in the browser.')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.Families = Families;
})();

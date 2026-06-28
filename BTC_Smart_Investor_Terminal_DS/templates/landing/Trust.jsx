/* BTC Smart Investor Terminal landing — trust & authority (backtests, sources, member placeholders) */
(function () {
  const { StatusChip } = window.NADIRDesignSystem_54e725;
  const SectionHead = window.SectionHead;
  const I = window.NADIR_ICONS;

  const stripe = 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 8px, rgba(255,255,255,0.015) 8px 16px)';

  function Trust({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    const stats = [
      { v: '2018', plL: 'dno cyklu oznaczone', enL: 'cycle bottom flagged', tone: 'var(--signal-accumulate)' },
      { v: '2022', plL: 'dno cyklu oznaczone', enL: 'cycle bottom flagged', tone: 'var(--signal-accumulate)' },
      { v: '−58.2%', plL: 'średni drawdown w strefie', enL: 'avg drawdown in zone', tone: 'var(--signal-aggressive)' },
      { v: '3×', plL: 'odświeżanie / dobę', enL: 'refresh / day', tone: 'var(--ice-400)' },
    ];
    const sources = ['BGeometrics', 'alternative.me', 'FRED', 'Binance', 'Kraken', 'CoinGecko'];

    return (
      <section id="trust" style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="nadir-container">
          <SectionHead
            eyebrow={L('Zaufanie i autorytet', 'Trust & authority')}
            title={L('Sprawdzone na dwóch dnach cyklu.', 'Backtested on two cycle bottoms.')}
            sub={L('Progi kalibrowano na dołkach z 2018 i 2022 roku. Liczby poniżej są poglądowe — narzędzie wskazuje reżim strefy, nie obiecuje zysków.',
                   'Thresholds were calibrated on the 2018 and 2022 bottoms. The figures below are illustrative — the tool indicates a zone regime, it does not promise returns.')}
          />

          {/* backtest stat band */}
          <div className="trust-stats" style={{ marginTop: 44 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '20px 22px', borderRadius: 'var(--radius-lg)', background: 'var(--grad-glass), var(--bg-glass)', border: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: s.tone, lineHeight: 1 }}>{s.v}</div>
                <div style={{ marginTop: 8, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.4 }}>{L(s.plL, s.enL)}</div>
              </div>
            ))}
          </div>

          {/* member testimonial placeholders + data sources */}
          <div className="trust-lower" style={{ marginTop: 18 }}>
            {[0, 1].map((i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 26, borderRadius: 'var(--radius-lg)', background: 'var(--grad-glass), var(--bg-glass)', border: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', gap: 6, color: 'var(--gold-300)' }}>
                  {[0,1,2,3,4].map((k) => <span key={k} style={{ fontSize: 14 }}>★</span>)}
                </div>
                <div style={{ height: 52, borderRadius: 'var(--radius-sm)', background: stripe, border: '1px dashed var(--line-strong)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--text-faint)' }}>
                  {L('// cytat członka', '// member quote')}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: stripe, border: '1px dashed var(--line-strong)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-secondary)' }}>{L('Członek terminala', 'Terminal member')}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>{L('// rola · zaproszony', '// role · invited')}</div>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, padding: 26, borderRadius: 'var(--radius-lg)', background: 'var(--grad-glass), var(--bg-glass)', border: '1px solid var(--line)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--ice-400)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {I.shield({ size: 15 })} {L('Zasilane danymi z', 'Powered by data from')}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sources.map((s) => (
                  <span key={s} style={{ padding: '6px 11px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line)', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)' }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
                {L('Redundancja źródeł i dead-man\u2019s switch — alert, gdy snapshot jest starszy niż 18 godzin.',
                   'Source redundancy and a dead-man\u2019s switch — an alert if the snapshot is older than 18 hours.')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.Trust = Trust;
})();

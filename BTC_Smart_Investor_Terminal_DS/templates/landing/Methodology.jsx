/* NADIR landing — methodology / 21 indicators */
(function () {
  const SectionHead = window.SectionHead;
  const { CAT, INDICATORS } = window.NADIR_CONTENT;

  function Methodology({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    const order = ['fundament', 'core', 'auxiliary', 'confirmation', 'macro'];
    const byCat = order.map((k) => ({ key: k, meta: CAT[k], items: INDICATORS.filter((x) => x.cat === k) }));

    return (
      <section id="method" style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="nadir-container">
          <div className="method-top">
            <SectionHead
              eyebrow={L('Metodologia', 'Methodology')}
              title={L('21 wskaźników. Pięć rodzin. Jeden werdykt.', '21 indicators. Five families. One verdict.')}
              sub={L('Każdy wskaźnik jest znormalizowany, zważony i sprawdzony pod kątem kompletności. Progi kalibrowano na dołkach z 2018 i 2022 roku.',
                     'Every indicator is normalized, weighted and checked for completeness. Thresholds were calibrated on the 2018 and 2022 cycle bottoms.')}
            />
            <div className="method-legend">
              {order.map((k) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 9, height: 9, borderRadius: 2, background: CAT[k].color, boxShadow: `0 0 8px ${CAT[k].color}` }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>{L(CAT[k].pl, CAT[k].en)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="method-grid" style={{ marginTop: 48 }}>
            {byCat.map(({ key, meta, items }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, paddingBottom: 12, borderBottom: `1px solid var(--line)` }}>
                  <span style={{ width: 9, height: 9, borderRadius: 2, background: meta.color, boxShadow: `0 0 10px ${meta.color}` }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: meta.color }}>{L(meta.pl, meta.en)}</span>
                  <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>{String(items.length).padStart(2, '0')}</span>
                </div>
                {items.map((it, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px',
                    borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.018)',
                    border: '1px solid var(--line-faint)', fontSize: 13.5, color: 'var(--text-secondary)',
                    transition: 'border-color var(--dur), background var(--dur)',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = meta.color + '55'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line-faint)'; e.currentTarget.style.background = 'rgba(255,255,255,0.018)'; }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: meta.color, flexShrink: 0 }} />
                    {L(it.pl, it.en)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p style={{ marginTop: 30, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', lineHeight: 1.6, maxWidth: 720 }}>
            {L('* Wskaźniki on-chain w wersji nie-entity-adjusted (BGeometrics). Mogą różnić się od Glassnode. Model służy jako wskaźnik reżimu strefy, nie precyzyjny timer dna.',
               '* On-chain indicators in non-entity-adjusted form (BGeometrics). May differ from Glassnode. The model is a regime-zone indicator, not a precise bottom timer.')}
          </p>
        </div>
      </section>
    );
  }
  window.Methodology = Methodology;
})();

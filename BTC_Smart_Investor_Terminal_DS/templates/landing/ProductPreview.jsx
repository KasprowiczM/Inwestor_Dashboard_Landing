/* NADIR landing — product preview (dashboard mockup) */
(function () {
  const { React } = window;
  const { ScoreRing, KpiStat, StatusChip, Badge, VerdictScale } = window.NADIRDesignSystem_54e725;
  const SectionHead = window.SectionHead;
  const I = window.NADIR_ICONS;

  // tiny sparkline
  function Spark({ points, color }) {
    const w = 220, h = 44;
    const max = Math.max(...points), min = Math.min(...points);
    const d = points.map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
    return (
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{ display: 'block' }}>
        <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 5px ${color}66)` }} />
      </svg>
    );
  }

  const SERIES = [
    { catColor: 'var(--category-core)', plL: 'MVRV Z-Score', enL: 'MVRV Z-Score', val: '-0.12', pts: [9,8,7,6,5,4,3,3.4,3,2.6] },
    { catColor: 'var(--category-confirmation)', plL: 'LTH SOPR', enL: 'LTH SOPR', val: '0.97', pts: [3,4,5,4.4,5.6,7,6.4,7.6,8.4,9] },
    { catColor: 'var(--category-core)', plL: 'NUPL', enL: 'NUPL', val: '-0.08', pts: [9,8.4,7,6.4,5,4.4,4,3.6,3.2,3] },
  ];

  function ProductPreview({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    return (
      <section style={{ paddingBlock: 'var(--section-y)', position: 'relative' }}>
        <div className="nadir-container">
          <SectionHead align="center"
            eyebrow={L('Wewnątrz terminala', 'Inside the terminal')}
            title={L('Jeden ekran. Cała strategia.', 'One screen. The whole strategy.')}
            sub={L('Werdykt, konfluencja i plan DCA — bez przełączania kart. To zobaczysz po zalogowaniu.',
                   'Verdict, confluence and DCA plan — without switching tabs. This is what you see after sign-in.')}
          />

          {/* browser frame */}
          <div style={{
            marginTop: 48, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            border: '1px solid var(--line-strong)', boxShadow: 'var(--shadow-raise), var(--glow-ice)',
            background: 'var(--bg-base)',
          }}>
            {/* url bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px', borderBottom: '1px solid var(--line)', background: 'var(--bg-surface)' }}>
              <div style={{ display: 'flex', gap: 7 }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }} />)}
              </div>
              <div style={{ flex: 1, maxWidth: 380, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-inset)', border: '1px solid var(--line)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                {I.lock({ size: 12 })} btc-dash.64bit.site
              </div>
            </div>

            {/* dashboard body */}
            <div style={{ padding: 'clamp(16px, 2.4vw, 28px)' }}>
              {/* command header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '12px 16px', borderRadius: 'var(--radius-lg)', background: 'var(--bg-glass-strong)', border: '1px solid var(--line)', marginBottom: 18, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src="../../assets/logo.svg" alt="" style={{ width: 30, height: 30 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>BTC Smart Investor Terminal</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{L('Research cockpit · konfluencja sygnałów', 'Research cockpit · signal confluence')}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <Badge tone="live">{L('System świeży', 'System fresh')}</Badge>
                  <StatusChip tone="ice" size="sm">{L('Strefa DCA', 'DCA zone')}</StatusChip>
                </div>
              </div>

              {/* hero verdict row */}
              <div className="preview-hero">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,34px)', padding: 'clamp(18px,2.4vw,28px)', borderRadius: 'var(--radius-lg)', background: 'var(--grad-depth), var(--grad-glass), var(--bg-glass)', border: '1px solid var(--line)', flexWrap: 'wrap' }}>
                  <ScoreRing score={72} size={150} label={L('Bottom Score', 'Bottom Score')} />
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <div className="nadir-eyebrow">{L('Werdykt strategii', 'Strategy verdict')}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.6vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: '10px 0 14px' }}>
                      {L('Strefa akumulacji', 'Accumulation zone')}
                    </div>
                    <VerdictScale score={72} showLabels={false} />
                    <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 10 }}>
                      <KpiStat label={L('BTC spot', 'BTC spot')} value="$61,480" />
                      <KpiStat label={L('Drawdown', 'Drawdown')} value="-58.2%" accent="var(--signal-aggressive)" />
                      <KpiStat label="Confidence" value="0.86" accent="var(--ice-400)" />
                    </div>
                  </div>
                </div>

                {/* indicator strip */}
                <div className="preview-indicators">
                  {SERIES.map((s, i) => (
                    <div key={i} style={{ padding: 16, borderRadius: 'var(--radius-md)', background: 'var(--grad-glass), var(--bg-card)', border: '1px solid var(--line)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>{L(s.plL, s.enL)}</span>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.catColor, boxShadow: `0 0 8px ${s.catColor}` }} />
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{s.val}</div>
                      <Spark points={s.pts} color={s.catColor} />
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
  window.ProductPreview = ProductPreview;
})();

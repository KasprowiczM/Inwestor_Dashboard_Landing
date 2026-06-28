/* BTC Smart Investor Terminal landing — pricing Smart vs Investor */
(function () {
  const { Button, StatusChip } = window.NADIRDesignSystem_54e725;
  const SectionHead = window.SectionHead;
  const I = window.NADIR_ICONS;
  const { PLANS } = window.NADIR_CONTENT;

  function Pricing({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    return (
      <section id="pricing" style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="nadir-container">
          <SectionHead align="center"
            eyebrow={L('Plany', 'Plans')}
            title={L('Dwa poziomy. Oba na zaproszenie.', 'Two tiers. Both invite-only.')}
            sub={L('Smart pokazuje status dna i zagregowane sygnały. Investor odkrywa cały terminal. Chronione szczegóły są redagowane po stronie serwera — nigdy nie trafiają do przeglądarki.',
                   'Smart shows the bottom status and aggregated signals. Investor reveals the whole terminal. Protected detail is redacted server-side — it never reaches the browser.')}
          />

          <div className="pricing-grid" style={{ marginTop: 52 }}>
            {PLANS.map((p) => {
              const gold = p.accent === 'gold';
              return (
                <div key={p.key} style={{
                  position: 'relative', display: 'flex', flexDirection: 'column',
                  padding: 'clamp(24px, 3vw, 36px)', borderRadius: 'var(--radius-xl)',
                  background: gold ? 'var(--grad-heat), var(--grad-glass), var(--bg-glass)' : 'var(--grad-glass), var(--bg-glass)',
                  border: `1px solid ${gold ? 'var(--line-gold)' : 'var(--line)'}`,
                  boxShadow: gold ? 'var(--shadow-raise), var(--glow-gold)' : 'var(--shadow-card)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, letterSpacing: '0.04em', color: gold ? 'var(--gold-300)' : 'var(--text-primary)' }}>{p.name}</span>
                    <StatusChip tone={gold ? 'gold' : 'ice'} size="sm">{L(p.tag, p.tagEn)}</StatusChip>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>{L(p.plPrice, p.enPrice)}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>· {L(p.plPer, p.enPer)}</span>
                  </div>
                  <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', minHeight: 44 }}>{L(p.plDesc, p.enDesc)}</p>

                  <div aria-hidden style={{ height: 1, background: 'var(--line)', margin: '22px 0' }} />

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                    {p.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 11, fontSize: 13.8, lineHeight: 1.45, color: f.on ? 'var(--text-secondary)' : 'var(--text-faint)' }}>
                        <span style={{ flexShrink: 0, marginTop: 1, color: f.on ? (gold ? 'var(--gold-300)' : 'var(--ice-400)') : 'var(--text-faint)' }}>
                          {f.on ? I.check({ size: 16 }) : I.x({ size: 16 })}
                        </span>
                        <span style={{ textDecoration: f.on ? 'none' : 'line-through', textDecorationColor: 'var(--line-strong)' }}>{L(f.pl, f.en)}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 28 }}>
                    <Button variant={gold ? 'gold' : 'primary'} size="lg" fullWidth href="#invite" iconRight={I.arrow({ size: 16 })}>
                      {gold ? L('Poproś o dostęp Investor', 'Request Investor access') : L('Poproś o zaproszenie Smart', 'Request Smart invite')}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  window.Pricing = Pricing;
})();

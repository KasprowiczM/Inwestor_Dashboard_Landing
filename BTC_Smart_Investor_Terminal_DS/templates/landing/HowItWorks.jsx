/* NADIR landing — how it works (steps + Bottom Score bands) */
(function () {
  const { VerdictScale, StatusChip } = window.NADIRDesignSystem_54e725;
  const SectionHead = window.SectionHead;
  const { STEPS, BANDS } = window.NADIR_CONTENT;

  function HowItWorks({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    return (
      <section id="how" style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="nadir-container">
          <SectionHead
            eyebrow={L('Jak to działa', 'How it works')}
            title={L('Od chaosu danych do jednej decyzji.', 'From data chaos to one decision.')}
            sub={L('Nie kolejny dashboard z setką wykresów. BTC Smart Investor Terminal sprowadza cykl do trzech kroków.',
                   'Not another dashboard with a hundred charts. BTC Smart Investor Terminal reduces the cycle to three steps.')}
          />

          {/* steps */}
          <div className="steps-grid" style={{ marginTop: 56 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{
                position: 'relative', padding: 26, borderRadius: 'var(--radius-lg)',
                background: 'var(--grad-glass), var(--bg-glass)', border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--ice-400)',
                  letterSpacing: '0.1em',
                }}>{s.n}</div>
                <div aria-hidden style={{ height: 1, background: 'var(--line)', margin: '16px 0 18px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>
                  {L(s.plT, s.enT)}
                </h3>
                <p style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {L(s.plD, s.enD)}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Score band explainer */}
          <div className="score-explainer" style={{ marginTop: 28 }}>
            <div style={{
              padding: 'clamp(24px, 3vw, 40px)', borderRadius: 'var(--radius-xl)',
              background: 'var(--grad-depth), var(--grad-glass), var(--bg-glass)',
              border: '1px solid var(--line)', boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 26 }}>
                <div>
                  <div className="nadir-eyebrow">{L('Bottom Score · 0–100', 'Bottom Score · 0–100')}</div>
                  <h3 style={{ marginTop: 12, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,2.4vw,2rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                    {L('Kontrariański termometr cyklu', 'A contrarian cycle thermometer')}
                  </h3>
                </div>
                <p style={{ maxWidth: 340, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  {L('Zimny odczyt = głębszy dołek = większa okazja. Im chłodniej, tym bliżej dna cyklu.',
                     'A cold read = a deeper bottom = a bigger opportunity. The colder it gets, the closer the cycle floor.')}
                </p>
              </div>

              <VerdictScale score={72} />

              <div className="bands-grid" style={{ marginTop: 30 }}>
                {BANDS.map((b, i) => (
                  <div key={i} style={{ padding: 16, borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.018)', border: '1px solid var(--line-faint)' }}>
                    <StatusChip tone={b.tone} size="sm">{b.range}</StatusChip>
                    <div style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{L(b.pl, b.en)}</div>
                    <div style={{ marginTop: 5, fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>{L(b.plD, b.enD)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.HowItWorks = HowItWorks;
})();

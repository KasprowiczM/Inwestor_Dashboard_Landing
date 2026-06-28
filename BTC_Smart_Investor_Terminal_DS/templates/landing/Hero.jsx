/* NADIR landing — hero */
(function () {
  const { Button, ScoreRing, Badge } = window.NADIRDesignSystem_54e725;
  const I = window.NADIR_ICONS;

  function Hero({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    return (
      <section id="top" style={{ position: 'relative', paddingTop: 48, paddingBottom: 'var(--section-y)', overflow: 'hidden' }}>
        {/* depth wash */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(120% 80% at 70% -5%, rgba(103,232,249,0.10), transparent 45%)',
          pointerEvents: 'none',
        }} />
        <div className="nadir-container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          {/* left */}
          <div className="hero-copy">
            <span className="nadir-eyebrow" style={{ marginBottom: 22 }}>
              {I.lock({ size: 13 })} {L('Dostęp na zaproszenie · portal zamknięty', 'Invite-only · closed terminal')}
            </span>
            <h1 style={{
              fontSize: 'var(--fs-hero)', fontWeight: 800, letterSpacing: '-0.045em',
              lineHeight: 0.95, color: 'var(--text-primary)', margin: '0 0 6px',
            }}>
              {L('Znajdź', 'Find the')} <span style={{ color: 'var(--ice-400)', textShadow: '0 0 40px var(--ice-glow)' }}>{L('dołek', 'floor')}</span>.<br />
              {L('Zanim zrobi to tłum.', 'Before the crowd.')}
            </h1>
            <p style={{
              maxWidth: 520, marginTop: 22, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
              lineHeight: 1.65, color: 'var(--text-secondary)',
            }}>
              {L(
                'Terminal analityczny, który łączy 21 wskaźników on-chain, cyklicznych i sentymentu w jeden Bottom Score — i mówi wprost, czy jesteś w opłacalnej strefie akumulacji BTC.',
                'An analytical terminal that fuses 21 on-chain, cycle and sentiment indicators into one Bottom Score — and tells you plainly whether you are in a worthwhile BTC accumulation zone.'
              )}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
              <Button variant="primary" size="lg" href="#invite" iconRight={I.arrow({ size: 17 })}>
                {L('Poproś o zaproszenie', 'Request invite')}
              </Button>
              <Button variant="secondary" size="lg" href="#method">
                {L('Zobacz metodologię', 'See methodology')}
              </Button>
            </div>
            <div className="hero-stats" style={{ marginTop: 44 }}>
              {[
                { v: '21', pl: 'wskaźników w konfluencji', en: 'indicators in confluence' },
                { v: '2018 · 2022', pl: 'cykle backtestowane', en: 'cycles backtested' },
                { v: '3×', pl: 'aktualizacja / dobę', en: 'updates / day' },
              ].map((s, i) => (
                <div key={i} style={{ paddingRight: 22, borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.2rem,2vw,1.7rem)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{s.v}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 5, maxWidth: 130, lineHeight: 1.35 }}>{L(s.pl, s.en)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right — orb + live score */}
          <div className="hero-visual">
            <div style={{
              position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
              border: '1px solid var(--line-ice)', boxShadow: 'var(--shadow-raise), var(--glow-ice)',
              aspectRatio: '1 / 1',
            }}>
              <img src="../../assets/orb.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.95) contrast(1.06)' }} />
              <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(4,6,10,0.55))' }} />
              {/* live chip */}
              <div style={{ position: 'absolute', top: 16, left: 16 }}>
                <Badge tone="live">{L('Dane na żywo', 'Live data')}</Badge>
              </div>
              {/* floating score panel */}
              <div style={{
                position: 'absolute', right: 16, bottom: 16, left: 16,
                display: 'flex', alignItems: 'center', gap: 18,
                padding: 16, borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-glass-strong)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--line-strong)',
              }}>
                <ScoreRing score={72} size={104} stroke={8} label={null} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ice-400)' }}>
                    {L('Werdykt', 'Verdict')}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 6px', letterSpacing: '-0.02em' }}>
                    {L('Strefa akumulacji', 'Accumulation zone')}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>
                    BTC $61,480 · <span style={{ color: 'var(--signal-aggressive)' }}>-58.2%</span> {L('od ATH', 'from ATH')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.Hero = Hero;
})();

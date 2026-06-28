/* NADIR landing — request invite / waitlist */
(function () {
  const { useState } = window.React;
  const { Button, Input, Eyebrow } = window.NADIRDesignSystem_54e725;
  const I = window.NADIR_ICONS;

  function RequestInvite({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState('');

    return (
      <section id="invite" style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="nadir-container">
          <div style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 'var(--radius-2xl)', border: '1px solid var(--line-ice)',
            background: 'var(--grad-depth), var(--grad-glass), var(--bg-glass)',
            boxShadow: 'var(--shadow-raise), var(--glow-ice)',
            padding: 'clamp(32px, 5vw, 72px)',
          }}>
            {/* sonar rings */}
            <div aria-hidden style={{ position: 'absolute', top: '-40%', right: '-10%', width: 420, height: 420, borderRadius: '50%', border: '1px solid var(--line-ice)', opacity: 0.35 }} />
            <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '4%', width: 240, height: 240, borderRadius: '50%', border: '1px solid var(--line-ice)', opacity: 0.25 }} />

            <div className="invite-grid" style={{ position: 'relative', zIndex: 1 }}>
              <div>
                <Eyebrow>{L('Dostęp na zaproszenie', 'Invite-only access')}</Eyebrow>
                <h2 style={{ marginTop: 18, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-4xl)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.02, color: 'var(--text-primary)' }}>
                  {L('Dołącz do zamkniętego kręgu.', 'Join the closed circle.')}
                </h2>
                <p style={{ marginTop: 18, maxWidth: 440, fontSize: 'clamp(1rem,1.3vw,1.12rem)', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {L('Zostaw e-mail, a gdy zwolni się miejsce, wyślemy Ci zaproszenie. Bez spamu — tylko link do rejestracji.',
                     'Leave your email and we will send an invite when a seat opens. No spam — just a registration link.')}
                </p>
                <div style={{ display: 'flex', gap: 18, marginTop: 26, flexWrap: 'wrap' }}>
                  {[
                    { icon: I.shield, pl: 'Dane redagowane po stronie serwera', en: 'Server-side redacted data' },
                    { icon: I.bolt, pl: 'Alerty Telegram w planie Investor', en: 'Telegram alerts on Investor' },
                  ].map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5, color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--ice-400)' }}>{b.icon({ size: 16 })}</span>{L(b.pl, b.en)}
                    </div>
                  ))}
                </div>
              </div>

              {/* form card */}
              <div style={{ padding: 'clamp(20px,2.4vw,28px)', borderRadius: 'var(--radius-xl)', background: 'var(--bg-glass-strong)', border: '1px solid var(--line-strong)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                {sent ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, padding: '24px 8px' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'rgba(103,232,249,0.12)', border: '1px solid var(--line-ice)', color: 'var(--ice-400)' }}>
                      {I.check({ size: 24 })}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>{L('Jesteś na liście.', "You're on the list.")}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 280, lineHeight: 1.55 }}>
                      {L('Damy znać, gdy zwolni się miejsce. Sprawdź skrzynkę — czasem zaproszenia trafiają do spamu.',
                         'We will reach out when a seat opens. Check your inbox — invites sometimes land in spam.')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Input label={L('E-mail', 'Email')} type="email" placeholder={L('ty@fundusz.pl', 'you@fund.com')} iconLeft={I.mail({ size: 16 })} value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label={L('Imię (opcjonalnie)', 'Name (optional)')} type="text" placeholder={L('Jak się do Ciebie zwracać', 'How to address you')} />
                    <Input label={L('Kod polecającego (opcjonalnie)', 'Referral code (optional)')} type="text" placeholder="BTC-XXXX" />
                    <Button variant="primary" size="lg" fullWidth type="submit" iconRight={I.arrow({ size: 16 })}>
                      {L('Wyślij prośbę', 'Send request')}
                    </Button>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', textAlign: 'center', lineHeight: 1.5 }}>
                      {L('Zapisując się, akceptujesz że BTC Smart Investor Terminal to narzędzie edukacyjne, nie porada inwestycyjna.',
                         'By joining you accept that BTC Smart Investor Terminal is an educational tool, not financial advice.')}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.RequestInvite = RequestInvite;
})();

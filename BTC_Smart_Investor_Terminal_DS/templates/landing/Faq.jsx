/* NADIR landing — FAQ accordion */
(function () {
  const { useState } = window.React;
  const SectionHead = window.SectionHead;
  const I = window.NADIR_ICONS;
  const { FAQ } = window.NADIR_CONTENT;

  function Faq({ lang }) {
    const L = (pl, en) => window.L(lang, pl, en);
    const [open, setOpen] = useState(0);
    return (
      <section id="faq" style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="nadir-container faq-layout">
          <div className="faq-head">
            <SectionHead
              eyebrow={L('Pytania', 'Questions')}
              title={L('Zanim poprosisz o zaproszenie.', 'Before you request an invite.')}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQ.map((q, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  borderRadius: 'var(--radius-lg)', border: `1px solid ${isOpen ? 'var(--line-ice)' : 'var(--line)'}`,
                  background: 'var(--grad-glass), var(--bg-glass)', overflow: 'hidden',
                  transition: 'border-color var(--dur)',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    padding: '20px 22px', border: 0, background: 'transparent', cursor: 'pointer', textAlign: 'left',
                  }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem,1.4vw,1.18rem)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
                      {L(q.pl, q.en)}
                    </span>
                    <span style={{ flexShrink: 0, color: isOpen ? 'var(--ice-400)' : 'var(--text-muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur), color var(--dur)' }}>
                      {I.chevron({ size: 18 })}
                    </span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 240 : 0, overflow: 'hidden', transition: 'max-height var(--dur-slow) var(--ease-out)' }}>
                    <p style={{ padding: '0 22px 22px', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 620 }}>
                      {L(q.plA, q.enA)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  window.Faq = Faq;
})();

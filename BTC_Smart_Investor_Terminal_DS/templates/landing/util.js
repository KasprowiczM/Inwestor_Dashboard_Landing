/* NADIR landing — shared section header */
(function () {
  const { Eyebrow } = window.NADIRDesignSystem_54e725;
  function SectionHead({ eyebrow, title, sub, align = 'left', max = 620 }) {
    return (
      <div style={{ textAlign: align, maxWidth: align === 'center' ? max : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
        {eyebrow && <div style={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}><Eyebrow>{eyebrow}</Eyebrow></div>}
        <h2 style={{
          margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'var(--fs-4xl)', letterSpacing: '-0.035em', lineHeight: 1.04, color: 'var(--text-primary)',
        }}>{title}</h2>
        {sub && <p style={{
          margin: '16px 0 0', fontSize: 'clamp(1rem,1.2vw,1.1rem)', lineHeight: 1.6, color: 'var(--text-secondary)',
          maxWidth: align === 'center' ? max : 560,
        }}>{sub}</p>}
      </div>
    );
  }
  window.SectionHead = SectionHead;
})();

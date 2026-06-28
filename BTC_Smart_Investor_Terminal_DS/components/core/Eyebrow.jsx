import React from 'react';

/** Mono eyebrow / kicker with a glowing signal dot. The terminal's section voice. */
export function Eyebrow({ children, color = 'var(--ice-400)', prefix = '//', style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-mono-eyebrow)',
        fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
        color, ...style,
      }}
      {...rest}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }} />
      {prefix && <span style={{ opacity: 0.55 }}>{prefix}</span>}
      {children}
    </span>
  );
}

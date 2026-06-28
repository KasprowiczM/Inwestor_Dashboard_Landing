import React from 'react';

/** Mono KPI tile — label, big tabular value, optional sub-line and accent. */
export function KpiStat({
  label,
  value,
  unit = null,
  sub = null,
  accent = 'var(--text-primary)',
  align = 'left',
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        minWidth: 0, padding: '14px 16px',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-md)',
        background: 'var(--grad-glass), var(--bg-glass)',
        boxShadow: 'var(--shadow-layer)',
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
        fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700,
        letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>{label}</div>
      <div style={{
        marginTop: 8, fontFamily: 'var(--font-mono)', fontWeight: 800,
        fontSize: 'clamp(1.1rem, 1.6vw, 1.55rem)', lineHeight: 1.05,
        color: accent, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
      }}>
        {value}
        {unit && <span style={{ fontSize: '0.6em', color: 'var(--text-muted)', marginLeft: 4 }}>{unit}</span>}
      </div>
      {sub && <div style={{ marginTop: 6, fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4 }}>{sub}</div>}
    </div>
  );
}

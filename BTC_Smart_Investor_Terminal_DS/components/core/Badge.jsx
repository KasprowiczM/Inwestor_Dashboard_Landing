import React from 'react';

/**
 * Data-status pill — live / stale / missing data freshness, plus neutral tones.
 * Mirrors the dashboard's data quality badges.
 */
export function Badge({ children, tone = 'neutral', dot = true, style = {}, ...rest }) {
  const tones = {
    live:    { c: 'var(--live)',    bg: 'rgba(52,211,153,0.12)',  bd: 'rgba(52,211,153,0.28)' },
    stale:   { c: 'var(--stale)',   bg: 'rgba(245,158,11,0.12)',  bd: 'rgba(245,158,11,0.28)' },
    missing: { c: 'var(--missing)', bg: 'rgba(239,68,68,0.12)',   bd: 'rgba(239,68,68,0.28)' },
    ice:     { c: 'var(--ice-400)', bg: 'rgba(103,232,249,0.10)', bd: 'rgba(103,232,249,0.28)' },
    gold:    { c: 'var(--gold-300)',bg: 'rgba(247,199,107,0.10)', bd: 'rgba(247,199,107,0.30)' },
    neutral: { c: 'var(--text-secondary)', bg: 'rgba(255,255,255,0.05)', bd: 'var(--line-strong)' },
  }[tone] || {};

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: dot ? '3px 10px 3px 8px' : '3px 10px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: tones.c, background: tones.bg, border: `1px solid ${tones.bd}`,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: tones.c,
          boxShadow: `0 0 8px ${tones.c}`,
        }} />
      )}
      {children}
    </span>
  );
}

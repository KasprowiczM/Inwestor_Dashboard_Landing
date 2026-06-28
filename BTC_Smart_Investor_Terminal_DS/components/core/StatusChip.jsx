import React from 'react';

/**
 * Verdict / status chip — outlined capsule echoing the strategy's contrarian palette.
 * Use for verdict labels, zone states, plan tiers.
 */
export function StatusChip({ children, tone = 'ice', size = 'md', style = {}, ...rest }) {
  const tones = {
    ice:     { c: '#67E8F9', bg: 'rgba(103,232,249,0.09)', bd: 'rgba(103,232,249,0.30)' },
    emerald: { c: '#34D399', bg: 'rgba(52,211,153,0.09)',  bd: 'rgba(52,211,153,0.28)' },
    amber:   { c: '#FBBF24', bg: 'rgba(251,191,36,0.09)',  bd: 'rgba(251,191,36,0.30)' },
    red:     { c: '#F87171', bg: 'rgba(248,113,113,0.09)', bd: 'rgba(248,113,113,0.28)' },
    slate:   { c: '#94A3B8', bg: 'rgba(148,163,184,0.08)', bd: 'rgba(148,163,184,0.26)' },
    gold:    { c: '#F7C76B', bg: 'rgba(247,199,107,0.09)', bd: 'rgba(247,199,107,0.32)' },
  }[tone] || {};

  const s = size === 'sm'
    ? { minHeight: 22, padding: '2px 9px', fontSize: 10 }
    : { minHeight: 28, padding: '4px 12px', fontSize: 11.5 };

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        borderRadius: 'var(--radius-pill)',
        fontWeight: 800, lineHeight: 1, letterSpacing: '0.06em', textTransform: 'uppercase',
        fontFamily: 'var(--font-mono)',
        color: tones.c, background: tones.bg, border: `1px solid ${tones.bd}`,
        ...s, ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

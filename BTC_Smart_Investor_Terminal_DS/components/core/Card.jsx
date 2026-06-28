import React from 'react';

/**
 * Glass surface card. Optional eyebrow + title header; optional ice/gold edge accent.
 */
export function Card({
  children,
  eyebrow = null,
  title = null,
  accent = null,        // null | 'ice' | 'gold'
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const accentEdge = accent === 'ice'
    ? { borderColor: 'var(--line-ice)', boxShadow: 'var(--shadow-card), var(--glow-ice)' }
    : accent === 'gold'
    ? { borderColor: 'var(--line-gold)', boxShadow: 'var(--shadow-card), var(--glow-gold)' }
    : {};

  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--grad-glass), var(--bg-glass)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card), var(--shadow-layer)',
        padding,
        transition: 'transform var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
        ...accentEdge,
        ...style,
      }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'var(--line-strong)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = accent ? accentEdge.borderColor : 'var(--line)';
      } : undefined}
      {...rest}
    >
      {(eyebrow || title) && (
        <div style={{ marginBottom: 14 }}>
          {eyebrow && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ice-400)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ice-400)', boxShadow: '0 0 10px var(--ice-glow)' }} />
              {eyebrow}
            </span>
          )}
          {title && (
            <h3 style={{
              margin: eyebrow ? '10px 0 0' : 0,
              fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700,
              letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.1,
            }}>{title}</h3>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

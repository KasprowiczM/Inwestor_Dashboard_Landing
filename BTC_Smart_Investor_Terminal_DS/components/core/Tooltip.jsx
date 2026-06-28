import React, { useState } from 'react';

/**
 * Hover/focus tooltip for explaining complex metrics. Wraps a trigger; shows a glass bubble.
 * Pair with the `?` helper dot on dashboard KPI labels.
 */
export function Tooltip({
  children,
  content,
  side = 'top',          // 'top' | 'bottom' | 'left' | 'right'
  maxWidth = 220,
  style = {},
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 9 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 9 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 9 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 9 },
  }[side];

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      {show && content && (
        <span role="tooltip" style={{
          position: 'absolute', zIndex: 900, ...pos,
          width: 'max-content', maxWidth, padding: '9px 12px',
          background: 'var(--bg-glass-strong)', border: '1px solid var(--line-strong)',
          borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-raise)',
          backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
          fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 500, lineHeight: 1.5,
          color: 'var(--text-secondary)', textTransform: 'none', letterSpacing: 0, pointerEvents: 'none',
          animation: 'btcTip 0.14s var(--ease-out)',
        }}>
          <style>{'@keyframes btcTip{from{opacity:0}to{opacity:1}}'}</style>
          {content}
        </span>
      )}
    </span>
  );
}

/** Small `?` helper dot — a ready-made tooltip trigger for metric labels. */
export function InfoDot({ size = 14 }) {
  return (
    <span style={{
      display: 'inline-grid', placeItems: 'center', width: size, height: size,
      borderRadius: '50%', border: '1px solid var(--line-strong)', background: 'rgba(255,255,255,0.03)',
      color: 'var(--text-muted)', fontSize: size * 0.64, fontFamily: 'var(--font-mono)', fontWeight: 700,
      cursor: 'help', lineHeight: 1,
    }}>?</span>
  );
}

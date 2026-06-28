import React, { useEffect } from 'react';

const X = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/**
 * Modal dialog / right-side drawer on a dimmed backdrop. Glass surface, ESC + backdrop close.
 * Use for the invite flow, indicator detail, and confirmations.
 */
export function Modal({
  open = false,
  onClose,
  title = null,
  eyebrow = null,
  children = null,
  footer = null,
  width = 520,
  side = null,          // null = centered dialog, 'right' = drawer
  closeOnBackdrop = true,
  style = {},
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  const drawer = side === 'right';

  return (
    <div
      onClick={closeOnBackdrop ? onClose : undefined}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: drawer ? 'stretch' : 'center', justifyContent: drawer ? 'flex-end' : 'center',
        padding: drawer ? 0 : 'clamp(16px, 4vw, 40px)',
        background: 'rgba(2,4,7,0.66)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        animation: 'btcFade 0.18s var(--ease-out)',
      }}
    >
      <style>{'@keyframes btcFade{from{opacity:0}to{opacity:1}}@keyframes btcRise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes btcSlide{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}'}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog" aria-modal="true"
        style={{
          position: 'relative', width: drawer ? 'min(440px, 100%)' : '100%', maxWidth: drawer ? 440 : width,
          maxHeight: drawer ? '100%' : '88vh', display: 'flex', flexDirection: 'column',
          background: 'var(--grad-glass), var(--bg-glass-strong)',
          border: '1px solid var(--line-strong)',
          borderRadius: drawer ? 0 : 'var(--radius-xl)',
          boxShadow: 'var(--shadow-raise)',
          backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
          animation: drawer ? 'btcSlide 0.26s var(--ease-emph)' : 'btcRise 0.24s var(--ease-emph)',
          overflow: 'hidden', ...style,
        }}
      >
        {(title || eyebrow) && (
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '22px 24px 16px' }}>
            <div>
              {eyebrow && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ice-400)', marginBottom: 8 }}>{eyebrow}</div>}
              {title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.15 }}>{title}</h3>}
            </div>
            <button onClick={onClose} aria-label="Close" style={{
              flexShrink: 0, width: 34, height: 34, display: 'grid', placeItems: 'center',
              border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.03)',
              color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all var(--dur)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            ><X /></button>
          </div>
        )}
        <div style={{ padding: title || eyebrow ? '0 24px 24px' : 24, overflowY: 'auto' }}>{children}</div>
        {footer && <div style={{ padding: '16px 24px', borderTop: '1px solid var(--line)', background: 'rgba(255,255,255,0.015)' }}>{footer}</div>}
      </div>
    </div>
  );
}

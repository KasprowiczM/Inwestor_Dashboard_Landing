import React from 'react';

const LockGlyph = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);
const ArrowGlyph = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
  </svg>
);

/**
 * Gated-panel overlay — blurs a teased preview and surfaces the upgrade path.
 * The core "Smart sees the shape, Investor unlocks the detail" pattern.
 */
export function LockOverlay({
  children = null,
  title = 'Investor only',
  note = 'Unlock the full terminal to see this.',
  cta = 'Upgrade to Investor',
  onUpgrade,
  blur = 7,
  minHeight = 160,
  compact = false,
  style = {},
  ...rest
}) {
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight, ...style }} {...rest}>
      {children && (
        <div aria-hidden style={{ filter: `blur(${blur}px) saturate(0.8)`, opacity: 0.5, pointerEvents: 'none', userSelect: 'none', height: '100%' }}>
          {children}
        </div>
      )}
      <div style={{
        position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
        padding: compact ? 16 : 24, textAlign: 'center',
        background: 'radial-gradient(120% 100% at 50% 0%, rgba(247,199,107,0.06), transparent 60%), var(--lock-veil)',
        backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)',
        border: '1px solid var(--lock-border)', borderRadius: 'inherit',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: compact ? 9 : 13, maxWidth: 340 }}>
          <span style={{
            width: compact ? 36 : 46, height: compact ? 36 : 46, display: 'grid', placeItems: 'center',
            borderRadius: '50%', color: 'var(--gold-300)',
            background: 'rgba(247,199,107,0.10)', border: '1px solid var(--line-gold)',
            boxShadow: 'var(--glow-gold)',
          }}><LockGlyph size={compact ? 17 : 21} /></span>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-300)' }}>{title}</div>
            {!compact && note && (
              <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{note}</p>
            )}
          </div>
          {cta && (
            <button onClick={onUpgrade} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: compact ? 36 : 42, padding: compact ? '0 16px' : '0 20px',
              borderRadius: 'var(--radius-md)', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: compact ? 12.5 : 14, fontWeight: 700, letterSpacing: '-0.01em',
              color: 'var(--text-on-gold)', background: 'var(--grad-gold-cta)',
              border: '1px solid rgba(247,199,107,0.6)',
              boxShadow: '0 10px 26px rgba(247,199,107,0.18), inset 0 1px 0 rgba(255,255,255,0.4)',
              transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
            >{cta}<ArrowGlyph size={compact ? 14 : 15} /></button>
          )}
        </div>
      </div>
    </div>
  );
}

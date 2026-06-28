import React from 'react';

/**
 * NADIR Button — primary action is COLD (ice-cyan), gold is reserved for premium/asset moments.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'gold' | 'secondary' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'lg'
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  href = null,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 38, padding: '0 14px', fontSize: 13, radius: 'var(--radius-md)' },
    md: { height: 46, padding: '0 20px', fontSize: 14, radius: 'var(--radius-md)' },
    lg: { height: 56, padding: '0 28px', fontSize: 15.5, radius: 'var(--radius-lg)' },
  }[size];

  const variants = {
    primary: {
      background: 'var(--grad-ice-cta)',
      color: 'var(--text-on-ice)',
      border: '1px solid rgba(103,232,249,0.55)',
      boxShadow: '0 12px 30px rgba(6,182,212,0.22), inset 0 1px 0 rgba(255,255,255,0.35)',
    },
    gold: {
      background: 'var(--grad-gold-cta)',
      color: 'var(--text-on-gold)',
      border: '1px solid rgba(247,199,107,0.6)',
      boxShadow: '0 12px 30px rgba(247,199,107,0.20), inset 0 1px 0 rgba(255,255,255,0.4)',
    },
    secondary: {
      background: 'rgba(255,255,255,0.04)',
      color: 'var(--text-primary)',
      border: '1px solid var(--line-strong)',
      boxShadow: 'var(--shadow-layer)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  }[variant];

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    width: fullWidth ? '100%' : undefined,
    height: sizes.height,
    padding: sizes.padding,
    borderRadius: sizes.radius,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes.fontSize,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur) var(--ease-out), background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    ...variants,
    ...style,
  };

  const hover = (e, on) => {
    if (disabled) return;
    if (variant === 'primary' || variant === 'gold') {
      e.currentTarget.style.transform = on ? 'translateY(-2px)' : 'translateY(0)';
      e.currentTarget.style.filter = on ? 'brightness(1.06)' : 'none';
    } else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = on ? 'var(--line-ice)' : 'var(--line-strong)';
      e.currentTarget.style.background = on ? 'rgba(103,232,249,0.07)' : 'rgba(255,255,255,0.04)';
    } else {
      e.currentTarget.style.color = on ? 'var(--text-primary)' : 'var(--text-secondary)';
      e.currentTarget.style.background = on ? 'rgba(255,255,255,0.05)' : 'transparent';
    }
  };

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href || undefined}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === 'button' ? disabled : undefined}
      style={base}
      onMouseEnter={(e) => hover(e, true)}
      onMouseLeave={(e) => hover(e, false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}

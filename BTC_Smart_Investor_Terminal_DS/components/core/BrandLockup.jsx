import React from 'react';

/** The retained gold Bitcoin mark, inlined & self-contained (no asset path needed). */
function BrandMark({ size = 32, glow = true }) {
  const id = React.useId().replace(/[:]/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true"
      style={glow ? { filter: 'drop-shadow(0 0 8px var(--gold-glow))', flexShrink: 0 } : { flexShrink: 0 }}>
      <defs>
        <linearGradient id={`bm-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7C76B" />
          <stop offset="100%" stopColor="#FF9900" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="44" fill="none" stroke={`url(#bm-${id})`} strokeWidth="3" opacity="0.85" />
      <path transform="translate(10.0229, 9.6958) scale(0.020069)" fill={`url(#bm-${id})`}
        d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z" />
    </svg>
  );
}

/**
 * Brand lockup for BTC Smart Investor Terminal — the gold mark + wordmark.
 * `stack` (two-line, default), `inline` (one line) or `mark` (symbol only).
 */
export function BrandLockup({
  size = 'md',                 // 'sm' | 'md' | 'lg'
  layout = 'stack',            // 'stack' | 'inline' | 'mark'
  tagline = 'Terminal',
  taglineColor = 'var(--text-muted)',
  href = null,
  glow = true,
  style = {},
  ...rest
}) {
  const S = { sm: { m: 26, w1: 14, w2: 8.5 }, md: { m: 32, w1: 17, w2: 9.5 }, lg: { m: 42, w1: 22, w2: 11 } }[size];
  const Tag = href ? 'a' : 'div';
  const word1 = 'BTC Smart Investor';
  const fullName = 'BTC Smart Investor Terminal';

  return (
    <Tag href={href || undefined} style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'lg' ? 13 : 11, textDecoration: 'none', ...style }} {...rest}>
      <BrandMark size={S.m} glow={glow} />
      {layout !== 'mark' && (
        layout === 'inline' ? (
          <span style={{ fontFamily: 'var(--font-display)', fontSize: S.w1, fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--text-primary)', whiteSpace: 'nowrap', lineHeight: 1 }}>{fullName}</span>
        ) : (
          <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: S.w1, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{word1}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: S.w2, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: taglineColor, whiteSpace: 'nowrap' }}>{tagline}</span>
          </span>
        )
      )}
    </Tag>
  );
}

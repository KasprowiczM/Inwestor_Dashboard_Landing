import React from 'react';

const VERDICTS = {
  too_early:  { color: 'var(--signal-too-early)',  glow: 'var(--signal-too-early-glow)' },
  observe:    { color: 'var(--signal-observe)',    glow: 'var(--signal-observe-glow)' },
  accumulate: { color: 'var(--signal-accumulate)', glow: 'var(--signal-accumulate-glow)' },
  aggressive: { color: 'var(--signal-aggressive)', glow: 'var(--signal-aggressive-glow)' },
};

function verdictFor(score) {
  if (score >= 78) return 'aggressive';
  if (score >= 55) return 'accumulate';
  if (score >= 30) return 'observe';
  return 'too_early';
}

/**
 * Signature Bottom-Score ring gauge. Stroke color follows the contrarian verdict band.
 */
export function ScoreRing({
  score = 72,
  max = 100,
  size = 168,
  stroke = 9,
  label = 'Bottom Score',
  verdict,            // optional override key
  caption = null,
  style = {},
}) {
  const v = VERDICTS[verdict || verdictFor(score)] || VERDICTS.too_early;
  const r = (size - stroke) / 2 - 4;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, score / max));
  const offset = c * (1 - pct);

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12, ...style }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
          <circle
            cx={size / 2} cy={size / 2} r={r} fill="none"
            stroke={v.color} strokeWidth={stroke} strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={offset}
            style={{ filter: `drop-shadow(0 0 8px ${v.glow})`, transition: 'stroke-dashoffset 1.1s var(--ease-emph), stroke 0.4s ease' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 2,
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: size * 0.30, fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
          }}>{Math.round(score)}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--text-muted)',
          }}>/ {max}</span>
        </div>
      </div>
      {label && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase', color: v.color,
        }}>{label}</span>
      )}
      {caption && <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{caption}</span>}
    </div>
  );
}

import React from 'react';

const polar = (cx, cy, r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
};
// Arc along the TOP semicircle, sweeping from startDeg → endDeg (180 = left, 0 = right).
const arc = (cx, cy, r, startDeg, endDeg) => {
  const [x1, y1] = polar(cx, cy, r, startDeg);
  const [x2, y2] = polar(cx, cy, r, endDeg);
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
};

/**
 * Semicircle gauge for bounded scores — sentiment (Fear↔Greed), bottom probability, confidence.
 * Pass `segments` for a banded track, or a single `color`. A marker sits at the value.
 */
export function Gauge({
  value = 50,
  max = 100,
  min = 0,
  size = 184,
  thickness = 12,
  color = 'var(--ice-400)',
  segments = null,          // [{ to:Number, color:String }] cumulative bands
  label = null,
  caption = null,
  unit = null,
  style = {},
}) {
  const w = size;
  const pad = thickness / 2 + 4;
  const cx = w / 2;
  const cy = w / 2;
  const r = w / 2 - pad;
  const h = cy + pad + 2;
  const pct = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
  const deg = (v) => 180 - (Math.max(0, Math.min(1, (v - min) / (max - min || 1)))) * 180;
  const [mx, my] = polar(cx, cy, r, deg(value));

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6, ...style }}>
      <svg width={w} height={h} style={{ overflow: 'visible', display: 'block' }}>
        {/* track */}
        <path d={arc(cx, cy, r, 180, 0)} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={thickness} strokeLinecap="round" />
        {/* banded segments OR single value arc */}
        {segments
          ? segments.map((s, i) => {
              const from = i === 0 ? min : segments[i - 1].to;
              return <path key={i} d={arc(cx, cy, r, deg(from), deg(s.to))} fill="none" stroke={s.color} strokeWidth={thickness} strokeLinecap="butt" style={{ opacity: 0.9 }} />;
            })
          : <path d={arc(cx, cy, r, 180, deg(value))} fill="none" stroke={color} strokeWidth={thickness} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 7px ${color})`, transition: 'stroke-dashoffset 0.8s var(--ease-emph)' }} />}
        {/* marker */}
        <circle cx={mx} cy={my} r={thickness / 2 + 2.5} fill="var(--bg-base)" stroke="#fff" strokeWidth="2.5" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))' }} />
        {/* value text */}
        <text x={cx} y={cy - r * 0.18} textAnchor="middle" style={{
          fontFamily: 'var(--font-display)', fontSize: w * 0.2, fontWeight: 800, fill: 'var(--text-primary)', letterSpacing: '-0.03em',
        }}>{Math.round(value)}{unit && <tspan style={{ fontSize: w * 0.09, fill: 'var(--text-muted)' }}>{unit}</tspan>}</text>
      </svg>
      {label && (
        <span style={{ marginTop: -4, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: segments ? 'var(--text-secondary)' : color }}>{label}</span>
      )}
      {caption && <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{caption}</span>}
    </div>
  );
}

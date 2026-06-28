import React from 'react';

/**
 * Sparkline / mini area-line chart. SVG, tokenized stroke + optional glow and area fill.
 * Use inside metric cards, indicator rows, the price-chart container and KPI tiles.
 */
export function Sparkline({
  data = [],
  color = 'var(--ice-400)',
  width = 120,
  height = 36,
  strokeWidth = 1.8,
  area = true,
  glow = true,
  markers = false,
  style = {},
  ...rest
}) {
  const uid = React.useId().replace(/[:]/g, '');
  const pts = data.length ? data : [0, 0];
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const span = max - min || 1;
  const X = (i) => (i / (pts.length - 1 || 1)) * width;
  const Y = (p) => height - ((p - min) / span) * (height - strokeWidth * 2) - strokeWidth;

  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${X(i).toFixed(1)} ${Y(p).toFixed(1)}`).join(' ');
  const fill = `${line} L${width} ${height} L0 ${height} Z`;
  const last = pts.length - 1;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`} width="100%" height={height}
      preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible', ...style }}
      {...rest}
    >
      {area && (
        <defs>
          <linearGradient id={`sp-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      {area && <path d={fill} fill={`url(#sp-${uid})`} stroke="none" />}
      <path
        d={line} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round" strokeLinejoin="round"
        style={glow ? { filter: `drop-shadow(0 0 5px ${color})`, opacity: 0.95 } : undefined}
        vectorEffect="non-scaling-stroke"
      />
      {markers && (
        <circle cx={X(last)} cy={Y(pts[last])} r={2.4} fill={color}
          style={glow ? { filter: `drop-shadow(0 0 6px ${color})` } : undefined} vectorEffect="non-scaling-stroke" />
      )}
    </svg>
  );
}

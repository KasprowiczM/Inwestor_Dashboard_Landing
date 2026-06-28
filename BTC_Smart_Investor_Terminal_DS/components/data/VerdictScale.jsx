import React from 'react';

const BANDS = [
  { w: 30, color: 'var(--signal-too-early)',  label: '0' },
  { w: 25, color: 'var(--signal-observe)',    label: '30' },
  { w: 23, color: 'var(--signal-accumulate)', label: '55' },
  { w: 22, color: 'var(--signal-aggressive)', label: '78' },
];

/** Contrarian Bottom-Score track with a live marker. Mirrors the dashboard score scale. */
export function VerdictScale({ score = 72, showLabels = true, style = {} }) {
  const pct = Math.max(0, Math.min(100, score));
  return (
    <div style={{ ...style }}>
      <div style={{ position: 'relative', paddingTop: 16 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '30fr 25fr 23fr 22fr',
          height: 14, overflow: 'hidden', borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--line)', background: 'rgba(255,255,255,0.04)',
        }}>
          {BANDS.map((b, i) => (
            <span key={i} style={{ background: b.color, opacity: 0.85 }} />
          ))}
        </div>
        <div style={{
          position: 'absolute', top: 12, left: `${pct}%`, transform: 'translateX(-50%)',
          width: 3, height: 30, borderRadius: 'var(--radius-pill)',
          background: '#fff', boxShadow: '0 0 12px rgba(255,255,255,0.6)',
          transition: 'left 0.8s var(--ease-emph)',
        }} />
      </div>
      {showLabels && (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6, marginTop: 12,
          fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
        }}>
          <span>0</span>
          <span style={{ textAlign: 'center' }}>30</span>
          <span style={{ textAlign: 'center' }}>55</span>
          <span style={{ textAlign: 'center' }}>78</span>
          <span style={{ textAlign: 'right' }}>100</span>
        </div>
      )}
    </div>
  );
}

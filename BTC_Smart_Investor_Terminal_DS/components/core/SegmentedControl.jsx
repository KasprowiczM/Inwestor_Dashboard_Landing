import React, { useState } from 'react';

/**
 * Segmented control — time ranges (24H · 7D · 30D · 1Y), view switches, plan toggles.
 * Controlled (`value`/`onChange`) or uncontrolled (`defaultValue`).
 */
export function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',          // 'sm' | 'md'
  fullWidth = false,
  accent = 'ice',       // 'ice' | 'gold'
  style = {},
  ...rest
}) {
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const [internal, setInternal] = useState(defaultValue ?? opts[0]?.value);
  const active = value !== undefined ? value : internal;
  const set = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };

  const S = size === 'sm' ? { h: 32, fs: 11.5, px: 11 } : { h: 40, fs: 13, px: 16 };
  const a = accent === 'gold'
    ? { fg: 'var(--text-on-gold)', bg: 'var(--grad-gold-cta)', bd: 'rgba(247,199,107,0.55)' }
    : { fg: 'var(--text-on-ice)', bg: 'var(--grad-ice-cta)', bd: 'rgba(103,232,249,0.5)' };

  return (
    <div
      role="tablist"
      style={{
        display: fullWidth ? 'grid' : 'inline-grid',
        gridAutoFlow: 'column',
        gridAutoColumns: fullWidth ? '1fr' : 'max-content',
        gap: 3, padding: 3,
        background: 'var(--bg-inset)', border: '1px solid var(--line)',
        borderRadius: 'var(--radius-md)', ...style,
      }}
      {...rest}
    >
      {opts.map((o) => {
        const on = o.value === active;
        return (
          <button
            key={o.value} role="tab" aria-selected={on} onClick={() => set(o.value)}
            style={{
              height: S.h, padding: `0 ${S.px}px`, border: '1px solid transparent',
              borderRadius: 'calc(var(--radius-md) - 3px)', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: S.fs, fontWeight: 700,
              letterSpacing: '0.04em', whiteSpace: 'nowrap',
              transition: 'all var(--dur) var(--ease-out)',
              color: on ? a.fg : 'var(--text-secondary)',
              background: on ? a.bg : 'transparent',
              borderColor: on ? a.bd : 'transparent',
              boxShadow: on ? 'inset 0 1px 0 rgba(255,255,255,0.3)' : 'none',
            }}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

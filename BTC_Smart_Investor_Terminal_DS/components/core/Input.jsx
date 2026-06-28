import React, { useState } from 'react';

/** Auth-grade text input with label, optional leading icon and password reveal. */
export function Input({
  label = null,
  type = 'text',
  placeholder = '',
  iconLeft = null,
  value,
  defaultValue,
  onChange,
  hint = null,
  id,
  style = {},
  ...rest
}) {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div style={{ minWidth: 0, ...style }}>
      {label && (
        <label htmlFor={id} style={{
          display: 'block', marginBottom: 7,
          fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)',
          fontFamily: 'var(--font-sans)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        {iconLeft && (
          <span style={{
            position: 'absolute', top: '50%', left: 13, transform: 'translateY(-50%)',
            color: 'var(--text-muted)', pointerEvents: 'none', display: 'inline-flex',
          }}>{iconLeft}</span>
        )}
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%', minHeight: 48,
            padding: `0 ${isPassword ? 46 : 14}px 0 ${iconLeft ? 40 : 14}px`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            background: focus ? 'var(--bg-surface)' : 'var(--bg-inset)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)', fontSize: 14.5, fontWeight: 500,
            border: `1px solid ${focus ? 'rgba(103,232,249,0.55)' : 'var(--line-strong)'}`,
            boxShadow: focus ? '0 0 0 3px rgba(103,232,249,0.10)' : 'none',
            transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
          }}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? 'Hide' : 'Show'}
            style={{
              position: 'absolute', top: '50%', right: 7, transform: 'translateY(-50%)',
              width: 34, height: 34, display: 'grid', placeItems: 'center',
              border: 0, borderRadius: 'var(--radius-sm)', background: 'transparent',
              color: 'var(--text-muted)', cursor: 'pointer', fontSize: 12,
              fontFamily: 'var(--font-mono)',
            }}
          >{show ? 'HIDE' : 'SHOW'}</button>
        )}
      </div>
      {hint && (
        <p style={{ marginTop: 7, fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{hint}</p>
      )}
    </div>
  );
}

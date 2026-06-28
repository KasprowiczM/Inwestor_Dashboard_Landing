/* @ds-bundle: {"format":3,"namespace":"NADIRDesignSystem_54e725","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandLockup","sourcePath":"components/core/BrandLockup.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"LockOverlay","sourcePath":"components/core/LockOverlay.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"StatusChip","sourcePath":"components/core/StatusChip.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"InfoDot","sourcePath":"components/core/Tooltip.jsx"},{"name":"Gauge","sourcePath":"components/data/Gauge.jsx"},{"name":"KpiStat","sourcePath":"components/data/KpiStat.jsx"},{"name":"ScoreRing","sourcePath":"components/data/ScoreRing.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"VerdictScale","sourcePath":"components/data/VerdictScale.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6aeffbccd92d","components/core/BrandLockup.jsx":"d42a6f7eff27","components/core/Button.jsx":"fef7a827479b","components/core/Card.jsx":"f91d74460190","components/core/Eyebrow.jsx":"120cd533c561","components/core/Input.jsx":"10a6c14d7c39","components/core/LockOverlay.jsx":"2894efe3d1c0","components/core/Modal.jsx":"2d5860b380d3","components/core/SegmentedControl.jsx":"c70e0bd15e75","components/core/StatusChip.jsx":"96fdb332e069","components/core/Tooltip.jsx":"7e058f01ad30","components/data/Gauge.jsx":"f62e714b3488","components/data/KpiStat.jsx":"0e918ab61017","components/data/ScoreRing.jsx":"29d18bf85b54","components/data/Sparkline.jsx":"aef9ac9dfba3","components/data/VerdictScale.jsx":"1aab754bc4d6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NADIRDesignSystem_54e725 = window.NADIRDesignSystem_54e725 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Data-status pill — live / stale / missing data freshness, plus neutral tones.
 * Mirrors the dashboard's data quality badges.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = true,
  style = {},
  ...rest
}) {
  const tones = {
    live: {
      c: 'var(--live)',
      bg: 'rgba(52,211,153,0.12)',
      bd: 'rgba(52,211,153,0.28)'
    },
    stale: {
      c: 'var(--stale)',
      bg: 'rgba(245,158,11,0.12)',
      bd: 'rgba(245,158,11,0.28)'
    },
    missing: {
      c: 'var(--missing)',
      bg: 'rgba(239,68,68,0.12)',
      bd: 'rgba(239,68,68,0.28)'
    },
    ice: {
      c: 'var(--ice-400)',
      bg: 'rgba(103,232,249,0.10)',
      bd: 'rgba(103,232,249,0.28)'
    },
    gold: {
      c: 'var(--gold-300)',
      bg: 'rgba(247,199,107,0.10)',
      bd: 'rgba(247,199,107,0.30)'
    },
    neutral: {
      c: 'var(--text-secondary)',
      bg: 'rgba(255,255,255,0.05)',
      bd: 'var(--line-strong)'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: dot ? '3px 10px 3px 8px' : '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: tones.c,
      background: tones.bg,
      border: `1px solid ${tones.bd}`,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: tones.c,
      boxShadow: `0 0 8px ${tones.c}`
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The retained gold Bitcoin mark, inlined & self-contained (no asset path needed). */
function BrandMark({
  size = 32,
  glow = true
}) {
  const id = React.useId().replace(/[:]/g, '');
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    style: glow ? {
      filter: 'drop-shadow(0 0 8px var(--gold-glow))',
      flexShrink: 0
    } : {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `bm-${id}`,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#F7C76B"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF9900"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "44",
    fill: "none",
    stroke: `url(#bm-${id})`,
    strokeWidth: "3",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(10.0229, 9.6958) scale(0.020069)",
    fill: `url(#bm-${id})`,
    d: "M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
  }));
}

/**
 * Brand lockup for BTC Smart Investor Terminal — the gold mark + wordmark.
 * `stack` (two-line, default), `inline` (one line) or `mark` (symbol only).
 */
function BrandLockup({
  size = 'md',
  // 'sm' | 'md' | 'lg'
  layout = 'stack',
  // 'stack' | 'inline' | 'mark'
  tagline = 'Terminal',
  taglineColor = 'var(--text-muted)',
  href = null,
  glow = true,
  style = {},
  ...rest
}) {
  const S = {
    sm: {
      m: 26,
      w1: 14,
      w2: 8.5
    },
    md: {
      m: 32,
      w1: 17,
      w2: 9.5
    },
    lg: {
      m: 42,
      w1: 22,
      w2: 11
    }
  }[size];
  const Tag = href ? 'a' : 'div';
  const word1 = 'BTC Smart Investor';
  const fullName = 'BTC Smart Investor Terminal';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size === 'lg' ? 13 : 11,
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(BrandMark, {
    size: S.m,
    glow: glow
  }), layout !== 'mark' && (layout === 'inline' ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: S.w1,
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      lineHeight: 1
    }
  }, fullName) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 3,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: S.w1,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, word1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: S.w2,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: taglineColor,
      whiteSpace: 'nowrap'
    }
  }, tagline))));
}
Object.assign(__ds_scope, { BrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NADIR Button — primary action is COLD (ice-cyan), gold is reserved for premium/asset moments.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'gold' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
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
    sm: {
      height: 38,
      padding: '0 14px',
      fontSize: 13,
      radius: 'var(--radius-md)'
    },
    md: {
      height: 46,
      padding: '0 20px',
      fontSize: 14,
      radius: 'var(--radius-md)'
    },
    lg: {
      height: 56,
      padding: '0 28px',
      fontSize: 15.5,
      radius: 'var(--radius-lg)'
    }
  }[size];
  const variants = {
    primary: {
      background: 'var(--grad-ice-cta)',
      color: 'var(--text-on-ice)',
      border: '1px solid rgba(103,232,249,0.55)',
      boxShadow: '0 12px 30px rgba(6,182,212,0.22), inset 0 1px 0 rgba(255,255,255,0.35)'
    },
    gold: {
      background: 'var(--grad-gold-cta)',
      color: 'var(--text-on-gold)',
      border: '1px solid rgba(247,199,107,0.6)',
      boxShadow: '0 12px 30px rgba(247,199,107,0.20), inset 0 1px 0 rgba(255,255,255,0.4)'
    },
    secondary: {
      background: 'rgba(255,255,255,0.04)',
      color: 'var(--text-primary)',
      border: '1px solid var(--line-strong)',
      boxShadow: 'var(--shadow-layer)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
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
    ...style
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href || undefined,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: e => hover(e, true),
    onMouseLeave: e => hover(e, false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Glass surface card. Optional eyebrow + title header; optional ice/gold edge accent.
 */
function Card({
  children,
  eyebrow = null,
  title = null,
  accent = null,
  // null | 'ice' | 'gold'
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const accentEdge = accent === 'ice' ? {
    borderColor: 'var(--line-ice)',
    boxShadow: 'var(--shadow-card), var(--glow-ice)'
  } : accent === 'gold' ? {
    borderColor: 'var(--line-gold)',
    boxShadow: 'var(--shadow-card), var(--glow-gold)'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--grad-glass), var(--bg-glass)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card), var(--shadow-layer)',
      padding,
      transition: 'transform var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
      ...accentEdge,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.borderColor = 'var(--line-strong)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = accent ? accentEdge.borderColor : 'var(--line)';
    } : undefined
  }, rest), (eyebrow || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ice-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--ice-400)',
      boxShadow: '0 0 10px var(--ice-glow)'
    }
  }), eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: eyebrow ? '10px 0 0' : 0,
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      lineHeight: 1.1
    }
  }, title)), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono eyebrow / kicker with a glowing signal dot. The terminal's section voice. */
function Eyebrow({
  children,
  color = 'var(--ice-400)',
  prefix = '//',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-mono-eyebrow)',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color,
      boxShadow: `0 0 10px ${color}`
    }
  }), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, prefix), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Auth-grade text input with label, optional leading icon and password reveal. */
function Input({
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
  const inputType = isPassword ? show ? 'text' : 'password' : type;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block',
      marginBottom: 7,
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 13,
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: inputType,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      minHeight: 48,
      padding: `0 ${isPassword ? 46 : 14}px 0 ${iconLeft ? 40 : 14}px`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      background: focus ? 'var(--bg-surface)' : 'var(--bg-inset)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      fontWeight: 500,
      border: `1px solid ${focus ? 'rgba(103,232,249,0.55)' : 'var(--line-strong)'}`,
      boxShadow: focus ? '0 0 0 3px rgba(103,232,249,0.10)' : 'none',
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease-out)'
    }
  }, rest)), isPassword && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShow(s => !s),
    "aria-label": show ? 'Hide' : 'Show',
    style: {
      position: 'absolute',
      top: '50%',
      right: 7,
      transform: 'translateY(-50%)',
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'var(--font-mono)'
    }
  }, show ? 'HIDE' : 'SHOW')), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 7,
      fontSize: 12,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/LockOverlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LockGlyph = ({
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "11",
  width: "16",
  height: "9",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11V7a4 4 0 0 1 8 0v4"
}));
const ArrowGlyph = ({
  size = 15
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 6l6 6-6 6"
}));

/**
 * Gated-panel overlay — blurs a teased preview and surfaces the upgrade path.
 * The core "Smart sees the shape, Investor unlocks the detail" pattern.
 */
function LockOverlay({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      minHeight,
      ...style
    }
  }, rest), children && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      filter: `blur(${blur}px) saturate(0.8)`,
      opacity: 0.5,
      pointerEvents: 'none',
      userSelect: 'none',
      height: '100%'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      padding: compact ? 16 : 24,
      textAlign: 'center',
      background: 'radial-gradient(120% 100% at 50% 0%, rgba(247,199,107,0.06), transparent 60%), var(--lock-veil)',
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)',
      border: '1px solid var(--lock-border)',
      borderRadius: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: compact ? 9 : 13,
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: compact ? 36 : 46,
      height: compact ? 36 : 46,
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      color: 'var(--gold-300)',
      background: 'rgba(247,199,107,0.10)',
      border: '1px solid var(--line-gold)',
      boxShadow: 'var(--glow-gold)'
    }
  }, /*#__PURE__*/React.createElement(LockGlyph, {
    size: compact ? 17 : 21
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, title), !compact && note && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, note)), cta && /*#__PURE__*/React.createElement("button", {
    onClick: onUpgrade,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: compact ? 36 : 42,
      padding: compact ? '0 16px' : '0 20px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: compact ? 12.5 : 14,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-on-gold)',
      background: 'var(--grad-gold-cta)',
      border: '1px solid rgba(247,199,107,0.6)',
      boxShadow: '0 10px 26px rgba(247,199,107,0.18), inset 0 1px 0 rgba(255,255,255,0.4)',
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.filter = 'brightness(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.filter = 'none';
    }
  }, cta, /*#__PURE__*/React.createElement(ArrowGlyph, {
    size: compact ? 14 : 15
  })))));
}
Object.assign(__ds_scope, { LockOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LockOverlay.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
const {
  useEffect
} = React;
const X = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));

/**
 * Modal dialog / right-side drawer on a dimmed backdrop. Glass surface, ESC + backdrop close.
 * Use for the invite flow, indicator detail, and confirmations.
 */
function Modal({
  open = false,
  onClose,
  title = null,
  eyebrow = null,
  children = null,
  footer = null,
  width = 520,
  side = null,
  // null = centered dialog, 'right' = drawer
  closeOnBackdrop = true,
  style = {}
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const drawer = side === 'right';
  return /*#__PURE__*/React.createElement("div", {
    onClick: closeOnBackdrop ? onClose : undefined,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: drawer ? 'stretch' : 'center',
      justifyContent: drawer ? 'flex-end' : 'center',
      padding: drawer ? 0 : 'clamp(16px, 4vw, 40px)',
      background: 'rgba(2,4,7,0.66)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      animation: 'btcFade 0.18s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes btcFade{from{opacity:0}to{opacity:1}}@keyframes btcRise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes btcSlide{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}'), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'relative',
      width: drawer ? 'min(440px, 100%)' : '100%',
      maxWidth: drawer ? 440 : width,
      maxHeight: drawer ? '100%' : '88vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--grad-glass), var(--bg-glass-strong)',
      border: '1px solid var(--line-strong)',
      borderRadius: drawer ? 0 : 'var(--radius-xl)',
      boxShadow: 'var(--shadow-raise)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      animation: drawer ? 'btcSlide 0.26s var(--ease-emph)' : 'btcRise 0.24s var(--ease-emph)',
      overflow: 'hidden',
      ...style
    }
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '22px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ice-400)',
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      lineHeight: 1.15
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      flexShrink: 0,
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.03)',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      transition: 'all var(--dur)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--text-primary)';
      e.currentTarget.style.borderColor = 'var(--line-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.borderColor = 'var(--line)';
    }
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: title || eyebrow ? '0 24px 24px' : 24,
      overflowY: 'auto'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      borderTop: '1px solid var(--line)',
      background: 'rgba(255,255,255,0.015)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Segmented control — time ranges (24H · 7D · 30D · 1Y), view switches, plan toggles.
 * Controlled (`value`/`onChange`) or uncontrolled (`defaultValue`).
 */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  // 'sm' | 'md'
  fullWidth = false,
  accent = 'ice',
  // 'ice' | 'gold'
  style = {},
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const [internal, setInternal] = useState(defaultValue ?? opts[0]?.value);
  const active = value !== undefined ? value : internal;
  const set = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const S = size === 'sm' ? {
    h: 32,
    fs: 11.5,
    px: 11
  } : {
    h: 40,
    fs: 13,
    px: 16
  };
  const a = accent === 'gold' ? {
    fg: 'var(--text-on-gold)',
    bg: 'var(--grad-gold-cta)',
    bd: 'rgba(247,199,107,0.55)'
  } : {
    fg: 'var(--text-on-ice)',
    bg: 'var(--grad-ice-cta)',
    bd: 'rgba(103,232,249,0.5)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: fullWidth ? 'grid' : 'inline-grid',
      gridAutoFlow: 'column',
      gridAutoColumns: fullWidth ? '1fr' : 'max-content',
      gap: 3,
      padding: 3,
      background: 'var(--bg-inset)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), opts.map(o => {
    const on = o.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => set(o.value),
      style: {
        height: S.h,
        padding: `0 ${S.px}px`,
        border: '1px solid transparent',
        borderRadius: 'calc(var(--radius-md) - 3px)',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: S.fs,
        fontWeight: 700,
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        transition: 'all var(--dur) var(--ease-out)',
        color: on ? a.fg : 'var(--text-secondary)',
        background: on ? a.bg : 'transparent',
        borderColor: on ? a.bd : 'transparent',
        boxShadow: on ? 'inset 0 1px 0 rgba(255,255,255,0.3)' : 'none'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Verdict / status chip — outlined capsule echoing the strategy's contrarian palette.
 * Use for verdict labels, zone states, plan tiers.
 */
function StatusChip({
  children,
  tone = 'ice',
  size = 'md',
  style = {},
  ...rest
}) {
  const tones = {
    ice: {
      c: '#67E8F9',
      bg: 'rgba(103,232,249,0.09)',
      bd: 'rgba(103,232,249,0.30)'
    },
    emerald: {
      c: '#34D399',
      bg: 'rgba(52,211,153,0.09)',
      bd: 'rgba(52,211,153,0.28)'
    },
    amber: {
      c: '#FBBF24',
      bg: 'rgba(251,191,36,0.09)',
      bd: 'rgba(251,191,36,0.30)'
    },
    red: {
      c: '#F87171',
      bg: 'rgba(248,113,113,0.09)',
      bd: 'rgba(248,113,113,0.28)'
    },
    slate: {
      c: '#94A3B8',
      bg: 'rgba(148,163,184,0.08)',
      bd: 'rgba(148,163,184,0.26)'
    },
    gold: {
      c: '#F7C76B',
      bg: 'rgba(247,199,107,0.09)',
      bd: 'rgba(247,199,107,0.32)'
    }
  }[tone] || {};
  const s = size === 'sm' ? {
    minHeight: 22,
    padding: '2px 9px',
    fontSize: 10
  } : {
    minHeight: 28,
    padding: '4px 12px',
    fontSize: 11.5
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      borderRadius: 'var(--radius-pill)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-mono)',
      color: tones.c,
      background: tones.bg,
      border: `1px solid ${tones.bd}`,
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Hover/focus tooltip for explaining complex metrics. Wraps a trigger; shows a glass bubble.
 * Pair with the `?` helper dot on dashboard KPI labels.
 */
function Tooltip({
  children,
  content,
  side = 'top',
  // 'top' | 'bottom' | 'left' | 'right'
  maxWidth = 220,
  style = {}
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 9
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 9
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 9
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 9
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    tabIndex: 0
  }, children, show && content && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos,
      width: 'max-content',
      maxWidth,
      padding: '9px 12px',
      background: 'var(--bg-glass-strong)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raise)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      textTransform: 'none',
      letterSpacing: 0,
      pointerEvents: 'none',
      animation: 'btcTip 0.14s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes btcTip{from{opacity:0}to{opacity:1}}'), content));
}

/** Small `?` helper dot — a ready-made tooltip trigger for metric labels. */
function InfoDot({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1px solid var(--line-strong)',
      background: 'rgba(255,255,255,0.03)',
      color: 'var(--text-muted)',
      fontSize: size * 0.64,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      cursor: 'help',
      lineHeight: 1
    }
  }, "?");
}
Object.assign(__ds_scope, { Tooltip, InfoDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/data/Gauge.jsx
try { (() => {
const polar = (cx, cy, r, deg) => {
  const a = deg * Math.PI / 180;
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
function Gauge({
  value = 50,
  max = 100,
  min = 0,
  size = 184,
  thickness = 12,
  color = 'var(--ice-400)',
  segments = null,
  // [{ to:Number, color:String }] cumulative bands
  label = null,
  caption = null,
  unit = null,
  style = {}
}) {
  const w = size;
  const pad = thickness / 2 + 4;
  const cx = w / 2;
  const cy = w / 2;
  const r = w / 2 - pad;
  const h = cy + pad + 2;
  const pct = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
  const deg = v => 180 - Math.max(0, Math.min(1, (v - min) / (max - min || 1))) * 180;
  const [mx, my] = polar(cx, cy, r, deg(value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      overflow: 'visible',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: arc(cx, cy, r, 180, 0),
    fill: "none",
    stroke: "rgba(255,255,255,0.07)",
    strokeWidth: thickness,
    strokeLinecap: "round"
  }), segments ? segments.map((s, i) => {
    const from = i === 0 ? min : segments[i - 1].to;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: arc(cx, cy, r, deg(from), deg(s.to)),
      fill: "none",
      stroke: s.color,
      strokeWidth: thickness,
      strokeLinecap: "butt",
      style: {
        opacity: 0.9
      }
    });
  }) : /*#__PURE__*/React.createElement("path", {
    d: arc(cx, cy, r, 180, deg(value)),
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    style: {
      filter: `drop-shadow(0 0 7px ${color})`,
      transition: 'stroke-dashoffset 0.8s var(--ease-emph)'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: mx,
    cy: my,
    r: thickness / 2 + 2.5,
    fill: "var(--bg-base)",
    stroke: "#fff",
    strokeWidth: "2.5",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - r * 0.18,
    textAnchor: "middle",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: w * 0.2,
      fontWeight: 800,
      fill: 'var(--text-primary)',
      letterSpacing: '-0.03em'
    }
  }, Math.round(value), unit && /*#__PURE__*/React.createElement("tspan", {
    style: {
      fontSize: w * 0.09,
      fill: 'var(--text-muted)'
    }
  }, unit))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: -4,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: segments ? 'var(--text-secondary)' : color
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { Gauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Gauge.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono KPI tile — label, big tabular value, optional sub-line and accent. */
function KpiStat({
  label,
  value,
  unit = null,
  sub = null,
  accent = 'var(--text-primary)',
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      minWidth: 0,
      padding: '14px 16px',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--grad-glass), var(--bg-glass)',
      boxShadow: 'var(--shadow-layer)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontWeight: 800,
      fontSize: 'clamp(1.1rem, 1.6vw, 1.55rem)',
      lineHeight: 1.05,
      color: accent,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6em',
      color: 'var(--text-muted)',
      marginLeft: 4
    }
  }, unit)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12,
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, sub));
}
Object.assign(__ds_scope, { KpiStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiStat.jsx", error: String((e && e.message) || e) }); }

// components/data/ScoreRing.jsx
try { (() => {
const VERDICTS = {
  too_early: {
    color: 'var(--signal-too-early)',
    glow: 'var(--signal-too-early-glow)'
  },
  observe: {
    color: 'var(--signal-observe)',
    glow: 'var(--signal-observe-glow)'
  },
  accumulate: {
    color: 'var(--signal-accumulate)',
    glow: 'var(--signal-accumulate-glow)'
  },
  aggressive: {
    color: 'var(--signal-aggressive)',
    glow: 'var(--signal-aggressive-glow)'
  }
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
function ScoreRing({
  score = 72,
  max = 100,
  size = 168,
  stroke = 9,
  label = 'Bottom Score',
  verdict,
  // optional override key
  caption = null,
  style = {}
}) {
  const v = VERDICTS[verdict || verdictFor(score)] || VERDICTS.too_early;
  const r = (size - stroke) / 2 - 4;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, score / max));
  const offset = c * (1 - pct);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "rgba(255,255,255,0.06)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: v.color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: offset,
    style: {
      filter: `drop-shadow(0 0 8px ${v.glow})`,
      transition: 'stroke-dashoffset 1.1s var(--ease-emph), stroke 0.4s ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.30,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, Math.round(score)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "/ ", max))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: v.color
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { ScoreRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScoreRing.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sparkline / mini area-line chart. SVG, tokenized stroke + optional glow and area fill.
 * Use inside metric cards, indicator rows, the price-chart container and KPI tiles.
 */
function Sparkline({
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
  const X = i => i / (pts.length - 1 || 1) * width;
  const Y = p => height - (p - min) / span * (height - strokeWidth * 2) - strokeWidth;
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${X(i).toFixed(1)} ${Y(p).toFixed(1)}`).join(' ');
  const fill = `${line} L${width} ${height} L0 ${height} Z`;
  const last = pts.length - 1;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), area && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `sp-${uid}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), area && /*#__PURE__*/React.createElement("path", {
    d: fill,
    fill: `url(#sp-${uid})`,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: glow ? {
      filter: `drop-shadow(0 0 5px ${color})`,
      opacity: 0.95
    } : undefined,
    vectorEffect: "non-scaling-stroke"
  }), markers && /*#__PURE__*/React.createElement("circle", {
    cx: X(last),
    cy: Y(pts[last]),
    r: 2.4,
    fill: color,
    style: glow ? {
      filter: `drop-shadow(0 0 6px ${color})`
    } : undefined,
    vectorEffect: "non-scaling-stroke"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/VerdictScale.jsx
try { (() => {
const BANDS = [{
  w: 30,
  color: 'var(--signal-too-early)',
  label: '0'
}, {
  w: 25,
  color: 'var(--signal-observe)',
  label: '30'
}, {
  w: 23,
  color: 'var(--signal-accumulate)',
  label: '55'
}, {
  w: 22,
  color: 'var(--signal-aggressive)',
  label: '78'
}];

/** Contrarian Bottom-Score track with a live marker. Mirrors the dashboard score scale. */
function VerdictScale({
  score = 72,
  showLabels = true,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, score));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '30fr 25fr 23fr 22fr',
      height: 14,
      overflow: 'hidden',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--line)',
      background: 'rgba(255,255,255,0.04)'
    }
  }, BANDS.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: b.color,
      opacity: 0.85
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: `${pct}%`,
      transform: 'translateX(-50%)',
      width: 3,
      height: 30,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: '0 0 12px rgba(255,255,255,0.6)',
      transition: 'left 0.8s var(--ease-emph)'
    }
  })), showLabels && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 6,
      marginTop: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "30"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "55"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "78"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "100")));
}
Object.assign(__ds_scope, { VerdictScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/VerdictScale.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandLockup = __ds_scope.BrandLockup;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LockOverlay = __ds_scope.LockOverlay;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.InfoDot = __ds_scope.InfoDot;

__ds_ns.Gauge = __ds_scope.Gauge;

__ds_ns.KpiStat = __ds_scope.KpiStat;

__ds_ns.ScoreRing = __ds_scope.ScoreRing;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.VerdictScale = __ds_scope.VerdictScale;

})();

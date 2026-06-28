import React from 'react';
export interface EyebrowProps {
  children?: React.ReactNode;
  /** Dot + text color. @default "var(--ice-400)" */
  color?: string;
  /** Leading glyph before the label. @default "//" */
  prefix?: string;
  style?: React.CSSProperties;
}
/** Mono kicker with glowing signal dot — the terminal's section label voice. */
export function Eyebrow(props: EyebrowProps): JSX.Element;

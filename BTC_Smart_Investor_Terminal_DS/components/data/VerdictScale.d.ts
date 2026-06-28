import React from 'react';
export interface VerdictScaleProps {
  /** 0–100 Bottom Score; positions the marker. @default 72 */
  score?: number;
  showLabels?: boolean;
  style?: React.CSSProperties;
}
/** Contrarian Bottom-Score band track with a live marker (0·30·55·78·100). */
export function VerdictScale(props: VerdictScaleProps): JSX.Element;

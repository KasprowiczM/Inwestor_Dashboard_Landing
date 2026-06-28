import React from 'react';
export interface ScoreRingProps {
  /** 0–max Bottom Score. @default 72 */
  score?: number;
  /** @default 100 */
  max?: number;
  /** Diameter in px. @default 168 */
  size?: number;
  stroke?: number;
  label?: React.ReactNode;
  /** Override the auto verdict band. */
  verdict?: 'too_early' | 'observe' | 'accumulate' | 'aggressive';
  caption?: React.ReactNode;
  style?: React.CSSProperties;
}
/**
 * Signature Bottom-Score ring gauge; stroke follows the contrarian verdict band.
 * @startingPoint section="Data" subtitle="Bottom-Score ring gauge" viewport="700x260"
 */
export function ScoreRing(props: ScoreRingProps): JSX.Element;

import React from 'react';
export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  /** @default "top" */
  side?: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: number;
  style?: React.CSSProperties;
}
/**
 * Hover/focus tooltip for complex metrics. Wraps a trigger; shows a glass bubble.
 * @startingPoint section="Core" subtitle="Tooltip + InfoDot — metric helper text" viewport="700x180"
 */
export function Tooltip(props: TooltipProps): JSX.Element;
export interface InfoDotProps { size?: number; }
/** Small `?` helper dot — a ready-made tooltip trigger. */
export function InfoDot(props: InfoDotProps): JSX.Element;

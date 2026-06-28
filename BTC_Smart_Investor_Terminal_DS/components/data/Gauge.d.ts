import React from 'react';
export interface GaugeSegment { to: number; color: string; }
export interface GaugeProps {
  /** Current value. @default 50 */
  value?: number;
  /** @default 100 */
  max?: number;
  /** @default 0 */
  min?: number;
  /** Diameter (px). @default 184 */
  size?: number;
  thickness?: number;
  /** Value-arc color when `segments` is not given. @default "var(--ice-400)" */
  color?: string;
  /** Cumulative colored bands, e.g. Fear↔Greed. */
  segments?: GaugeSegment[] | null;
  label?: React.ReactNode;
  caption?: React.ReactNode;
  unit?: React.ReactNode;
  style?: React.CSSProperties;
}
/**
 * Semicircle gauge — sentiment (Fear↔Greed), bottom probability, confidence.
 * @startingPoint section="Data" subtitle="Gauge — semicircle sentiment / probability" viewport="700x230"
 */
export function Gauge(props: GaugeProps): JSX.Element;

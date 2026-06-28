import React from 'react';
export interface SparklineProps {
  /** Series values; scaled to fit. */
  data?: number[];
  /** Stroke + area color (token or hex). @default "var(--ice-400)" */
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  /** Soft area fill under the line. @default true */
  area?: boolean;
  /** Signal glow on the stroke. @default true */
  glow?: boolean;
  /** Dot on the latest point. @default false */
  markers?: boolean;
  style?: React.CSSProperties;
}
/**
 * Mini area-line chart for metric cards, indicator rows and the price-chart container.
 * @startingPoint section="Data" subtitle="Sparkline — mini area/line chart" viewport="700x150"
 */
export function Sparkline(props: SparklineProps): JSX.Element;

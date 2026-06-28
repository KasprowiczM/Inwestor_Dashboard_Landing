import React from 'react';
export interface KpiStatProps {
  label: React.ReactNode;
  value: React.ReactNode;
  unit?: React.ReactNode;
  sub?: React.ReactNode;
  /** Value color. @default "var(--text-primary)" */
  accent?: string;
  /** @default "left" */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}
/** Mono KPI tile: label, big tabular value, optional sub-line. */
export function KpiStat(props: KpiStatProps): JSX.Element;

import React from 'react';
export interface SegmentOption { value: string; label: React.ReactNode; }
export interface SegmentedControlProps {
  options: (string | SegmentOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** @default "md" */
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  /** Active-segment color. @default "ice" */
  accent?: 'ice' | 'gold';
  style?: React.CSSProperties;
}
/**
 * Segmented control for time ranges, view switches and filters.
 * @startingPoint section="Core" subtitle="Segmented control — ranges & view switches" viewport="700x150"
 */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;

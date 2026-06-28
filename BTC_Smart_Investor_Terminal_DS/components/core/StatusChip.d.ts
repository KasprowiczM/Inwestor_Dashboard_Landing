import React from 'react';
export interface StatusChipProps {
  children?: React.ReactNode;
  /** Contrarian verdict palette. @default "ice" */
  tone?: 'ice' | 'emerald' | 'amber' | 'red' | 'slate' | 'gold';
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
/** Outlined verdict/status capsule (zone state, plan tier, verdict label). */
export function StatusChip(props: StatusChipProps): JSX.Element;

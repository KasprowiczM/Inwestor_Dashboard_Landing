import React from 'react';
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'live' | 'stale' | 'missing' | 'ice' | 'gold' | 'neutral';
  /** Show the leading glow dot. @default true */
  dot?: boolean;
  style?: React.CSSProperties;
}
/** Data-freshness / status pill (live, stale, missing) with optional glow dot. */
export function Badge(props: BadgeProps): JSX.Element;

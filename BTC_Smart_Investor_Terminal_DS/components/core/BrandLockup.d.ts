import React from 'react';
export interface BrandLockupProps {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Two-line stack, one-line inline, or the mark alone. @default "stack" */
  layout?: 'stack' | 'inline' | 'mark';
  /** Descriptor line under the wordmark (stack layout). @default "Terminal" */
  tagline?: React.ReactNode;
  taglineColor?: string;
  /** Render as a link. */
  href?: string | null;
  /** Gold glow on the mark. @default true */
  glow?: boolean;
  style?: React.CSSProperties;
}
/**
 * BTC Smart Investor Terminal brand lockup — retained gold Bitcoin mark + wordmark, self-contained.
 * @startingPoint section="Core" subtitle="Brand lockup — mark + wordmark" viewport="700x200"
 */
export function BrandLockup(props: BrandLockupProps): JSX.Element;

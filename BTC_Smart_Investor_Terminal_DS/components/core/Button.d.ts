import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Primary is the COLD ice CTA. Gold is reserved for premium/asset moments. @default "primary" */
  variant?: 'primary' | 'gold' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string | null;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action button for NADIR.
 *
 * @startingPoint section="Core" subtitle="Ice & gold CTAs in every variant" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;

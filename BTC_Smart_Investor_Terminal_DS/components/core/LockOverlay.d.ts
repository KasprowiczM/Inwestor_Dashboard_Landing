import React from 'react';
export interface LockOverlayProps {
  /** Teased content rendered blurred behind the veil. */
  children?: React.ReactNode;
  /** @default "Investor only" */
  title?: React.ReactNode;
  /** @default "Unlock the full terminal to see this." */
  note?: React.ReactNode;
  /** CTA label; pass null to hide. @default "Upgrade to Investor" */
  cta?: React.ReactNode;
  onUpgrade?: () => void;
  /** Blur radius (px) applied to children. @default 7 */
  blur?: number;
  minHeight?: number;
  /** Tight variant for small tiles. @default false */
  compact?: boolean;
  style?: React.CSSProperties;
}
/**
 * Gated-panel overlay for the Smart plan — blurs a teased preview, drives the Investor upgrade.
 * @startingPoint section="Core" subtitle="LockOverlay — gated / invite-only panel" viewport="700x300"
 */
export function LockOverlay(props: LockOverlayProps): JSX.Element;

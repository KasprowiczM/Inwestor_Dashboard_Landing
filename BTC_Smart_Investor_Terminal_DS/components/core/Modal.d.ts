import React from 'react';
export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** Centered-dialog max width (px). @default 520 */
  width?: number;
  /** null = centered dialog; 'right' = drawer. @default null */
  side?: null | 'right';
  closeOnBackdrop?: boolean;
  style?: React.CSSProperties;
}
/**
 * Modal dialog / right drawer on a dimmed glass backdrop — invite flow, detail, confirmations.
 */
export function Modal(props: ModalProps): JSX.Element | null;

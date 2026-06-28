import React from 'react';
export interface InputProps {
  label?: React.ReactNode;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  iconLeft?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}
/** Auth-grade text input: label, leading icon, focus ring, password reveal. */
export function Input(props: InputProps): JSX.Element;

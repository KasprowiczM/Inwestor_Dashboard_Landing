import React from 'react';
export interface CardProps {
  children?: React.ReactNode;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Glowing edge accent. @default null */
  accent?: 'ice' | 'gold' | null;
  /** Lift on hover. @default false */
  interactive?: boolean;
  padding?: number;
  style?: React.CSSProperties;
}
/**
 * Glass surface card with optional eyebrow/title header and ice/gold edge accent.
 * @startingPoint section="Core" subtitle="Glass card with eyebrow + accent edge" viewport="700x230"
 */
export function Card(props: CardProps): JSX.Element;

import React from 'react';

import * as S from './styled';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'danger' | 'warning' | 'success' | 'outline';

export interface ButtonCustomProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fillWidth?: boolean;
}

export type ButtonProps = ButtonCustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'medium', variant = 'primary', fillWidth = false, ...props }, ref) => {
    return (
      <S.ButtonElement ref={ref} size={size} variant={variant} fillWidth={fillWidth} {...props} />
    );
  }
);

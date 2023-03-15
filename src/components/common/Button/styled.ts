import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

import { colors } from '@/styles/colors';

import { ButtonCustomProps, ButtonSize, ButtonVariant } from '.';

const getBackgroundStylesByVariant = (variant: Exclude<ButtonVariant, 'primary' | 'outline'>) => {
  const color = colors[variant];

  return css`
    background-color: ${color.default};

    &:hover {
      background-color: ${color.darker};
    }
    &:active {
      background-color: ${color.darker};
    }
    &:disabled {
      background-color: ${color.lighter};
    }
  `;
};

const variants: Record<ButtonVariant, SerializedStyles> = {
  primary: css`
    color: black;
    background-color: white;

    &:hover {
      background-color: #eeeeee;
    }

    &:active {
      background-color: #eeeeee;
    }

    &:disabled {
      color: rgba(0, 0, 0, 0.7);
      background-color: #f1f1f1;
    }
  `,
  outline: css`
    background-color: transparent;
    box-shadow: inset 0 0 0 2px white;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8);
    }
  `,
  danger: getBackgroundStylesByVariant('danger'),
  warning: getBackgroundStylesByVariant('warning'),
  success: getBackgroundStylesByVariant('success'),
};

const sizes: Record<ButtonSize, SerializedStyles> = {
  large: css`
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
    border-radius: 1rem;
  `,
  medium: css`
    font-size: 1.6rem;
    padding: 1rem 1.6rem;
    border-radius: 0.8rem;
  `,
  small: css`
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
  `,
};

const fill = css`
  width: 100%;
`;

export const ButtonElement = styled.button<Required<ButtonCustomProps>>`
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 600;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  letter-spacing: -0.03em;

  cursor: pointer;
  transition: background 150ms, box-shadow 150ms, color 150ms;
  color: white;

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => props.fillWidth && fill};
  ${(props) => props.size && sizes[props.size]};
  ${(props) => props.variant && variants[props.variant]}
`;

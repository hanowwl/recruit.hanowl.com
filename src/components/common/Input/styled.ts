import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

import { InputCustomProps } from '.';

export const InputContainer = styled.div<Pick<InputCustomProps, 'error'>>`
  ${(props) =>
    props.error &&
    css`
      & > div:has(input) {
        box-shadow: inset 0 0 0 2px ${colors.danger.default} !important;
      }

      & > p {
        color: ${colors.danger.default} !important;
      }
    `}
`;

export const InputLabel = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  color: #595865;
  padding: 0.8rem 0;
`;

export const InputElementWrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  box-shadow: inset 0 0 0 1px ${colors.primary.lighter};
  transition: box-shadow 200ms;

  &:has(input:disabled),
  input:disabled {
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px #9eb0ff;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 2px #eeeeee;
  }
`;

export const InputElement = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  outline: none;
  border: none;
  background: none;
  color: white;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #ffffff !important;
  }
`;

export const InputMessage = styled.p`
  font-size: 1.5rem;
  color: #595865;
  margin-top: 0.8rem;
  transition: color 200ms;
`;

export const InputButtonsRelativeContainer = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;

  & > button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InputPasswordVisibleButton = styled.button<{ isFocusingOrHasValue: boolean }>`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  width: 3rem;
  opacity: 1;
  z-index: 1;
  transition: opacity 150ms;

  ${(props) =>
    props.isFocusingOrHasValue &&
    css`
      opacity: 0;
      z-index: 0;
    `}
`;

export const InputClearButton = styled.button<{ isFocusingOrHasValue: boolean }>`
  outline: none;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  opacity: 0;
  z-index: 0;
  transition: opacity 150ms;

  ${(props) =>
    props.isFocusingOrHasValue &&
    css`
      opacity: 1;
      z-index: 1;
    `}
`;

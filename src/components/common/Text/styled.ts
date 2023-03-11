import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TextProps } from '.';

export const TextColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TextRowContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  font-size: 8.8rem;
  font-weight: 800;
  gap: 1.2rem;
`;

export const TextElement = styled.span<Omit<TextProps, 'children'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.fill &&
    css`
      flex: 1;
      height: 8.8rem;
      background: ${typeof props.fill === 'object' ? `url(${props.fill.url})` : 'white'};

      ${typeof props.fill === 'object' &&
      css`
        background-size: cover;
        background-repeat: no-repeat;
        background-position: ${props.fill.position || 'center center'};
      `}
    `}

  ${(props) =>
    props.strong &&
    css`
      color: #000000;
      background-color: white;
      padding: 0 1.2rem;
    `}
`;

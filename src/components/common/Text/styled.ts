import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TextProps } from '.';

const TEXT_BREAK_POINTS = [
  1335, 1300, 1250, 1220, 1195, 1165, 1135, 1110, 1080, 1050, 1021, 995, 965, 936, 910, 880, 852,
  823, 795, 768, 737, 710, 692, 653, 625, 595, 567, 540, 510, 482, 456, 428, 396, 376,
];

export const TextColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (max-width: 1300px) {
    gap: 1.2rem;
  }

  @media screen and (max-width: 720px) {
    gap: 1rem;
  }

  @media screen and (max-width: 575px) {
    gap: 0.8rem;
  }

  @media screen and (max-width: 454px) {
    gap: 0.6rem;
  }
`;

export const TextRowContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  font-size: 8.8rem;
  font-weight: 800;
  gap: 1.2rem;

  ${TEXT_BREAK_POINTS.reduce((prev, curr, i) => {
    const size = (8.4 - 0.2 * i).toFixed(1);

    return css`
      ${prev}
      @media screen and (max-width: ${curr}px) {
        font-size: ${size}rem;
        span {
          height: ${size}rem;
        }
      }
    `.styles;
  }, '')}
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

      /* @media screen and (max-width: 1300px) {
        // padding: 0 1.6rem;
      } */
    `}
`;

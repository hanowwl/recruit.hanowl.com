import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface CloseState {
  close: false | true;
}

export const Button = styled.button<CloseState>`
  font-size: 2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  transition: all 0.2s;
  width: 100%;
  height: 4rem;
  border: none;
  text-align: left;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  margin-top: 2.5rem;
  background-color: transparent;
  color: white;
  border-radius: ${({ close }) => (close ? '0.5rem 0.5rem 0rem 0rem' : '0.5rem')};
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  color: white;
  text-align: left;
  overflow: hidden;
  max-height: 0;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  transition: max-height 0.3s ease-out;
`;

export const AnswerText = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.05rem;
  padding: 2rem 2.5rem 2rem 2.5rem;
  line-height: 1.8rem;
`;

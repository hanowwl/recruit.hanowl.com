import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const QuestionBoxContainer = styled.div`
  width: 100%;
  padding: 2.4rem 0.4rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.07);
`;

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
`;

export const QuestionText = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const QuestionAnswerContainer = styled.div<{ close: boolean }>`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
  color: #a4a4a4;
  overflow: hidden;
  transition: height 200ms;

  ul {
    list-style: disc;
    margin: 2rem 0 0 2.4rem;
  }
`;

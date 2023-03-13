import React, { useEffect, useRef, useState } from 'react';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

export interface QuestionBoxProps {
  question: string;
  answer: string;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({ question, answer }) => {
  const [questionClose, setQuestionClose] = useState<boolean>(true);
  const answerContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!answerContainerRef.current) return;

    const { scrollHeight } = answerContainerRef.current;
    answerContainerRef.current.style.height = questionClose === true ? '0px' : `${scrollHeight}px`;
  }, [questionClose]);

  return (
    <S.QuestionBoxContainer
      onClick={() => {
        setQuestionClose((prev) => !prev);
      }}
    >
      <S.QuestionContainer>
        <S.QuestionText>{question}</S.QuestionText>

        <FontAwesomeIcon icon={questionClose ? faPlus : faMinus} style={{ padding: '0 1.2rem' }} />
      </S.QuestionContainer>
      <S.QuestionAnswerContainer ref={answerContainerRef} close={questionClose}>
        <ul>
          <li>{answer}</li>
        </ul>
      </S.QuestionAnswerContainer>
    </S.QuestionBoxContainer>
  );
};

import React, { useRef, useState } from 'react';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { QnAItem } from '@/constant/qnaMenu';

import * as S from './styled';

interface QnASectionProps {
  question: string;
  answer: string;
}

export const QnASection: React.FC<QnASectionProps> = ({ question, answer }) => {
  const [closeList, setCloseList] = useState<boolean>(false);
  const listRef = useRef<any>(null);

  const foldList = () => {
    if (!listRef || !listRef.current) {
      return;
    }

    const style = listRef.current.style;

    if (closeList) {
      style.maxHeight = '0';
    } else if (!closeList) {
      style.maxHeight = `${listRef.current.scrollHeight}px`;
    }
    setCloseList(!closeList);
  };

  return (
    <>
      <S.Button close={closeList} onClick={foldList}>
        {question}
      </S.Button>
      <S.AnswerWrapper className="content" ref={listRef}>
        <S.AnswerText>{answer}</S.AnswerText>
      </S.AnswerWrapper>
    </>
  );
};

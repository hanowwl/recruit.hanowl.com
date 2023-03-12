import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import * as S from './styled';

export const QnAPage: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <S.QnAContainer>
      <S.Title>자주 묻는 질문</S.Title>
      <S.Menu
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        공통 질문
        {isOpened ? <FaChevronUp /> : <FaChevronDown />}
      </S.Menu>
    </S.QnAContainer>
  );
};

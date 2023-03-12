import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import { SelectMenuSection } from '@/components';
import { QNA_MENU_LIST } from '@/constant/qnaMenu';
import { QnASection } from '@/components/qna/QnASection';

import * as S from './styled';

export const QnAPage: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const location = useLocation();

  const onClick = () => {
    setIsOpened(!isOpened);
  };

  const checkActive = (href: string) => {
    return location.pathname === `/qna/${href}`;
  };

  const [windowDimension, detectHW] = useState({ winWidth: window.innerWidth });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return (
    <S.QnAContainer>
      <S.Title>자주 묻는 질문</S.Title>
      {windowDimension.winWidth <= 767 ? (
        <>
          <S.Menu
            onClick={() => {
              onClick();
            }}
          >
            {QNA_MENU_LIST.filter(({ href }) => checkActive(href))[0].text}
            {isOpened ? <FaChevronUp /> : <FaChevronDown />}
          </S.Menu>
          {isOpened && (
            <SelectMenuSection onClick={onClick} qnaMenuList={QNA_MENU_LIST} location={location} />
          )}
          {QNA_MENU_LIST.filter(({ href }) => checkActive(href))[0].list.map(
            ({ question, answer }, index) => (
              <QnASection key={index} question={question} answer={answer} />
            )
          )}
        </>
      ) : (
        <S.QnAContentContainer>
          <S.Menu
            onClick={() => {
              onClick();
            }}
          >
            {QNA_MENU_LIST.map(({ text, href }, index) => {
              return (
                <S.QnAMenuContent key={index} isActive={checkActive(href)} to={`/qna/${href}`}>
                  {text}
                </S.QnAMenuContent>
              );
            })}
          </S.Menu>
          <S.QnASectionWrapper>
            {QNA_MENU_LIST.filter(({ href }) => checkActive(href))[0].list.map(
              ({ question, answer }, index) => (
                <QnASection key={index} question={question} answer={answer} />
              )
            )}
          </S.QnASectionWrapper>
        </S.QnAContentContainer>
      )}
    </S.QnAContainer>
  );
};

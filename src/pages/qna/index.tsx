import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { QuestionBox } from '@/components';
import { QNA_MENU_LIST } from '@/constant';

import * as S from './styled';

export const QnAPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const questions = useMemo(() => QNA_MENU_LIST.find((v) => v.href === (teamId || '')), [teamId]);

  return (
    <div>
      <S.Title>자주 묻는 질문</S.Title>

      <S.QnAContainer>
        <S.QnATeamList>
          {QNA_MENU_LIST.map(({ text, href }) => {
            const isActive = href === (teamId || '');

            return (
              <li key={text}>
                <Link to={`/qna/${href}`}>
                  <S.QnaTeamButton fillWidth size="large" className={isActive ? 'active' : ''}>
                    {text}
                  </S.QnaTeamButton>
                </Link>
              </li>
            );
          })}
        </S.QnATeamList>
        <S.QnAContentContainer>
          <S.QnAQuestionList>
            {questions &&
              questions.list.map(({ question, answer }) => {
                return (
                  <li>
                    <QuestionBox question={question} answer={answer} />
                  </li>
                );
              })}
          </S.QnAQuestionList>
        </S.QnAContentContainer>
      </S.QnAContainer>
    </div>
  );
};

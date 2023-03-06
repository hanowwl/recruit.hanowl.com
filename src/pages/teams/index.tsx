import React from 'react';
import { useSearchParams } from 'react-router-dom';

import * as S from './styled';

import { TeamIntroduceSection } from '@/components/TeamIntroduceSection';
import { TEAM_LIST } from '@/constant';

export const TeamPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const teamName = searchParams.get('field');

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>현재 모집 중인 부문</S.Title>
        <S.TitleMessage>
          알찬 학교 생활을 보내고 싶나요? 선/후배들과 친해지고 싶나요?
          <br />
          인싸가 되고 싶나요? 그럼 드루와 드루와
        </S.TitleMessage>
      </S.TitleContainer>
      <S.TeamWrap>
        {TEAM_LIST.map(({ id, name }) => (
          <S.TeamTitle key={id} to={`?field=${id}`} isActive={teamName === id}>
            {name}
          </S.TeamTitle>
        ))}
      </S.TeamWrap>
      {TEAM_LIST.map(({ id, name, sections }) => {
        if (teamName === id) {
          return <TeamIntroduceSection sections={sections} />;
        }
      })}
      <div>
        <S.ApplyButton>지원하기</S.ApplyButton>
      </div>
    </S.Container>
  );
};

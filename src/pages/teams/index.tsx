import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as S from './styled';

import { TeamIntroduce } from '@/components';
import { TEAM_LIST } from '@/constant';

export const TeamPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const teamId = useMemo(() => searchParams.get('teamId') || TEAM_LIST[0].id, [searchParams]);
  const activeTeam = useMemo(() => TEAM_LIST.find((v) => v.id === teamId), [teamId]);

  return (
    <S.TeamPageContainer>
      <S.TeamPageTitleContainer>
        <S.Title>현재 모집 중인 부문</S.Title>
        <S.Description>
          알찬 학교 생활을 보내고 싶나요? 선/후배들과 친해지고 싶나요?
          <br />
          인싸가 되고 싶나요? 그럼 드루와 드루와
        </S.Description>
      </S.TeamPageTitleContainer>

      <S.TeamIntroduceContainer>
        <S.TeamList>
          {TEAM_LIST.map(({ id, name }) => (
            <S.TeamListItem key={id} isActive={teamId === id}>
              <S.TeamNameLink to={`?teamId=${id}`}>{name}</S.TeamNameLink>
            </S.TeamListItem>
          ))}
        </S.TeamList>
        {activeTeam && <TeamIntroduce sections={activeTeam.sections} />}
      </S.TeamIntroduceContainer>

      <div>
        <S.ApplyButton>지원하기</S.ApplyButton>
      </div>
    </S.TeamPageContainer>
  );
};

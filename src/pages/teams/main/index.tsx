import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { TeamIntroduce } from '@/components';
import { TEAM_LIST } from '@/constant';

import * as S from './styled';

export const TeamMainPage: React.FC = () => {
  const navigate = useNavigate();
  const { teamId } = useParams<{ teamId: string }>();
  const activeTeam = useMemo(() => TEAM_LIST.find((v) => v.id === teamId), [teamId]);

  useEffect(() => {
    if (TEAM_LIST.findIndex((v) => v.id === teamId) === -1)
      return navigate(`/teams/${TEAM_LIST[0].id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <S.TeamNameLink to={`/teams/${id}`}>{name}</S.TeamNameLink>
            </S.TeamListItem>
          ))}
        </S.TeamList>
        {activeTeam && <TeamIntroduce sections={activeTeam.sections} />}
      </S.TeamIntroduceContainer>

      <div>
        <Link to={`/teams/${teamId}/apply`}>
          <S.ApplyButton>지원하기</S.ApplyButton>
        </Link>
      </div>
    </S.TeamPageContainer>
  );
};

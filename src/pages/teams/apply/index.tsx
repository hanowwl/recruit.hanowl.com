import React, { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useGetResumeInputLazyQuery } from '@/graphql/generated/hooks';
import { TEAM_LIST } from '@/constant';
import { Input } from '@/components';
import { useToast } from '@/hooks';

import * as S from './styled';

export const TeamApplyPage: React.FC = () => {
  const { toast } = useToast();
  const { teamId } = useParams<{ teamId: string }>();
  const team = useMemo(() => TEAM_LIST.find((v) => v.id === teamId), [teamId]);
  const [fetch, { data, loading, error }] = useGetResumeInputLazyQuery({
    variables: { filter: { name: { eq: teamId } } },
  });
  const inputs = useMemo(() => {
    const resumeCase = data?.resume_caseCollection?.edges[0].node;
    const resumeInputs = resumeCase?.resume_case_inputCollection?.edges.map((v) => v.node);

    return resumeInputs || [];
  }, [data]);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error({ template: '지원서 폼을 로딩하는 도중 오류가 발생했어요' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  if (!teamId || !team) return <Navigate to="/teams/tech" />;
  return (
    <S.ApplyFormContainer>
      {loading && <>로딩 중</>}

      {data && (
        <>
          <S.ApplyFormTitle>{team.name} 지원서</S.ApplyFormTitle>
          <S.ApplyFormInputContainer>
            {inputs.map(({ resume_input }, i) => {
              if (!resume_input) return;

              const { name, type, requirement, max } = resume_input;
              return (
                <Input
                  type={type}
                  key={i}
                  label={`${name} ${requirement ? '(필수)' : ''}`}
                  message={max ? `최대 ${max}자 이내` : ''}
                />
              );
            })}

            <Input
              type="textarea"
              label="개인정보 수집 및 이용 동의"
              value={`지원자 개인 식별, 지원 의사 확인, 면접 진행, 고지 사항 전달, 지원자와의 원활한 의사소통을 목적으로 학번 및 이름, 전화번호, 이메일 주소와 같은 개인정보를 수집, 이용하는데 동의하십니까? (비동의시 지원이 불가합니다.)`}
              disabled
            />
          </S.ApplyFormInputContainer>
          <S.ApplyButton>동의 후 지원하기</S.ApplyButton>
        </>
      )}
    </S.ApplyFormContainer>
  );
};

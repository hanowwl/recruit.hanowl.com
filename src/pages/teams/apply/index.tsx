import React, { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  useCreateResumeMutation,
  useGetResumeAnswerQuery,
  useGetResumeInputQuery,
  useGetResumeQuery,
} from '@/graphql/generated/hooks';
import { TEAM_LIST } from '@/constant';
import { Input } from '@/components';
import { useToast } from '@/hooks';
import { useAuth } from '@/providers';
import { supabase } from '@/supabase';

import * as S from './styled';

export interface ApplyFormValues {
  [key: string]: string;
}

export const TeamApplyPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApplyFormValues>();
  const { toast } = useToast();
  const { profile } = useAuth();
  const { teamId } = useParams<{ teamId: string }>();
  const team = useMemo(() => TEAM_LIST.find((v) => v.id === teamId), [teamId]);

  const { data, loading, error } = useGetResumeInputQuery({
    variables: { filter: { name: { eq: teamId } } },
    onCompleted: () => {
      refetchResume();
    },
  });

  const [createResume] = useCreateResumeMutation({
    onCompleted: () => {
      refetchResume();
    },
    onError: (error) => {
      toast.error({ template: '지원서 생성 중 오류가 발생했어요' });
      console.log(error);
    },
  });

  const { data: resume, refetch: refetchResume } = useGetResumeQuery({
    variables: { filter: { user_id: { eq: profile?.id } } },
    onCompleted: (_data) => {
      const isEmpty = _data.resumeCollection?.edges.length === 0;
      if (isEmpty) {
        createResume({
          variables: {
            userId: profile?.id,
            caseId: data?.resume_caseCollection?.edges[0].node.id as number,
          },
        });
      }

      refetchAnswers();
    },
  });

  const { data: answerCollection, refetch: refetchAnswers } = useGetResumeAnswerQuery({
    variables: { filter: { resume_id: { eq: resume?.resumeCollection?.edges[0].node.id } } },
  });

  const inputs = useMemo(() => {
    const resumeCase = data?.resume_caseCollection?.edges[0].node;
    const resumeInputs = resumeCase?.resume_case_inputCollection?.edges.map((v) => v.node);

    return resumeInputs || [];
  }, [data]);

  const answers = useMemo(() => {
    return answerCollection?.resume_answerCollection?.edges.map((v) => v.node) || [];
  }, [answerCollection]);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error({ template: '지원서 폼을 로딩하는 도중 오류가 발생했어요' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    answers.forEach((v) => setValue(v.input_id.toString(), v.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  const onSubmit = async (formData: ApplyFormValues) => {
    try {
      const inputId = Object.keys(formData);

      await supabase.from('resume_answer').upsert(
        inputId.map((id) => ({
          id: answers.find((v) => v.input_id === parseInt(id))?.id,
          input_id: parseInt(id),
          resume_id: resume?.resumeCollection?.edges[0].node.id as number,
          value: formData[id] || '',
        }))
      );

      toast.success({ template: '지원서가 저장되었어요' });
    } catch (error) {
      console.error(error);
      toast.error({ template: '지원서를 저장하는 도중 오류가 발생했어요' });
    }
  };

  if (!teamId || !team) return <Navigate to="/teams/tech" />;
  return (
    <S.ApplyFormContainer onSubmit={handleSubmit(onSubmit)}>
      {loading && <>로딩 중</>}

      {data && (
        <>
          <S.ApplyFormTitle>{team.name} 지원서</S.ApplyFormTitle>
          <S.ApplyFormInputContainer>
            {inputs.map(({ resume_input }, i) => {
              if (!resume_input) return;

              const { name, type, requirement, min, max, id } = resume_input;
              const getMessage = () => {
                if (errors[id]?.message) return errors[id]?.message;
                if (min && max) return `최소 ${min}자 이상, 최대 ${max}자 이내`;
                if (min) return `최소 ${min}자 이상`;
                if (max) return `최대 ${max}자 이내`;

                return '';
              };

              return (
                <Input
                  type={type}
                  key={i}
                  label={`${name} ${requirement ? '(필수)' : ''}`}
                  message={getMessage()}
                  error={Boolean(errors[id]?.message)}
                  {...register(id.toString(), {
                    required: requirement ? '필수 입력값이에요' : false,
                    minLength: min
                      ? { value: min, message: `최소 ${min}자 이상 입력해주세요` }
                      : undefined,
                    maxLength: max
                      ? { value: max, message: `최대 ${max}자까지 입력할 수 있어요` }
                      : undefined,
                  })}
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

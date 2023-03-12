import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/components';
import { supabase } from '@/supabase';
import { useToast } from '@/hooks';
import { useAtom } from 'jotai';
import { accessTokenAtom } from '@/atoms/token';

import * as S from './styled';

interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [_, setAccessToken] = useAtom(accessTokenAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit = async (props: SignInFormValues) => {
    const { email, password } = props;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }
      return toast.success({ template: '로그인 성공! 😎' });
    } catch (error) {
      toast.error({ template: '로그인에 문제가 생겼어요! 다시 시도해주세요 😢' });
    }
  };

  return (
    <S.SignInForm onSubmit={handleSubmit(onSubmit)}>
      <S.AffiliationInfo>hanowl</S.AffiliationInfo>
      <S.SignInTitle>로그인</S.SignInTitle>
      <S.SignInInputContainer>
        <Input
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          {...register('email', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
          })}
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register('password', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다,',
            },
          })}
        />
      </S.SignInInputContainer>
      <S.SignInContainer>
        <span>회원가입 | 비밀번호 찾기</span>
        <button type="submit">로그인</button>
      </S.SignInContainer>
    </S.SignInForm>
  );
};

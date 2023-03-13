import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button, Input } from '@/components';
import { useAuth } from '@/providers';

import * as S from './styled';

interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInPage: React.FC = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit = async (props: SignInFormValues) => {
    const { email, password } = props;
    await signIn({ email, password });
  };

  return (
    <S.SignInForm onSubmit={handleSubmit(onSubmit)}>
      <S.AffiliationInfo>HANOWL</S.AffiliationInfo>
      <S.SignInTitle>로그인</S.SignInTitle>
      <S.SignInInputContainer>
        <Input
          label="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
          message={errors.email?.message}
          error={Boolean(errors.email?.message)}
          {...register('email', {
            required: '올바른 이메일을 입력해주세요.',
          })}
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="on"
          message={errors.password?.message}
          error={Boolean(errors.password?.message)}
          {...register('password', {
            required: '올바른 비밀번호를 입력해주세요.',
          })}
        />
      </S.SignInInputContainer>
      <S.SignInContainer>
        <S.SignInLinkContainer>
          <Link to="/auth/signup">회원가입</Link>
          <span>|</span>
          <Link to="/auth/forgot-password">비밀번호 찾기</Link>
        </S.SignInLinkContainer>
        <Button type="submit">로그인</Button>
      </S.SignInContainer>
    </S.SignInForm>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/components';

// import { LoginFormValues } from 'src/api/user';
// import { useLogin } from 'src/hook/query';

// import { AuthLabelTextField, AuthLayout, Button, ErrorMessage, Input } from 'src/components';

import * as S from './styled';

interface LoginFormValues {
  id: string;
  password: string;
}

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  // const { mutate } = useLogin();

  const onSubmit = ({ id, password }: LoginFormValues) => {
    console.log({ id, password });
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
          {...register('id', {
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

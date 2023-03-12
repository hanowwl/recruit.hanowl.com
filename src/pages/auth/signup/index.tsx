import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { SCHOOL } from '@/constant';
import { Input } from '@/components';
import { supabase } from '@/supabase';
import { useToast } from '@/hooks';
import { useMutation } from '@apollo/client';

import { InsertUserDocument } from '../../../graphql/generated/hooks';

import * as S from './styled';

interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
  passwordCheck: string;
  studentDepart: string;
  studentGrade: number;
  studentClass: number;
  studentNumber: number;
}

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [insertUser, { data, loading, error }] = useMutation(InsertUserDocument);
  const [isAllValuesEntered, setIsAllValuesEntered] = useState<boolean>(false);
  const { toast } = useToast();

  const [departments, setDepartments] = useState<string[]>([]);
  const [classRoom, setClassRoom] = useState<number[]>([]);

  const { GRADES, DEPARTMENT_NEW, DEPARTMENT_OLD, ONE_CLASS_ROOM, TWO_CLASS_ROOM } = SCHOOL;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (props: SignUpFormValues) => {
    const { email, password, name, studentDepart, studentClass, studentGrade, studentNumber } =
      props;

    try {
      const { data } = await supabase.auth.signUp({
        email,
        password,
      });

      if (data.user) {
        const {
          data: {},
        } = await insertUser({
          variables: {
            id: data.user?.id,
            name,
            studentDepart,
            studentClass,
            studentGrade,
            studentNumber,
            phone: '01077568431',
          },
        });

        return toast.success({ template: '가입 성공! 뭔가 더 가까워진 느낌? 😎' });
      }

      toast.error({ template: '이미 가입한 계정이 있어요 😕' });
    } catch (error) {
      toast.error({ template: '가입에 문제가 생겼어요! 다음에 다시 시도해주세요 😢' });
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.studentGrade === 1) {
        setDepartments(DEPARTMENT_NEW);
        setClassRoom(TWO_CLASS_ROOM);
      } else if (value.studentGrade === 2) {
        setDepartments(DEPARTMENT_OLD);
        setClassRoom(TWO_CLASS_ROOM);
        if (value.studentDepart === '네트워크보안과') {
          setClassRoom(ONE_CLASS_ROOM);
        }
      } else if (value.studentGrade === 3) {
        setDepartments(DEPARTMENT_OLD);
        setClassRoom(TWO_CLASS_ROOM);
        if (value.studentDepart === '게임과') {
          setClassRoom(ONE_CLASS_ROOM);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [DEPARTMENT_NEW, DEPARTMENT_OLD, ONE_CLASS_ROOM, TWO_CLASS_ROOM, watch]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (
        value.name &&
        value.password &&
        value.passwordCheck &&
        value.name &&
        value.studentClass &&
        value.studentDepart &&
        value.studentGrade &&
        value.studentNumber
      )
        return setIsAllValuesEntered(true);
      return setIsAllValuesEntered(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <S.AffiliationInfo>hanowl</S.AffiliationInfo>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.SignUpInputContainer>
        <Input
          label="이메일"
          type="text"
          error={!!errors.email?.message}
          message={errors.email?.message}
          {...register('email', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
          })}
        />
        <Input
          label="비밀번호"
          type="password"
          error={!!errors.password?.message}
          message={errors.password?.message}
          {...register('password', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다,',
            },
          })}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          error={!!errors.passwordCheck?.message}
          message={errors.passwordCheck?.message}
          {...register('passwordCheck', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
              message: '8~16자 영문, 숫자, 특수문자 조합을 입력해주세요',
            },
            validate: (value) =>
              value === password.current || '입력한 비밀번호와 일치하지 않습니다.',
          })}
        />
        <Input
          label="이름"
          type="text"
          error={!!errors.name?.message}
          message={errors.name?.message}
          {...register('name', {
            required: '이름을 입력해주세요.',
            pattern: {
              value: /^[가-힣]{2,4}$/,
              message: '2~4자, 한글로 이루어진 이름을 입력해주세요',
            },
          })}
        />
        <S.SignUpSelectContainer>
          <S.SignUpLabel>학과/반/번호</S.SignUpLabel>
          <S.SignUpSelect
            {...register('studentGrade', {
              required: '필수 응답 항목입니다.',
              valueAsNumber: true,
            })}
          >
            <option>학년</option>
            {GRADES.map((grade) => (
              <option value={grade}>{grade}학년</option>
            ))}
          </S.SignUpSelect>
          <S.Step3SelectListContainer>
            <S.SignUpSelect
              {...register('studentDepart', {
                required: '필수 응답 항목입니다.',
              })}
            >
              <option>학과</option>
              {departments.map((department) => (
                <option value={department}>{department}</option>
              ))}
            </S.SignUpSelect>
            <S.SignUpSelect
              {...register('studentClass', {
                required: '필수 응답 항목입니다.',
                valueAsNumber: true,
              })}
            >
              <option>반</option>
              {classRoom.map((room) => (
                <option value={room}>{room}반</option>
              ))}
            </S.SignUpSelect>
            <S.SignUpSelect
              {...register('studentNumber', {
                required: '필수 응답 항목입니다.',
                valueAsNumber: true,
              })}
            >
              <option>번호</option>
              {Array.from(Array(30).keys()).map((_, i) => (
                <option value={i + 1}>{i + 1}번</option>
              ))}
            </S.SignUpSelect>
          </S.Step3SelectListContainer>
        </S.SignUpSelectContainer>
      </S.SignUpInputContainer>
      <S.SignUpContainer>
        <span>
          이미 계정이 있으신가요? <span>로그인</span>
        </span>
        <button type="submit" disabled={!isAllValuesEntered}>
          가입하기
        </button>
      </S.SignUpContainer>
    </S.SignUpForm>
  );
};

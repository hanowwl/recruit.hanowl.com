import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { SCHOOL } from '@/constant';
import { Input } from '@/components';
import { useAuth } from '@/providers';

import * as S from './styled';

interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
  phone: string;
  passwordCheck: string;
  studentDepart: string;
  studentGrade: number;
  studentClass: number;
  studentNumber: number;
}

export const SignUpPage: React.FC = () => {
  const { signUp } = useAuth();
  const [isAllValuesEntered, setIsAllValuesEntered] = useState<boolean>(false);

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

  const onSubmit = async (values: SignUpFormValues) => {
    await signUp(values);
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
      <S.AffiliationInfo>HANOWL</S.AffiliationInfo>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.SignUpInputContainer>
        <Input
          label="이메일"
          type="text"
          error={!!errors.email?.message}
          message={errors.email?.message}
          {...register('email', {
            required: '올바른 이메일을 입력해주세요',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '잘못된 이메일 주소에요. 다시 입력해주세요.',
            },
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
        <Input
          label="전화번호"
          type="text"
          error={!!errors.phone?.message}
          message={errors.phone?.message}
          pattern="[0-9]*"
          {...register('phone', {
            required: '전화번호를 입력해주세요.',
            pattern: {
              value: /01[0-1, 7][0-9]{7,8}$/,
              message: '잘못된 전화번호에요. 다시 입력해주세요',
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
        <S.SignUpLinkContainer>
          이미 계정이 있으신가요? <Link to="/auth/signin">로그인</Link>
        </S.SignUpLinkContainer>
        <button type="submit" disabled={!isAllValuesEntered}>
          가입하기
        </button>
      </S.SignUpContainer>
    </S.SignUpForm>
  );
};

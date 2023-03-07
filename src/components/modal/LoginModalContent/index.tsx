import React from 'react';

import * as S from './styled';

export const LoginModalContent: React.FC = () => {
  return (
    <S.LoginModalContainer>
      <S.LoginModalTitle>한울에 오신걸 환영해요 :)</S.LoginModalTitle>
      <p>
        로그인 후, 얼른 학생회 지원서를 작성해요!
        <br />
        시간이 얼마 안남았어요
      </p>
    </S.LoginModalContainer>
  );
};

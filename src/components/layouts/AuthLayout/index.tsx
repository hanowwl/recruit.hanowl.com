import { Footer } from '@/components';

import * as S from './styled';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <S.AuthLayoutContainer>
      <S.AuthLayoutWrapper>{children}</S.AuthLayoutWrapper>
      <Footer />
    </S.AuthLayoutContainer>
  );
};

import { ICON_LIST } from '@/constant';

import * as S from './styled';
//RiFacebookFill

export const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterTitle>OWL</S.FooterTitle>
      <S.IconContainer>
        {ICON_LIST.map(({ icon, href }, index) => (
          <S.IconWrapper to={href} key={index}>
            {icon}
          </S.IconWrapper>
        ))}
      </S.IconContainer>
      <S.FooterDescription>© HANOWL. 2023 All rights reserved</S.FooterDescription>
    </S.FooterWrapper>
  );
};

import { ICON_LIST } from '@/constant';

import * as S from './styled';

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterTitle>OWL</S.FooterTitle>
      <S.FooterIcon>
        {ICON_LIST.map(({ icon, href }, index) => (
          <S.IconWrapper to={href} key={index}>
            {icon}
          </S.IconWrapper>
        ))}
      </S.FooterIcon>
      <S.FooterDescription>© HANOWL. 2023 All rights reserved</S.FooterDescription>
    </S.FooterContainer>
  );
};

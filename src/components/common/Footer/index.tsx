import { FaFacebookF, FaInstagram, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

import * as S from './styled';

export const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterTitle>OWL</S.FooterTitle>
      <S.IconContainer>
        <MdMailOutline />
        <FaBehance />
        <FaFacebookF />
        <FaInstagram />
      </S.IconContainer>
      <S.FooterDescription>© HANOWL. 2023 All rights reserved</S.FooterDescription>
    </S.FooterWrapper>
  );
};

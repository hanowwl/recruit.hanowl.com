import { useLocation, useMatch } from 'react-router-dom';

import { QNA_MENU_LIST } from '@/constant/qnaMenu';

import * as S from './styled';

export interface SelectMenuSectionProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SelectMenuSection: React.FC<SelectMenuSectionProps> = ({ onClick }) => {
  const location = useLocation();

  return (
    <S.QnAMenuWrapper onClick={onClick}>
      <S.QnAMenuContentWrapper>
        {QNA_MENU_LIST.map(({ text, href }, index) => {
          const isActive = location.pathname === `/qna/${href}`;
          return (
            <S.QnAMenuContent key={index} isActive={isActive} to={`/qna/${href}`}>
              {text}
            </S.QnAMenuContent>
          );
        })}
      </S.QnAMenuContentWrapper>
    </S.QnAMenuWrapper>
  );
};

import { useLocation } from 'react-router-dom';

import { QnAMenuItem } from '@/constant';

import * as S from './styled';

export interface SelectMenuSectionProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  qnaMenuList: QnAMenuItem[];
  location: ReturnType<typeof useLocation>;
}

export const SelectMenuSection: React.FC<SelectMenuSectionProps> = ({
  onClick,
  qnaMenuList,
  location,
}) => {
  return (
    <S.QnAMenuWrapper onClick={onClick}>
      <S.QnAMenuContentWrapper>
        {qnaMenuList.map(({ text, href }, index) => {
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

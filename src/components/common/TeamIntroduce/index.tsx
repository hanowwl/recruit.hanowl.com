import React from 'react';

import { TeamSection } from '@/constant';

import * as S from './styled';

interface TeamIntroduceProps {
  sections: TeamSection[];
}

export const TeamIntroduce: React.FC<TeamIntroduceProps> = ({ sections }) => {
  return (
    <S.TeamIntroduceContainer>
      {sections.map(({ title, text, list }) => {
        return (
          <section key={title}>
            <S.SectionTitle>{title}</S.SectionTitle>

            {text && <S.SectionDescription>{text}</S.SectionDescription>}
            {list && (
              <S.SectionListUl>
                {list.map((item, i) => (
                  <S.SectionListItem key={i}>{item}</S.SectionListItem>
                ))}
              </S.SectionListUl>
            )}
          </section>
        );
      })}
    </S.TeamIntroduceContainer>
  );
};

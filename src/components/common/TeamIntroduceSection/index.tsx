import React from 'react';

import * as S from './styled';

import { TeamSection } from '@/constant/teams';

interface TeamIntroduceSectionProps {
  sections: TeamSection[];
}

export const TeamIntroduceSection: React.FC<TeamIntroduceSectionProps> = ({ sections }) => {
  return (
    <S.TeamIntroduceContainer>
      {sections.map(({ title, text, list }) => {
        return (
          <section>
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

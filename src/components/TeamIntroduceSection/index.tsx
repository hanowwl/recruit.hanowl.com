import React from 'react';

import * as S from './styled';

import { TeamSection } from '@/constant/teams';

interface TeamIntroduceSectionProps {
  sections: TeamSection[];
}

export const TeamIntroduceSection: React.FC<TeamIntroduceSectionProps> = ({ sections }) => {
  return (
    <S.Container>
      {sections.map((section) => {
        return (
          <section>
            <div>
              <S.Title>{section.title}</S.Title>
            </div>
            {section.text && <S.Description>{section.text}</S.Description>}
            {section.list && (
              <S.SubTitleUl>
                {section.list.map((v, i) => {
                  return <S.SubTitleLi key={i}>{v}</S.SubTitleLi>;
                })}
              </S.SubTitleUl>
            )}
          </section>
        );
      })}
    </S.Container>
  );
};

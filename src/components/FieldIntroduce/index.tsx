import React from 'react';

import * as S from './styled';

import {
  isTeamTextSectionProps,
  TeamSection,
  TeamListSection,
  TeamTextSection,
} from '@/constant/teams';

type IntroductionType = {
  wantedPerson: string;
  haveExperience: string;
};

interface FieldIntroduceProps {
  sections: TeamSection[];
}

export const FieldIntroduce: React.FC<FieldIntroduceProps> = ({ sections }) => {
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

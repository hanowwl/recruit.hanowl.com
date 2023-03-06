import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { ApplyButton } from '../button';

import * as S from './styled';

interface FieldIntroduceProps {
  title: string;
  description: string;
  description2: string;
  introduction: {
    wantedPerson: string;
    haveExperience: string;
  }[];
}

export const FieldIntroduce: React.FC<FieldIntroduceProps> = ({
  title,
  description,
  description2,
  introduction,
}) => {
  return (
    <S.Wrap>
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>
          {description}
          <br />
          <br />
          {description2}
        </S.Description>
      </div>
      <br />
      <br />
      <div>
        <S.SubTitle>인재상</S.SubTitle>
        <S.SubTitleUl>
          {introduction.map(({ wantedPerson }) => (
            <S.SubTitleLi>{wantedPerson}</S.SubTitleLi>
          ))}
        </S.SubTitleUl>
      </div>
      <div>
        <S.SubTitle>우대사항</S.SubTitle>
        <S.SubTitleUl>
          {introduction.map(({ haveExperience }) => (
            <S.SubTitleLi>{haveExperience}</S.SubTitleLi>
          ))}
        </S.SubTitleUl>
      </div>
      <br />
      <br />
      <br />
      <ApplyButton />
    </S.Wrap>
  );
};

import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import * as S from './styled';

interface FieldIntroduceProps {
  title: string;
  description: string;
  description2: string;
}

export const FieldIntroduce: React.FC<FieldIntroduceProps> = ({
  title,
  description,
  description2,
}) => {
  const SubTitleLi: { wantedPerson: string; haveExperience: string }[] = [
    {
      wantedPerson: '프로젝트 참여에 적극으로 참여할 수 있는 분',
      haveExperience: '프론트엔드/백엔드 개발 경험이 있는 분',
    },
    {
      wantedPerson: '스터디/코드리뷰 등 부서 활동에 적극적으로 참여할 수 있는 분',
      haveExperience: '직접 서비스 운영 및 배포를 진행해본 경험이 있는 분',
    },
    {
      wantedPerson: '수다쟁이 환영',
      haveExperience: 'Git/Github 등을 사용하여 버전관리 경험을 해본 분.',
    },
  ];
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
          {SubTitleLi.map(({ wantedPerson }) => (
            <S.SubTitleLi>{wantedPerson}</S.SubTitleLi>
          ))}
        </S.SubTitleUl>
      </div>
      <div>
        <S.SubTitle>우대사항</S.SubTitle>
        <S.SubTitleUl>
          {SubTitleLi.map(({ haveExperience }) => (
            <S.SubTitleLi>{haveExperience}</S.SubTitleLi>
          ))}
        </S.SubTitleUl>
      </div>
    </S.Wrap>
  );
};

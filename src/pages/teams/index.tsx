import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import * as S from './styled';

export const TeamPage: React.FC = () => {
  const field: { title: string; id: string }[] = [
    {
      title: '기능부',
      id: 'develop',
    },
    {
      title: '홍보부',
      id: 'marketing',
    },
    {
      title: '행사기획부',
      id: 'event',
    },
    {
      title: '안전부',
      id: 'safety',
    },
    {
      title: '총모부',
      id: 'general',
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('active'));
  const myQueryParam = searchParams.get('active');

  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.Title>현재 모집 중인 부문</S.Title>
        <S.TitleMessage>
          알찬 학교 생활을 보내고 싶나요?, 선/후배들과 친해지고 싶나요?인싸가 되고 싶나요?, 그럼
          드루와 드루와
        </S.TitleMessage>
      </S.TitleWrap>
      <S.fieldWrap>
        {field.map(({ id, title }) => (
          <S.fieldTitle key={id} to={`?active=${id}`} isActive={myQueryParam === id}>
            {title}
          </S.fieldTitle>
        ))}
      </S.fieldWrap>
    </S.Wrap>
  );
};

import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { FieldIntroduce } from '../../components/field-introduce';
import {
  developDescription,
  developDescription2,
  developIntroduce,
  eventDescription,
  eventDescription2,
  eventIntroduce,
  generalDescription,
  generalDescription2,
  generalIntroduce,
  marketingDescription,
  marketingDescription2,
  marketingIntroduce,
  safetyDescription,
  safetyDescription2,
  safetyIntroduce,
} from '../../constant';

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
  const myQueryParam = searchParams.get('active');

  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.Title>현재 모집 중인 부문</S.Title>
        <S.TitleMessage>
          알찬 학교 생활을 보내고 싶나요? 선/후배들과 친해지고 싶나요?
          <br />
          인싸가 되고 싶나요? 그럼 드루와 드루와
        </S.TitleMessage>
      </S.TitleWrap>
      <S.fieldWrap>
        {field.map(({ id, title }) => (
          <S.fieldTitle key={id} to={`?active=${id}`} isActive={myQueryParam === id}>
            {title}
          </S.fieldTitle>
        ))}
      </S.fieldWrap>
      {myQueryParam === 'develop' ? (
        <FieldIntroduce
          title="기능부 소개"
          description={developDescription}
          description2={developDescription2}
          introduction={developIntroduce}
        />
      ) : myQueryParam === 'marketing' ? (
        <FieldIntroduce
          title="홍보부 소개"
          description={marketingDescription}
          description2={marketingDescription2}
          introduction={marketingIntroduce}
        />
      ) : myQueryParam === 'event' ? (
        <FieldIntroduce
          title="행사기획부 소개"
          description={eventDescription}
          description2={eventDescription2}
          introduction={eventIntroduce}
        />
      ) : myQueryParam === 'safety' ? (
        <FieldIntroduce
          title="안전부 소개"
          description={safetyDescription}
          description2={safetyDescription2}
          introduction={safetyIntroduce}
        />
      ) : myQueryParam === 'general' ? (
        <FieldIntroduce
          title="총모부 소개"
          description={safetyDescription}
          description2={safetyDescription2}
          introduction={safetyIntroduce}
        />
      ) : (
        <FieldIntroduce
          title="기능부 소개"
          description={generalDescription}
          description2={generalDescription2}
          introduction={generalIntroduce}
        />
      )}
    </S.Wrap>
  );
};

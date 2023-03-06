import React from 'react';
import { useSearchParams } from 'react-router-dom';

import * as S from './styled';

import { develop, event, general, marketing, safety } from '@/constant/field-introduce';
import { FieldIntroduce } from '@/components/FieldIntroduce';
import { FIELD } from '@/constant/field';

export const TeamPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fieldName = searchParams.get('field');

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>현재 모집 중인 부문</S.Title>
        <S.TitleMessage>
          알찬 학교 생활을 보내고 싶나요? 선/후배들과 친해지고 싶나요?
          <br />
          인싸가 되고 싶나요? 그럼 드루와 드루와
        </S.TitleMessage>
      </S.TitleContainer>
      <S.FieldWrap>
        {FIELD.map(({ id, title }) => (
          <S.FieldTitle key={id} to={`?field=${id}`} isActive={fieldName === id}>
            {title}
          </S.FieldTitle>
        ))}
      </S.FieldWrap>
      {fieldName === 'develop' ? (
        <FieldIntroduce
          title="기능부 소개"
          description={develop.description}
          description2={develop.description2}
          introduction={develop.introduce}
        />
      ) : fieldName === 'marketing' ? (
        <FieldIntroduce
          title="홍보부 소개"
          description={marketing.description}
          description2={marketing.description2}
          introduction={marketing.introduce}
        />
      ) : fieldName === 'event' ? (
        <FieldIntroduce
          title="행사기획부 소개"
          description={event.description}
          description2={event.description2}
          introduction={event.introduce}
        />
      ) : fieldName === 'safety' ? (
        <FieldIntroduce
          title="안전부 소개"
          description={safety.description}
          description2={safety.description2}
          introduction={safety.introduce}
        />
      ) : fieldName === 'general' ? (
        <FieldIntroduce
          title="총모부 소개"
          description={general.description}
          description2={general.description2}
          introduction={general.introduce}
        />
      ) : (
        <FieldIntroduce
          title="기능부 소개"
          description={general.description}
          description2={general.description2}
          introduction={general.introduce}
        />
      )}
      <br />
      <br />
      <div>
        <S.ApplyButton>지원하기</S.ApplyButton>
      </div>
    </S.Container>
  );
};

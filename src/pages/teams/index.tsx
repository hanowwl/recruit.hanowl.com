import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { FieldIntroduce } from '../../components/field-introduce';

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
      {myQueryParam === 'develop' ? (
        <FieldIntroduce
          title="기능부 소개"
          description="학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러 프로젝트에
        참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수 있어요. 그리고
        기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요."
          description2="기능부는 배울 의지가 있고 열정 있는 친구들을 기다리고 있어요!"
        />
      ) : myQueryParam === 'marketing' ? (
        <h1>marketing</h1>
      ) : myQueryParam === 'marketing' ? (
        <h1>event</h1>
      ) : myQueryParam === 'event' ? (
        <h1>event</h1>
      ) : myQueryParam === 'safety' ? (
        <h1>safety</h1>
      ) : myQueryParam === 'general' ? (
        <h1>general</h1>
      ) : (
        <FieldIntroduce
          title="기능부 소개"
          description="학생회 기능부는 주로 교내에서 사용할 서비스를 만들어요. 매년 운영되는 한세톤(해커톤),
        한세어울림마당(축제) 등에서 사용될 서비스를 만들고 배포/운영까지 담당해요. 여러 프로젝트에
        참여하면서 기획/디자인/개발/운영 모든 단계에 참여하면서, 경험을 쌓을 수 있어요. 그리고
        기능부는 서로 지식을 공유하고 자극이 되는 관계를 지향해요."
          description2="기능부는 배울 의지가 있고 열정 있는 친구들을 기다리고 있어요!"
        />
      )}
    </S.Wrap>
  );
};

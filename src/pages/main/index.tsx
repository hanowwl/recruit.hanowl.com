import React from 'react';
import { Link } from 'react-router-dom';

import { EtcActivityPNG, FestivalPNG, HanseithonPNG } from '@/assets';
import { MainSection, ScheduleSection } from '@/components/main';
import { useCounter, useScrollFadeIn } from '@/hooks';

import * as S from './styled';

export const MENU_CONSTANTS = [
  {
    title: '기능부',
    href: '/teams/tech',
    background: '#212021',
  },
  {
    title: '홍보부',
    href: '/teams/design',
    background: '#DD9A34',
  },
  {
    title: '행사기획부',
    href: '/teams/event-plan',
    background: '#CF3737',
  },
  {
    title: '학예체육부',
    href: '/teams/exercise',
    background: '#9DDD34',
  },
  {
    title: '안전부',
    href: '/teams/safety',
    background: '#34DD78',
  },
  {
    title: '총무부',
    href: '/teams/account',
    background: '#34AADD',
  },
  {
    title: '도서부',
    href: '/teams/book',
    background: '#4C34DD',
  },
  {
    title: '방송부',
    href: '/teams/broadcast',
    background: '#8934DD',
  },
];

export const MainPage: React.FC = () => {
  const animation1 = useScrollFadeIn<HTMLHeadingElement>('up', 1);
  const animation2 = useScrollFadeIn<HTMLHeadingElement>('up', 1);
  const animation3 = useScrollFadeIn<HTMLHeadingElement>('up', 1);
  const animation4 = useScrollFadeIn<HTMLHeadingElement>('up', 1);
  const animation5 = useScrollFadeIn<HTMLHeadingElement>('up', 1);

  const { count: campaignCount, ref: campaignRef } = useCounter(4, 50);
  const { count: peopleCount, ref: peopleRef } = useCounter(27, 50);

  return (
    <>
      <MainSection />
      <S.SectionConatiner>
        <S.Title {...animation1}>
          변화를 열망하는 사람들이 모여, <br /> 새로운 학교를 만들어요 😎
        </S.Title>
        <S.CampaignContainer {...animation2}>
          <div>
            <S.CampaignTitle>매년 진행 행사 수</S.CampaignTitle>
            <S.CampaignCount ref={campaignRef}>+ {campaignCount}건</S.CampaignCount>
          </div>
          <div>
            <S.CampaignTitle>전체 학생회 인원</S.CampaignTitle>
            <S.CampaignCount ref={peopleRef}>{peopleCount}명</S.CampaignCount>
          </div>
        </S.CampaignContainer>
      </S.SectionConatiner>

      <S.SectionConatiner>
        <div>
          <S.TeamStorySectionTitle {...animation3}>Team Story</S.TeamStorySectionTitle>
          <S.TeamStorySectionDescription {...animation4}>
            학생회 한울에서는 개인의 성장 뿐만 아닌 학교 전체에 기여하며 <br />
            한세톤, 한세어울림마당 등 여러 활동에 참여할 수 있어요!
          </S.TeamStorySectionDescription>
        </div>
        <S.TeamStoryContainer {...animation5}>
          <S.TeamStoryItemContainer>
            <S.TeamStoryImage src={HanseithonPNG} />
            <S.TeamStoryItemText>🚀 hanseithon</S.TeamStoryItemText>
          </S.TeamStoryItemContainer>

          <S.TeamStoryItemContainer>
            <S.TeamStoryImage src={FestivalPNG} />
            <S.TeamStoryItemText>🧞‍♂️ 한세어울림마당</S.TeamStoryItemText>
          </S.TeamStoryItemContainer>

          <S.TeamStoryItemContainer>
            <S.TeamStoryImage src={EtcActivityPNG} />
            <S.TeamStoryItemText>😎 이외 행사</S.TeamStoryItemText>
          </S.TeamStoryItemContainer>
        </S.TeamStoryContainer>
      </S.SectionConatiner>
      <ScheduleSection />

      <S.SectionConatiner style={{ paddingTop: '10rem' }}>
        <S.AboutStudentGovernment>
          학생회 한울이 바꿀 학교 <br />
          학생을 위한 학교를 만들고자 합니다
        </S.AboutStudentGovernment>
        <S.AboutStudentGovernmentContainer>
          {MENU_CONSTANTS.map((menu, i) => {
            return (
              <Link to={menu.href} key={i}>
                <S.AboutStudentGovernmentItem background={menu.background}>
                  {menu.title}
                </S.AboutStudentGovernmentItem>
              </Link>
            );
          })}
        </S.AboutStudentGovernmentContainer>
      </S.SectionConatiner>
    </>
  );
};

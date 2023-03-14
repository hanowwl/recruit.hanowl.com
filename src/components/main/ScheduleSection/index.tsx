import { SCHEDULE_LIST } from '@/constant';
import { useScrollFadeIn } from '@/hooks';

import * as S from './styled';

export const ScheduleSection: React.FC = () => {
  const animation1 = useScrollFadeIn<HTMLHeadingElement>('up', 1);
  const animation2 = useScrollFadeIn<HTMLHeadingElement>('up', 1);

  return (
    <S.ScheduleWrapper>
      <S.ScheduleContainer>
        <S.Title {...animation1}>
          학생회는 오늘도 <br />
          새로운 학교를 만들어가고 있습니다
        </S.Title>
        <S.Schedule {...animation2}>
          <S.ScheduleLine />
          <S.ScheduleContentWrapper>
            {SCHEDULE_LIST.map(({ date, content }, index) => (
              <S.ScheduleContentContainer key={index}>
                <S.ScheduleEllipse />
                <div style={{ position: 'relative', bottom: '1.2rem' }}>
                  <S.ScheduleDate>{date}</S.ScheduleDate>
                  <S.ScheduleContent>{content}</S.ScheduleContent>
                </div>
              </S.ScheduleContentContainer>
            ))}
          </S.ScheduleContentWrapper>
        </S.Schedule>
      </S.ScheduleContainer>
    </S.ScheduleWrapper>
  );
};

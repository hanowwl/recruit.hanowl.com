import * as S from './styled';

export interface ScheduleItem {
  date: string;
  content: string;
}

export interface ScheduleProps {
  schedule: ScheduleItem[];
}

export const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  return (
    <S.SectionContainer>
      <S.Container>
        <S.Title>
          학생회는 오늘도 <br />
          새로운 학교를 만들어가고 있습니다
        </S.Title>
        <S.ScheduleContainer>
          <S.ScheduleLine />
          <S.Schedule>
            {schedule.map(({ date, content }) => (
              <div style={{ marginBottom: '3rem' }}>
                <S.ScheduleDate>{date}</S.ScheduleDate>
                <S.ScheduleContent>{content}</S.ScheduleContent>
              </div>
            ))}
          </S.Schedule>
        </S.ScheduleContainer>
      </S.Container>
    </S.SectionContainer>
  );
};

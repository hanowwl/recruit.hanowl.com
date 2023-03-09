import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  margin-top: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  /* border: 1px solid red; */
`;

export const ScheduleContainer = styled.div`
  display: flex;
  align-self: flex-start;
  /* border: 1px solid blue; */
  justify-content: space-between;
  padding-left: 3rem;
  margin: 6rem 0;
`;

export const ScheduleLine = styled.span`
  width: 0.3rem;
  height: 24rem;
  border: 1.5px solid #575757;
  margin-right: 2rem;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleDate = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
  color: #969696;
`;

export const ScheduleContent = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ScheduleWrapper = styled.section`
  margin-top: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 18rem;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  line-height: 6rem;
  font-weight: 600;
`;

export const Schedule = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  padding-left: 3rem;
  margin: 6rem 0;
`;

export const ScheduleLine = styled.span`
  width: 0.3rem;
  height: 30rem;
  border: 1.5px solid #575757;
  margin-right: 2rem;
`;

export const ScheduleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:first-of-type > div:first-of-type > div:first-of-type {
    border: 1px solid white;
  }
`;

export const ScheduleEllipse = styled.div`
  position: relative;
  right: 2.8rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: #575757;
  margin-right: 1rem;
`;

export const ScheduleContentContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
  bottom: 1rem;
`;

export const ScheduleDate = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  color: #969696;
`;

export const ScheduleContent = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

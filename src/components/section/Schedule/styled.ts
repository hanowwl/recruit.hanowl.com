import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
`;

export const ScheduleContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  padding-left: 3rem;
  margin: 6rem 0;
`;

export const ScheduleLine = styled.span`
  width: 0.3rem;
  height: 28rem;
  border: 1.5px solid #575757;
  margin-right: 2rem;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleEllipse = styled.div<{ isActive: boolean }>`
  position: relative;
  right: 2.8rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #575757;
  margin-right: 1rem;
  ${(props) =>
    props.isActive &&
    css`
      border: 1px solid white;
    `}
`;

export const ScheduleContentContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
  bottom: 1rem;
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

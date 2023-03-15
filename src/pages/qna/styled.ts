import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Button } from '@/components';

export const QnAContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const QnATeamList = styled.ul`
  min-width: 12rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
`;

export const QnaTeamButton = styled(Button)`
  justify-content: flex-start;
  color: rgb(117, 122, 128);
  background-color: transparent;

  &:hover {
    color: #ffffff;
    background-color: transparent;
  }

  &.active {
    color: #ffffff;
  }
`;

export const QnAContentContainer = styled.div`
  flex: 1 1 auto;
  padding-left: 2rem;
`;

export const QnAQuestionList = styled.ul``;

export const QnAButton = styled.div`
  width: 100%;
  padding: 2.4rem 0.4rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
`;

export const QnAQuestionText = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

export const QnAAnswerContainer = styled.div`
  height: 0;
  overflow: hidden;

  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 2rem;
  color: #a4a4a4;

  ul {
    list-style: disc;
    margin-left: 2.4rem;
  }
`;

export const Title = styled.h1`
  margin: 3rem 0;
  font-size: 2.6rem;
  font-weight: 700;
`;

export const Menu = styled.button`
  border: none;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 2rem;
  background-color: rgb(241, 243, 245);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
  align-items: flex-start;
  color: rgb(52, 58, 64);
  @media screen and (min-width: 767px) {
    flex-direction: column;
    background-color: transparent;
  }
`;

export const QnAMenuContent = styled(Link)<{ isActive: boolean }>`
  font-weight: 800;
  font-size: 2rem;
  line-height: normal;
  padding: 1.4rem;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? 'white !important' : '#ADB5BD !important')};
`;

// export const QnAContentContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

export const QnASectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

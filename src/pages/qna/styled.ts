import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const QnAContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const QnASectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

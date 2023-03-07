import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const TeamPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

export const TeamPageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  color: #a9a9a9;
`;

export const TeamIntroduceContainer = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

export const TeamList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  & > li {
    float: left;
  }
`;

export const TeamNameButton = styled(Link)<{ isActive: boolean }>`
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffff;
  text-decoration: none;
`;

export const ApplyButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 3rem;
  background-color: #fff;
  outline: none;
  border: none;
  color: #000;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

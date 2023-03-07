import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const TeamPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export const TeamPageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  color: #a9a9a9;
  width: 490px;
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
  font-size: 16px;
  font-weight: 500;
  color: #ffff;
  text-decoration: none;
`;

export const ApplyButton = styled.button`
  margin-top: 20px;
  padding: 8px 3rem;
  background-color: #fff;
  outline: none;
  border: none;
  color: #000;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
`;

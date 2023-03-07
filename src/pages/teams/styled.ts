import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { css } from '@emotion/react';

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
  margin-bottom: 4rem;
`;

export const TeamListItem = styled.li<{ isActive: boolean }>`
  float: left;
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  transition: background 150ms;
  font-weight: 500;

  ${(props) =>
    props.isActive &&
    css`
      background-color: #151515;
    `}
`;

export const TeamNameLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
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

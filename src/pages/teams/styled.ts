import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const TitleMessage = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #a9a9a9;
  width: 490px;
`;

export const fieldWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
`;

export const fieldTitle = styled(Link)<{ isActive: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: #ffff;
  text-decoration: none;
`;

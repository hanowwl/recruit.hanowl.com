import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const QnAMenuWrapper = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 10;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const QnAMenuContentWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 2rem 0px;
  background: white;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

export const QnAMenuContent = styled(Link)<{ isActive: boolean }>`
  font-weight: 800;
  font-size: 1.6rem;
  line-height: normal;
  padding: 1.4rem;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#171717' : '#BABABA')};
`;

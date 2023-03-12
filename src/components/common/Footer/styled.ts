import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background-color: #171718;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
`;

export const FooterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled(Link)`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 6px;
  border-radius: 50%;
  background-color: #313131;
  color: white;
`;

export const FooterDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #ced4da;
`;

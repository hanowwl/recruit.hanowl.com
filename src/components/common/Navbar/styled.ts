import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const NavbarWrapper = styled(motion.nav)`
  width: 100%;
  position: fixed;
  height: 8rem;
  backdrop-filter: blur(1rem);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  max-width: 1323px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const NavbarMenuContainer = styled.ul`
  display: flex;
  gap: 4rem;
`;

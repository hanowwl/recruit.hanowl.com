import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ToastContainer = styled(motion.div)`
  position: fixed;
  bottom: 5%;
  left: 0%;
  width: 100%;
  z-index: 9999;
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  color: white;
  font-size: 1.4rem;
  opacity: 1;
`;

export const ToastIconWrapper = styled.div<{ background: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToastWrapper = styled(motion.div)`
  width: fit-content;
  border-radius: 1rem;
  background-color: white;
  color: black;
  padding: 1.6rem 1.4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

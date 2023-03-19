import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles';

export const modalOpenKeyframe = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  width: 60rem;
  max-height: 60rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.2rem);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  animation: 200ms cubic-bezier(0.33, 1, 0.68, 1) ${modalOpenKeyframe};
  overflow: auto;
`;

export const ModalHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ModalHeader = styled.h4`
  font-size: 2.6rem;
  font-weight: 700;
`;

export const ModalCloseButton = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353535;
  border-radius: 0.4rem;
  margin-left: auto;
`;

export const ModalBodyContainer = styled.div`
  padding: 1.6rem 0.8rem 3.6rem 0.8rem;
  font-size: 1.8rem;
  color: ${colors.white};
  line-height: 120%;
  overflow-y: auto;
`;

export const ModalFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 0.8rem;
`;

export const ModalFooterButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > button {
    flex: 1;
  }
`;

export const ModalFooterText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #a2a2a2;
  text-align: center;
`;

// ToDo: Temp Button component
export const Button = styled.button`
  outline: none;
  border: none;
  color: black;
  background-color: white;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;

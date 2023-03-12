import { colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const SignUpForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 10rem 0px;

  & > button {
    margin-top: 5rem;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const AffiliationInfo = styled.div`
  font-size: 3rem;
  font-weight: 600;
`;

export const SignUpTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

export const SignUpInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SignUpSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Step3SelectListContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 10px;
`;

export const SignUpSelect = styled.select`
  outline: none;
  border: none;
  background: #151618;
  color: #9f9f9f;
  border-radius: 0.8rem;
  height: 4.8rem;
  padding: 0 1.6rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    box-shadow: inset 0 0 0 2px #9eb0ff;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 2px #eeeeee;
  }
`;

export const SignUpLabel = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  color: #595865;
  padding: 0.8rem 0;
`;

export const SignUpLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  user-select: none;

  a {
    color: white;
    font-weight: 500;
    text-decoration: none;
  }
`;

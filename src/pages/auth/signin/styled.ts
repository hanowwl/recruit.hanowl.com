import styled from '@emotion/styled';

export const SignInForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 10rem 0px;

  & > button {
    margin-top: 5rem;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const AffiliationInfo = styled.div`
  font-size: 3rem;
  font-weight: 600;
`;

export const SignInTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

export const SignInInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SignInLinkContainer = styled.div`
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

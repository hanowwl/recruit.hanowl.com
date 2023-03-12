import styled from '@emotion/styled';

export const ApplyFormContainer = styled.form`
  max-width: 60rem;
  margin: 2rem auto 0 auto;
`;

export const ApplyFormTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const ApplyFormInputContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.8rem;
`;

export const ApplyButton = styled.button`
  width: 100%;
  border: none;
  outline: none;

  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  padding: 1.2rem;
  border-radius: 1rem;
`;

export const ApplyButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

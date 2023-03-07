import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  & > section:nth-of-type(2) {
    margin: 30px 0;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 60%;
  line-height: 1.5;
  color: #bbbbbb;
`;

export const SubTitleUl = styled.ul`
  margin-left: 20px;
  list-style: inside !important;
`;

export const SubTitleLi = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #bbbbbb;
  line-height: 1.5;
`;

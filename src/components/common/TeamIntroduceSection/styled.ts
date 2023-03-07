import styled from '@emotion/styled';

export const TeamIntroduceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  & > section:not(:last-child) {
    margin: 30px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 60%;
  line-height: 1.5;
  color: #bbbbbb;
`;

export const SectionListUl = styled.ul`
  margin-left: 20px;
  list-style: inside !important;
`;

export const SectionListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #bbbbbb;
  line-height: 1.5;
`;

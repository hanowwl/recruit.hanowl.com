import styled from '@emotion/styled';

export const TeamIntroduceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  & > section:not(:last-child) {
    margin-bottom: 2.8rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const SectionDescription = styled.p`
  font-weight: 400;
  line-height: 1.5;
  color: #bbbbbb;
`;

export const SectionListUl = styled.ul`
  margin-left: 2rem;
  list-style: inside !important;
`;

export const SectionListItem = styled.li`
  color: #bbbbbb;
  font-weight: 400;
  line-height: 1.5;
`;

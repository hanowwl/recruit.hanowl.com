import styled from '@emotion/styled';

export const SectionConatiner = styled.div`
  padding-top: 45rem;

  @media screen and (max-width: 720px) {
    padding-top: 20rem;

    br {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 5rem;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (max-width: 720px) {
    font-size: 4.8rem;
  }
`;

export const TeamStorySectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 2rem;
`;

export const TeamStorySectionDescription = styled.p`
  font-size: 3rem;
  line-height: 4rem;
  color: #ced4da;
  text-align: center;
`;

export const CampaignContainer = styled.div`
  display: flex;
  gap: 10rem;
`;

export const CampaignTitle = styled.div`
  font-size: 3rem;
`;

export const CampaignCount = styled.div`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 4rem;
`;

export const TeamStoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 95rem;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 28rem;
    }
  }
`;

export const TeamStoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-top: 4rem;
`;

export const TeamStoryItemText = styled.div`
  color: #ced4da;
  font-size: 1.5rem;
  // margin-top: 10rem;
  font-weight: 600;
`;

export const TeamStoryImage = styled.img`
  width: 30rem;
  height: 22rem;
  border-radius: 1rem;
  transition: all 0.2s;
  object-fit: cover;

  @media screen and (min-width: 720px) {
    :hover {
      scale: 1.03;
      transition-duration: 0.15;
    }
  }
`;

export const AboutStudentGovernment = styled.div`
  font-size: 4rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
`;

export const AboutStudentGovernmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 7rem;

  a {
    color: unset;
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    justify-content: center;
    column-gap: 2rem;
  }
`;

export const AboutStudentGovernmentItem = styled.div<{ background: string }>`
  width: 225px;
  height: 300px;
  margin: 10px 0;
  border-radius: 1rem;
  background-color: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s;

  :hover {
    scale: 1.03;
    opacity: 1;
    transition-duration: 0.15;
  }

  :active {
    scale: 0.97;
    opacity: 0.65;
    transition-duration: 0.15;
  }
`;

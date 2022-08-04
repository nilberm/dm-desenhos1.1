import styled from "styled-components";

export const Container = styled.main`
  .mainContainer {
    #homeBanner {
      max-width: 100vw;
      .carouselSection {
        img {
          width: 100%;
        }
      }
    }

    #aboutMe {
      display: flex;
      flex-direction: column;

      .textInformation {
        padding: 2rem;
        text-align: justify;

        font: 400 1rem "Roboto", sans-serif;

        h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
      }

      .imageAboutMe {
        img {
          width: 100%;
        }
      }
    }
  }
`;

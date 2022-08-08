import styled from "styled-components";

export const Container = styled.main`
  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    overflow-y: hidden;

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

      @media (min-width: 980px) {
        flex-direction: row;
        margin: 3rem;
        gap: 3rem;
      }

      @media (min-width: 1080px) {
        margin: 5rem;
      }

      .textInformation {
        padding: 2rem;
        text-align: justify;

        font: 400 1rem "Roboto", sans-serif;

        h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        @media (min-width: 980px) {
          width: 80%;
        }

        @media (min-width: 1080px) {
          width: 60%;
        }
      }

      .imageAboutMe {
        img {
          width: 100%;

          @media (min-width: 980px) {
            box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
          }
        }
      }
    }

    #services {
      text-align: center;

      margin: 2rem 0;

      .textTitle {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .servicesCards {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (min-width: 980px) {
          flex-direction: row;
          gap: 4rem;
        }

        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;

          img {
            box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
          }
        }
      }
    }
  }
`;

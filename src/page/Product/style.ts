import styled from "styled-components";

export const Container = styled.main`
  min-width: 320px;
  #Form {
    width: 100%;

    .title {
      margin: 1rem;
      font: 700 1.5rem "Roboto", sans-serif;
    }
    .containerForm {
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
      }
      form {
        background: var(--lightRedOrange);
        margin: 0 1rem;
        border: 1px solid #000;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        .formHeader {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .finalPrice {
            font: 700 1.2rem Poppins, sans-serif;
          }

          .serviceDescription {
            font: 400 0.7rem Poppins, sans-serif;
          }
        }

        .sizeText {
          font: 400 0.7rem Poppins, sans-serif;
          color: #505050;

          span {
            color: #000;
          }
        }

        fieldset {
          border: none;
        }

        .radioInput {
          display: flex;
          justify-content: space-evenly;

          .radioItems {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        .amount {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .sizeValue {
            font: 400 0.7rem Poppins, sans-serif;
            color: #505050;
          }
          .btnContainer {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            button {
              border: none;
              background: none;
              img {
                max-width: 1.3rem;
              }
            }
          }
        }

        .amountPet {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .petInfo {
            display: flex;
            justify-content: space-between;
            .petText {
              font: 400 0.8rem Poppins, sans-serif;
            }

            .infoPrice {
              font: 400 0.6rem Poppins, sans-serif;
            }
          }
          .sizeValue {
            font: 400 0.7rem Poppins, sans-serif;
            color: #505050;
          }
          .btnContainer {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            button {
              border: none;
              background: none;
              img {
                max-width: 1.3rem;
              }
            }
          }
        }
      }
    }
  }
`;

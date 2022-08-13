import styled from "styled-components";

export const Container = styled.main`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  #Form {
    width: 100%;

    @media (min-width: 900px) {
      display: flex;
      justify-content: space-between;
      background: #fff;
      margin: 2rem;
      width: auto;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.17);
    }

    .title {
      margin: 1rem 1rem 0 1rem;
      font: 700 1.5rem "Roboto", sans-serif;
      display: flex;
      flex-direction: column;

      @media (min-width: 900px) {
        margin: 0;
        gap: 1rem;
        width: 50%;
      }

      img {
        width: 100%;

        @media (min-width: 900px) {
          width: auto;
        }
      }

      .imageDesktop {
        display: none;

        @media (min-width: 900px) {
          display: block;
        }
      }
    }
    .containerForm {
      display: flex;
      flex-direction: column;

      @media (min-width: 900px) {
        margin-top: 2.75rem;
        width: 50%;
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
            font: 700 1.2rem FreeMono, monospace;
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
            color: #000;

            span {
              color: #505050;
            }
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
              font: 600 0.6rem Poppins, sans-serif;
            }
          }
          .sizeValue {
            font: 400 0.7rem Poppins, sans-serif;
            color: #000;

            span {
              color: #505050;
            }
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

      .btnSubmit {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
          border: none;
          border-radius: 10px;

          padding: 1rem;
          background: #e15b50;

          color: #fff;
          font: 700 1rem Poppins, sans-serif;
          box-shadow: 0 4px 4px rgb(0 0 0 / 25%);

          transform: scale(0.99);
          transition: 0.3s;

          &:hover {
            transform: scale(1.02);
          }
        }
      }

      .deadline {
        background: var(--lightRedOrange);
        margin: 0 1rem;
        border: 1px solid #000;
        padding: 1rem;

        display: flex;
        flex-direction: column;

        h3 {
          font: 700 1rem Poppins, sans-serif;
          margin-bottom: 0.5rem;
        }

        p {
          font: 400 1rem Poppins, sans-serif;
        }
      }

      .paymentMethod {
        background: var(--lightRedOrange);
        margin: 0 1rem;
        border: 1px solid #000;
        padding: 1rem;

        display: flex;
        flex-direction: column;

        h3 {
          font: 700 1rem Poppins, sans-serif;
          margin-bottom: 0.5rem;
        }

        p {
          font: 400 1rem Poppins, sans-serif;
        }

        .iconsPayment {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin: 2rem 0;
          .icons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            svg {
              font-size: 2rem;
            }
            p {
              font: 400 0.8rem Poppins, sans-serif;
              text-align: center;
            }
          }
        }
      }
    }
    .mayLike {
      background: var(--lightRedOrange);
      margin: 0 1rem 1rem 1rem;
      border: 1px solid #000;
      padding: 1rem;

      display: flex;
      justify-content: space-around;

      a {
        width: 40%;
        .card {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;

          img {
            width: 100%;

            border-radius: 10px;
            box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.17);
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 0 4rem 0;
  background-color: #f7f7f7;

  div {
    h3 {
      font-size: 3em;
    }

    div {
      display: flex;
      flex-direction: row;

      #support-img {
        margin-right: 2.5rem;
      }

      #supportContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2.5rem;

        p {
          padding: 1em 0em;
        }
      }

    }

    #supporterContent {
      margin-top: 3em;
      display: flex;
      flex-direction: column;

      h3 {
        margin: 2rem;
      }

      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
      }

    }
  }

  @media only screen and (max-width: 768px) {
    div {
      flex-direction: column;

      h3 {
        font-size: 2rem;
        text-align: center;
      }

      div {
        flex-direction: column;
        margin: 0;

        div {
          width: 70%;
          align-self: center;
          img {
            width: 100%;
          }
        }

        #supportContent {
          p {
            text-align: center;
          }
        }
      }

      #supporterContent {
        margin-top: 4em;
      }
    }
  }
`;

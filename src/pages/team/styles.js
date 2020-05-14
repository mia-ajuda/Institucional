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

      #team-img {
        margin-right: 2.5rem;
      }

      #teamContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2.5rem;

        p {
          padding: 1em 0em;
        }
      }
    }

    #membersContent {
      margin-top: 3em;
      display: flex;
      flex-direction: column;

      h3 {
        margin: 2rem;
      }

      .card-container {
        margin: 0 1.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
        align-items: center;

        div {
          align-self: center;
          img {
            width: 100%;
          }
        }

        #team-img {
          margin-right: 0;
          width: 70%;
        }

        #teamContent {
          width: 70%;
          margin-left: 0;
          p {
            text-align: center;
          }
        }
      }

      #membersContent {
        margin-top: 4em;

        .card-container {
          margin: 0 .5rem;
        }
      }
    }
  }
`;

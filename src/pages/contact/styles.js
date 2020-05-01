import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 0 4rem 0;
  background-color: #f7f7f7;

  div {
    display: flex;
    flex-direction: row;
    margin: 0 2.5em;

    div {
      width: 50%;
      img {
        width: 100%;
      }
    }

    #contactContent {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 3em;
        text-align: right;
      }

      p {
        padding: 1em 0em;
        text-align: right;
      }
    }
  }

  @media only screen and (max-width: 768px) {
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

      #contactContent {
        margin-top: 3rem;

        h3 {
          text-align: center;
        }

        p {
          text-align: center;
        }
      }
    }
  }
`;

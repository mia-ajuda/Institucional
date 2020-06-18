import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 0 4rem 0;
  background-color: #f7f7f7;

  div {
    display: flex;
    flex-direction: row;

    div {
      width: 50%;
      img {
        width: 100%;
        margin: 0 2.5rem;
      }
    }

    #contactContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 2.5rem;

      .emailLink {
        display: inline-block;
        padding: 1em 0em;
        text-align: right;
        font-size: 2em;
        margin-top: .8rem;
        color: #4b8ab9;
        font-weight: bold
      }

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
          margin: 0;
        }
      }

      #contactContent {
        margin-top: 3rem;

        .emailLink {
          font-size: 1.2rem;
          text-align: center;
        }

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

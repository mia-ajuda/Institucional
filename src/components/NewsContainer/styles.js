import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 40vh;
  padding: 3rem 3rem 4rem 2rem;
  margin: 2rem 0 2rem 0;

  section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    height: 100%;

    h3 {
      padding: 0 0 1.2em 0;
    }

    .news-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      #dataInformation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 4.5rem 0 2rem 0;
        width: 50%;
        max-height: 8rem;

        p {
          font-size: 1.2rem;
          padding: 0.5rem;
        }

        .news-link {
          padding: 1em 0em;
          font-size: 1.2em;
          color: #4b8ab9;
          font-weight: bold
        }

      }

      #newsLogo {
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-self: center;
        img {
          width: 50%;
        }
      }
    }
  }
`;
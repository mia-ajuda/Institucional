import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 7rem 0 4rem 0;
  background-color: #f7f7f7;

  .presentation-section {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    
    #textPart {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 2.5rem;

      h3 {
        font-size: 3rem;
        margin: 0.5em 0;
      }

      p {
        font-size: 1.8rem;
        padding: 1em 8rem 1em 0;
      }
    }

    #imagePart {
      display: flex;
      justify-content: flex-end;
      width: 40%;
      img {
        width: 100%;
        margin: 0 2.5rem;
      }
    }
  }

  .actions-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;

    h3 {
      font-size: 3rem;
      margin: 0.5em 0;
    }

    #carousel {
      margin: 4rem 0rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .text-card {
      width: 100%;
      height: 22rem;
      padding: 2.5rem;
      margin: 1rem;
      background-color: #EDEDED;
      text-align: justify;
      font-weight: normal;
      border-radius: 0.6rem;
      h3 {
        font-size: 1.3rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
    .covid-part {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .covid-info {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        div {
          display: flex;
          justify-content: center;
          padding: 3rem;
          width: 50%;
          height: 20rem;
          text-align: justify;
          ul {
            li {
              padding: 0.4em;
              a {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
`;
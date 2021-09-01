import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 3rem 2rem 3rem;
  background-color: #f7f7f7;

  .presentation-section {
    display: flex;
    flex-direction: row;

    #textSideContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 2.5rem;

      h3 {
        font-size: 3em;
      }

      p {
        padding: 1em 0em;
      }
    }
    
    div {
      width: 50%;
      img {
        width: 100%;
        margin: 0 2.5rem;
      }
    }
  }

  .news-section {
    margin: 2rem 0 5rem 0;
  }

  .ending-section {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 0 4rem 0;
  background-color: #f7f7f7;

  div{
    
    h1 {
      font-size: 4em;
    }

    div {
      display: flex;
      flex-direction: row;
      margin: 0 2.5em;
      
      #supportContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        
        p {
          padding: 1em 0em;
          font-size: 2.5em;
        }
      }

      div {
        img {
          width: 45rem;
        }
      }
    }

    #supporterContent {
      margin-top: 3em;
    }
  }
`;
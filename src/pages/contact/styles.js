import styled from "styled-components";

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
      
      h1 {
        font-size: 4em;
        text-align: right;
      }
      
      p {
        padding: 1em 0em;
        text-align: right;
        font-size: 2.5em;
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

        h1 {
          font-size: 2rem;
          text-align: center;
        }
        
        p {
        text-align: center;
        font-size: 1.2rem;
        }
      }
    }
  }
`;
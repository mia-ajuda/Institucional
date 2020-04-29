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
      
      #teamContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        
        p {
          padding: 1em 0em;
          font-size: 2.5em;
        }
      }

      div {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }

    #membersContent {
      margin-top: 3em;
    }
  }

  @media only screen and (max-width: 768px) {
      
    div {
      flex-direction: column;
      
      h1 {
        font-size: 2rem;
        text-align: center;
      }

      div{
        flex-direction: column;
        margin: 0;

        div {
          width: 70%;
          align-self: center;
          img {
            width: 100%;
          }
        }
        
        
        #teamContent {          
          p {
            text-align: center;
            font-size: 1.2rem;
          }
        }

      }

      #membersContent {
        margin-top: 4em;
      }
    }
  }
`;
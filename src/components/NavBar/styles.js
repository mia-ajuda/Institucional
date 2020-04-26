import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  padding: 0.7em 4em;
  background-color: #f7f7f7;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    #imageContent {
      align-self: left;
      
      img {
        width: 3rem;
      }
    }
    
    #routeContent {
      width: 35em;
      
      #navTitle {
        color: #4b8ab9;
        font-weight: bold;
        margin-left: 2em;
        font-size: 1.8em;
        text-decoration: none;
      }

      #navTitle:hover {
        color: #75A0CF;
      }

    }
  }
`;
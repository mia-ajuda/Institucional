import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  height: 22rem;
  width: 100%;
  padding: 2.5rem;
  margin: 1rem;
  background-color: ${darken(0.3, '#4B8AB9')};

  border-radius: 0.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-space-around;
  align-items: center;  

  &:hover,
  &:active {
    transition: all 0.5s;
    background: ${darken(0.1, '#4B8AB9')};
  }

  .image-container {
    width: 100%;
    height: 60%;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      padding: 1rem;
      width: 100%;
    }
  }

  .link-container {
    display: flex;
    height: 40%;
    align-items: center;
    justify-content: center;
    a {
      color: #F7F7F7;
      font-weight: bold;
      cursor: pointer;
      font-size: 1.4rem;
      text-decoration: none;
      text-align: center;
    }
  }
`;
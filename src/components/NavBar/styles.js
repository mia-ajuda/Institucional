import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  position: fixed;
  padding: 0.7em 4em;
  background-color: #f7f7f7;
  z-index: 10;

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
        color: #75a0cf;
      }
    }
  }

  #menu {
    display: none;
    height: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.8em 0.8em;
    #routeContent,
    #image {
      display: none;
    }

    #menu {
      display: block;
    }
  }
`;

export const Sidebar = styled.div`
  #content {
    display: none;
    padding: 1rem 2rem;
    #navTitle {
      color: #4b8ab9;
      font-weight: bold;
      font-size: 2em;
      text-decoration: none;
      display: flex;
      margin-bottom: 1rem;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 768px) {
    #content {
      transition: transform 0.2s ease-in-out;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 230px;
      height: 100vh;
      background-color: #f7f7f7;
      z-index: 110;
    }
  }
`;

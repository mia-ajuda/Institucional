import styled from 'styled-components';
import { darken } from 'polished';

import background from '../../assets/images/HomeBackgrounds.svg';
import footerimg from '../../assets/images/footerimg.png';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    padding: 7rem 0 4rem 0;
    width: 90%;
    margin: 0 auto;
    align-items: center;

    #header-img {
    }

    #logo {
      width: 20rem;
      margin-bottom: 0.5rem;
    }

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;
      font-weight: 500;
      align-items: center;

      p {
        margin-bottom: 1rem;
      }

      div {
        background-color: #4b8ab9;
        color: #f7f7f7;
        border: none;
        cursor: pointer;
        padding: 1rem 1rem;
        border-radius: 0.3rem;
        font-weight: 500;
        box-shadow: 1px 1px 3px #35353535;
        margin-top: 1rem;
        font-size: 1.1rem;
        width: 100%;

        &:hover,
        &:active {
          transition: all 0.5s;
          background: ${darken(0.1, '#4b8ab9')};
          box-shadow: 1px 1px 5px 2px #35353535;
        }
      }
    }
  }

  .title {
    color: #4b8ab9;
  }

  h3 {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    header {
      display: flex;
      flex-direction: column;
      padding-bottom: 3rem;
      div {
        width: 100%;
        p {
          margin: 0;
        }
        div {
          margin-bottom: 3rem;
        }
      }
    }

    div,
    img {
      width: 100%;
    }

    div {
      justify-content: center;
      align-items: center;
      text-align: center;
      img {
        width: 50%;
      }
    }
  }
`;
export const HowToUseList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1.5rem 0 4rem 0;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  justify-content: baseline;
  flex-wrap: wrap;

  li {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 15rem;
      margin: 0 1rem;
      margin: 1rem;
    }

    p {
      width: 90%;
    }
  }

  img {
    margin-bottom: 1rem;
  }

  h3 {
    color: #4b8ab9;
  }

  span {
    color: #4b8ab9;
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
    margin-bottom: 3rem;
    li {
      margin-bottom: 1rem;
      width: 100%;
    }
  }
`;
export const HomeSection = styled.section`
  text-align: center;
  padding: 7rem 0 1.5rem 0;
  color: #f7f7f7;

  p {
    margin: 1rem auto;
    width: 70%;
  }

  h3 {
    margin: 0 auto;
    text-align: center;
  }

  button {
    background-color: #f7f7f7;
    color: #4b8ab9;
    border: none;
    padding: 0.6rem 0.8rem;
    border-radius: 0.3rem;
    font-weight: 600;
    box-shadow: 1px 1px 3px #35353535;
    margin-top: 1.5rem;
    font-size: 1.2rem;

    &:hover,
    &:active {
      transition: all 0.5s;
      background: ${darken(0.1, '#f7f7f7')};
      box-shadow: 1px 1px 5px 2px #35353535;
    }
  }
`;
export const HomeBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Footer = styled.div`
  @media only screen and (max-width: 600px) {
    background-size: cover;
    height: 10rem;
    background-repeat: no-repeat;
  }
  margin-top: 1rem;
  width: 100%;
  background-image: url(${footerimg});
  background-size: contain;
  height: 20rem;
  position: relative;
  top: 2rem;
`;

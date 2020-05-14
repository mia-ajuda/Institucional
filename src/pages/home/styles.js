import styled from 'styled-components';
import { darken } from 'polished';

import background from '../../assets/images/HomeBackgrounds.svg';
import footerimg from '../../assets/images/footerimg.png';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-around;
    padding: 7rem 0 4rem 0;
    width: 90%;
    height: 90vh;
    margin: 0 auto;
    align-items: center;

    #main-text {
      text-align: center;
      margin-bottom: 2rem;
    }

    .android-btn {
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

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover,
      &:active {
        transition: all 0.5s;
        background: ${darken(0.1, '#4b8ab9')};
        box-shadow: 1px 1px 5px 2px #35353535;
      }
    }

    #header-img {
      cursor: pointer;
    }

    #logo {
      width: 20rem;
      margin-bottom: 0;
    }

    div {
      height: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;
      max-width: 400px;
      font-weight: 500;
      align-items: center;

      p {
        margin-bottom: 1rem;
      }
    }
  }

  .title {
    color: #4b8ab9;
    margin-bottom: 2rem;
  }

  h3 {
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    header {
      display: flex;
      flex-direction: column;

      #logo {
        width: 15rem;
      }

      div {
        width: 100%;
        height: 100%;
        p {
          margin: 0;
        }
        div {
          margin-bottom: 3rem;
          width: 80%;
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
        width: 80%;
      }
    }
  }
`;
export const HowToUseList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1.5rem 0 4rem 0;
  width: 95%;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    display: flex;
    flex: 1;
    justify-content: space-around;
  }


  img {
    margin-bottom: 1rem;
  }

  h3 {
    color: #4b8ab9;
  }

  span {
    color: #4b8ab9;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
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
  padding: 6rem 0 1.5rem 0;
  color: #f7f7f7;

  p {
    margin: 3rem auto;
    width: 70%;
    max-width: 1000px;
  }

  h3 {
    margin: 0 auto;
    text-align: center;
  }

  .white-btn {
    margin: auto;
    background-color: #fff;
    color: #4b8ab9;
    border: none;
    cursor: pointer;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    font-weight: bold;
    box-shadow: 1px 1px 3px #35353535;
    margin-top: 1rem;
    font-size: 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
      transition: all 0.5s;
      background: ${darken(0.1, '#fff')};
      box-shadow: 1px 1px 5px 2px #35353535;
    }
  }

  .android-btn {
    margin: auto;
    background-color: #f7ef6e;
    color: #4b8ab9;
    border: none;
    cursor: pointer;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    font-weight: bold;
    box-shadow: 1px 1px 3px #35353535;
    margin-top: 1rem;
    font-size: 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
      transition: all 0.5s;
      background: ${darken(0.1, '#f7ef6e')};
      box-shadow: 1px 1px 5px 2px #35353535;
    }
  }
`;
export const HomeBackground = styled.div`
  padding-top: 4rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Footer = styled.div`
  @media only screen and (max-width: 768px) {
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

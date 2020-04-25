import styled from "styled-components";
import { darken } from "polished";

import background from "../../assets/images/HomeBackgrounds.svg";
import footerimg from "../../assets/images/footerimg.png";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 4rem 0;
    width: 90%;
    margin: 0 auto;
    align-items: center;

    #header-img {
    }

    #logo {
      width: 16rem;
      margin-bottom: 0.5rem;
    }

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;
      font-weight: 500;

      p {
        margin-bottom: 2rem;
      }

      div {
        text-align: center;
        width: 15rem;
        background-color: #4b8ab9;
        padding: .8rem .6rem;
        border-radius: .5rem;
        color: #f7f7f7;
        font-weight: 500;
      }
    }
  }

  .title {
    color: #4b8ab9;
  }

  h3 {
    text-align: center;
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
`;
export const HomeSection = styled.section`
  text-align: center;
  padding: 3rem 0 1.5rem 0;
  color: #f7f7f7;

  p {
    margin: 1rem auto;
    width: 70%;
  }

  h3 {
    width: 20%;
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
      background: ${darken(0.1, "#f7f7f7")};
      box-shadow: 1px 1px 5px 2px #35353535;
    }
  }
`;
export const HomeBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 54rem;
`;
export const Footer = styled.div`
  margin-top: 1rem;
  width: 100%;
  background-image: url(${footerimg});
  background-size: contain;
  height: 20rem;
  position: relative;
  top: -2rem;
`;

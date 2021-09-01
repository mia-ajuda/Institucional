import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 3rem 4rem 3rem;
  background-color: #f7f7f7;

  div {
    display: flex;
    flex-direction: row;

    div {
      width: 50%;
      img {
        width: 100%;
        margin: 0 2.5rem;
      }
    }

    #contactContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 2.5rem;

      h3 {
        font-size: 3em;
        text-align: left;
      }

      p {
        padding: 1em 0em;
        text-align: left;
      }

      .media-button {
        align-self: flex-start;
      }
    }

    #contactContentRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 2.5rem;

      h3 {
        font-size: 3em;
        text-align: right;
      }

      p {
        padding: 1em 0em;
        text-align: right;
      }

      .media-button {
        align-self: flex-end;
      }

      .emailLink {
        display: inline-block;
        padding: 1em 0em;
        text-align: right;
        font-size: 2em;
        margin-top: .8rem;
        color: #4b8ab9;
        font-weight: bold
      }

    }

    #logo {
      width: 20rem;
      margin-bottom: 0;
    }

    .media-button {
      background-color: #4b8ab9;
      max-width: 300px;
      color: #f7f7f7;
      border: none;
      cursor: pointer;
      padding: 1rem 2.5rem 1rem 0.5rem;
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
  }

  @media only screen and (max-width: 768px) {
    div {
      flex-direction: column;
      margin: 0;

      div {
        width: 100%;
        align-self: center;
        img {
          width: 100%;
          margin: 0;
        }
      }

      #contactContent {
        margin-top: 3rem;

        h3 {
          text-align: center;
        }

        p {
          text-align: center;
        }
      }
    }
  }
`;

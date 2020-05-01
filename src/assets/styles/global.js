import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  min-height: 100%;
}

body{
  background-color: #f7f7f7;
}

body, button {
  color: #353535;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

button{
  cursor: pointer;
}

p, button{
  font-size: 1.5rem;
}

h3 {
  font-size: 1.8rem;
}

/* #root {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 50px;
} */
`;

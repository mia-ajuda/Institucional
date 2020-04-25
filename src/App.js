import React from "react";

import NavBar from './components/NavBar'
import Routes from "./routes";
import GlobalStyle from "./assets/styles/global";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes />
      <Footer/>
      <GlobalStyle />
    </>
  );
}

export default App;

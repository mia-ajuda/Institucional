import React from 'react';

import NavBar from './components/NavBar';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

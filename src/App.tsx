import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {ThemeProvider} from "@emotion/react";
import Header from "./components/Header";
import ShopBody from "./components/ShopBody";
import theme from "./styles/mui-themes/theme";

function App() {
  // const store = new CardStore();


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header/>
        <ShopBody/>
      </ThemeProvider>
    </Router>
  );
}

export default App;

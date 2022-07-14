import {ThemeProvider} from "@emotion/react";
import {Provider} from 'mobx-react';
import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from "./components/Header";
import ShopBody from "./components/ShopBody";
import CardStore from "./stores/CardStore";
import {StoresNames} from "./stores/stores";
import theme from "./styles/theme";

function App() {
  // const appStore = new AppStore();
  const cardStore = new CardStore();

  const stores = {
    // [StoresNames.AppStore]: appStore,
    [StoresNames.CardStore]: cardStore
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <BrowserRouter>
          <Header/>
          <ShopBody/>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

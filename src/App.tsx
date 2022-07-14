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
import theme from "./styles/theme";

import dataFromJson from './data/data.json';

function App() {
  const {products} = dataFromJson.data;

  // const appStore = new AppStore();
  const cardStore = new CardStore();

  cardStore.addProducts(products);

  const stores = {
    // 'AppStore': appStore,
    'CardStore': cardStore
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <BrowserRouter>
          <Header/>
          &nbsp;
          <ShopBody/>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

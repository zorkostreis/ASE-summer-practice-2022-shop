import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'mobx-react';
import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from "./components/system/Header";
import ShopBody from "./pages/ShopBody";
import dataFromJson from './data/data.json';
import CardStore from "./stores/CardStore";
import theme from "./styles/theme";
import {storeNames} from "./stores/StoreDictionary";

function App() {
  const {products} = dataFromJson.data;

  // const appStore = new AppStore();
  const cardStore = new CardStore();

  cardStore.setItems(products);

  const stores = {
    // [storeNames.AppStoreName]: appStore,
    [storeNames.CardStoreName]: cardStore
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

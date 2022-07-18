import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'mobx-react';
import React from 'react';

import Header from "./components/system/Header";
import response from './data/response.json';
import Router from "./Router";
import CardStore from "./stores/CardStore";
import {StoresNames} from "./stores/StoreDictionary";
import theme from "./styles/theme";

function App() {
  const {products} = response.data;

  // const appStore = new AppStore();
  const cardStore = new CardStore();

  cardStore.setItems(products);

  const stores = {
    // [storeNames.AppStoreName]: appStore,
    [StoresNames.CardStoreName]: cardStore
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <Header/>
        <Router/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

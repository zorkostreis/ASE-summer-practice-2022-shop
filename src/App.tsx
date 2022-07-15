import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'mobx-react';
import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from "./components/system/Header";
import dataFromJson from './data/data.json';
import ShopBody from "./pages/ShopBody";
import CardStore from "./stores/CardStore";
import {StoresNames} from "./stores/StoreDictionary";
import theme from "./styles/theme";

function App() {
  const {products} = dataFromJson.data;

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
        <div className='header'>
          <Header/>
        </div>
        <ShopBody/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

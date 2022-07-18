import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'mobx-react';
import React from 'react';

import Router from "./Router";
import ItemService from "./services/ItemService";
import NetworkService from "./services/NetworkService";
import {ServicesNames} from "./services/ServiceDictionary";
import CardStore from "./stores/CardStore";
import {StoresNames} from "./stores/StoreDictionary";
import theme from "./styles/theme";

function App() {
  // const appStore = new AppStore();
  const cardStore = new CardStore();

  const networkService = new NetworkService();
  const itemService = new ItemService(cardStore, networkService);

  const stores = {
    // [storeNames.AppStoreName]: appStore,
    [StoresNames.CardStoreName]: cardStore
  };

  const services = {
    [ServicesNames.ItemServiceName]: itemService,
    [ServicesNames.NetworkServiceName]: networkService
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores} {...services}>
        <Router/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

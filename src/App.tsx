import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'mobx-react';
import React from 'react';

import Router from "./Router";
import ItemService from "./services/ItemService";
import NetworkService from "./services/NetworkService";
import {ServicesNames} from "./services/ServiceDictionary";
import AppStore from "./stores/AppStore";
import BasketStore from "./stores/BasketStore";
import ItemStore from "./stores/ItemStore";
import {StoresNames} from "./stores/StoreDictionary";
import theme from "./styles/theme";

function App() {
  const appStore = new AppStore();
  const itemStore = new ItemStore();
  const basketStore = new BasketStore();

  const networkService = new NetworkService(appStore.token);
  const itemService = new ItemService(itemStore, networkService);

  const stores = {
    [StoresNames.ItemStoreName]: itemStore,
    [StoresNames.BasketStoreName]: basketStore
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

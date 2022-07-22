import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'mobx-react';
import React from 'react';

import Router from "./Router";
import ItemService from "./services/ItemService";
import NetworkService from "./services/NetworkService";
import {ServicesNames} from "./services/ServiceDictionary";
import AppStore from "./stores/AppStore";
import CartStore from "./stores/CartStore";
import ItemStore from "./stores/ItemStore";
import {StoresNames} from "./stores/StoreDictionary";
import theme from "./styles/theme";

function App() {
  const endpoint = process.env.REACT_APP_ENDPOINT as string;

  const appStore = new AppStore();
  const itemStore = new ItemStore();
  const cartStore = new CartStore();

  const networkService = new NetworkService(endpoint, appStore.token);
  const itemService = new ItemService(itemStore, networkService);

  const stores = {
    [StoresNames.ItemStoreName]: itemStore,
    [StoresNames.CartStoreName]: cartStore
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

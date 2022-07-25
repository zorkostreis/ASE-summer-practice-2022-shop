import {inject, observer} from "mobx-react";
import React from "react";
import {BrowserRouter, Navigate,Route, Routes} from "react-router-dom";

import Page from "./components/system/Page";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import {StoresNames} from "./stores/StoreDictionary";

const Router = inject(StoresNames.AppStore)(observer((props: any) => {
  function getPage(Component: any) {
    if (props.AppStore.loggedIn) {
      return (
        <Page>
          <Component/>
        </Page>
      );
    }

    return <Navigate to="/auth" replace/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={props.AppStore.loggedIn ? <Navigate to="/" replace/> : <AuthPage/>}/>
        <Route path="/" element={getPage(CatalogPage)}/>
        <Route path="/:id" element={getPage(ItemPage)}/>
        <Route path="/cart" element={getPage(CartPage)}/>
      </Routes>
    </BrowserRouter>
  );
}));

export default Router;

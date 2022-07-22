import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import BasketPage from "./pages/BasketPage";
import Page from "./components/system/Page";

function Router() {
  function getPage(Component: any) {
    return (
      <Page>
        <Component/>
      </Page>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={getPage(CatalogPage)}/>
        <Route path="/:id" element={getPage(ItemPage)}/>
        <Route path="/basket" element={getPage(BasketPage)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

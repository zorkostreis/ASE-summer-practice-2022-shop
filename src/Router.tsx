import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="catalog" element={<CatalogPage/>}/>
        <Route path="catalog/:id" element={<ItemPage/>}/>
        {/*<Route path="basket" element={<BasketPage/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

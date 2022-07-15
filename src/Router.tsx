import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Catalog from "./pages/Catalog";
import ItemPage from "./pages/ItemPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="catalog/:id" element={<ItemPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

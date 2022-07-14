import {Container, Grid} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";

import ItemModel from "../models/ItemModel";
import CardItem from "../components/CardItem";
import {storeNames} from "../stores/StoreDictionary";

function ShopBody(stores: any) {
  const cardStore = stores[storeNames.CardStoreName];
  const products = cardStore.items;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}> {
        products.map((product: ItemModel) =>
          <Grid item xs={3} key={product.id}>
            <CardItem product={product}/>
          </Grid>
        )
      }
      </Grid>
    </Container>
  );
}

export default inject(storeNames.CardStoreName)(observer(ShopBody));

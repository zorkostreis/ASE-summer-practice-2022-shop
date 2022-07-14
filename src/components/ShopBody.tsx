import {Container, Grid} from "@mui/material";
import React from "react";

import {inject, observer} from "mobx-react";
import CardItem from "./CardItem";
import ItemModel from "../models/ItemModel";

function ShopBody(props: any) {
  const cardStore = props.CardStore;
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

export default inject('CardStore')(observer(ShopBody));
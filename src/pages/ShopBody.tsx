import {Container, Grid} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";

import CardItem from "../components/CardItem";
import ItemModel from "../models/ItemModel";
import {storeNames} from "../stores/StoreDictionary";
import CardStore from "../stores/CardStore";

// interface storesProps {
//   // [storeNames.AppStoreName]: AppStore
//   [storeNames.CardStoreName]: CardStore
// }

function ShopBody(stores: any) {
  const {items} = stores.CardStore;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}> {
        items.map((item: ItemModel) =>
          <Grid item xs={3} key={item.id}>
            <CardItem item={item}/>
          </Grid>
        )
      }
      </Grid>
    </Container>
  );
}

export default inject(storeNames.CardStoreName)(observer(ShopBody));

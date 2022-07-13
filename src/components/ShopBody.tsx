import {Container, Grid} from "@mui/material";
import React from "react";

import CardItem from "./CardItem";

export default function ShopBody() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}> {
        items.map((item) =>
          <Grid item xs={3} key={item}>
            <CardItem/>
          </Grid>
        )
      }
      </Grid>
    </Container>
  );
}

import {Card, CardContent, Grid, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {inject, observer} from "mobx-react";
import React from "react";

import Header from "../components/system/Header";
import ItemModel from "../models/ItemModel";
import {StoresNames} from "../stores/StoreDictionary";

function BasketPage(props: any) {
  return (
    <div>
      <Header/>
      <Grid container spacing={2} maxWidth="95%" margin="auto"> {
        props.BasketStore.items.map((item: ItemModel) =>
          <Grid item xs={3} key={item.id}>
            <Card sx={{ minHeight: '100%' }}>
              <CardContent className='card-content'>
                <Typography variant="h6">
                  {item.name}
                </Typography>
                <Divider/>
                <Typography variant="body1">
                  {item.substanceName}
                </Typography>
                <Typography variant="body2">
                  {item.substanceCode}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      }
      </Grid>
    </div>
  );
}

export default inject(StoresNames.BasketStoreName)(observer(BasketPage));

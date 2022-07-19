import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {inject, observer} from "mobx-react";
import React from "react";
import {Link} from "react-router-dom";

import ItemModel from "../models/ItemModel";
import {StoresNames} from "../stores/StoreDictionary";

const BasketPage = inject(StoresNames.BasketStoreName)(observer((props: any) => {
  return (
    <Grid container spacing={2} maxWidth="95%" margin="auto"> {
      props.BasketStore.items.map((item: ItemModel) =>
        <Grid item xs={3} key={item.id}>
          <Card sx={{ minHeight: '100%' }}>
            <CardActionArea
              component={Link}
              to={`/catalog/${item.id}`}
            >
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
            </CardActionArea>
            <CardActions>
              <div className='card-button'>
                <Button variant="outlined"
                  startIcon={<DeleteOutlineIcon/>}
                  onClick={() => props.BasketStore.deleteItem(item.id)}
                >
                  <Typography variant="button">
                    Удалить
                  </Typography>
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
      )
    }
    </Grid>
  );
}));

export default BasketPage;

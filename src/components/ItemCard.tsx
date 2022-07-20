import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";

import {StoresNames} from "../stores/StoreDictionary";

const ItemCard = inject(StoresNames.BasketStoreName)(observer((props: any) => {
  return (
    <Card sx={{ minHeight: '100%' }}>
      <CardActionArea
        component={Link}
        to={`/catalog/${props.item.id}`}
      >
        <CardContent className='card-content'>
          <Typography variant="h6">
            {props.item.name}
          </Typography>
          <Divider/>
          <Typography variant="body1">
            {props.item.substanceName}
          </Typography>
          <Typography variant="body2">
            {props.item.substanceCode}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='card-button'>
          <Button variant="outlined"
            startIcon={<AddShoppingCartIcon/>}
            onClick={() => props.BasketStore.addItem(props.item)}
          >
            <Typography variant="button">
              В корзину
            </Typography>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}));

export default ItemCard;

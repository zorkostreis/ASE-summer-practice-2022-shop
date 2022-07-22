import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";

import {StoresNames} from "../stores/StoreDictionary";

const ItemCard = inject(StoresNames.BasketStoreName)(observer((props: any) => {
  return (
    <Card>
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
      <CardActions className='card-buttons'>
        <IconButton color="info"
          size="large"
          component={Link}
          to={`/${props.item.id}`}
        >
          <ReadMoreIcon/>
        </IconButton>
        <IconButton color="secondary"
          size="large"          
          onClick={() => props.BasketStore.addItem(props.item)}
        >
          <AddShoppingCartIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}));

export default ItemCard;

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import {inject, observer} from "mobx-react";
import React from 'react';
import {Link} from "react-router-dom";

import {StoresNames} from "@/stores/StoreDictionary";

import Counter from "./common/Counter";

const ItemCard = inject(StoresNames.CartStore)(observer((props: any) => {
  const foundCartItem = props.CartStore.findItemById(props.item.id);

  const buttonToShow = foundCartItem
    ? <Counter item={foundCartItem}/>
    : (
      <IconButton color="secondary"
        size="large"
        onClick={() => props.CartStore.addItem(props.item)}
      >
        <AddShoppingCartIcon/>
      </IconButton>
    );
    
  return (
    <Card className="p-2">
      <CardContent className='card-content'>
        <Typography variant="h6">
          {props.item.name}
        </Typography>
        <Divider/>
        <Typography variant="body1">
          {props.item.substanceName}
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-between">
        <IconButton color="info"
          size="large"
          component={Link}
          to={`/${props.item.id}`}
        >
          <ReadMoreIcon/>
        </IconButton>
        {buttonToShow}
      </CardActions>
    </Card>
  );
}));

export default ItemCard;

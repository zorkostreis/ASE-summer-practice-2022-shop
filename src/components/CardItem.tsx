import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import React from 'react';
import {Link} from "react-router-dom";

import ItemModel from "../models/ItemModel";

interface CardItemProps {
  item: ItemModel
}

export default function CardItem({item}: CardItemProps) {
  return (
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
          <Button variant="outlined" startIcon={<AddShoppingCartIcon/>}>
            <Typography variant="button">
              В корзину
            </Typography>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

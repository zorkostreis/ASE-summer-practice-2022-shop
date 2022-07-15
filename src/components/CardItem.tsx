import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';
import Divider from '@mui/material/Divider';

import ItemModel from "../models/ItemModel";

interface CardItemProps {
  item: ItemModel
}

export default function CardItem({item}: CardItemProps) {
  return (
    <Card sx={{ minHeight: '100%' }}>
      <CardActionArea>
        <CardContent className='card-content'>
          <Typography variant="h6">
            {item.name}
          </Typography>
          <Divider />
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

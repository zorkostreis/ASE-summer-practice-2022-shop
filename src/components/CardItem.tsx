import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';
import ItemModel from "../models/ItemModel";

export default function CardItem({item}: {item: ItemModel}) {
  return (
    <Card sx={{ minHeight: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.substanceName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.substanceCode}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" startIcon={<AddShoppingCartIcon/>}>
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
}

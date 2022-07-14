import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';

export default function CardItem(props: any) {
  return (
    <Card sx={{ minHeight: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.substanceName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.substanceCode}
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

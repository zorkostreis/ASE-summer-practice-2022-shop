import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";

import react from 'react';

export default function CardItem({product}) {
  return (
    <Card sx={{ minHeight: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.substance.name}
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

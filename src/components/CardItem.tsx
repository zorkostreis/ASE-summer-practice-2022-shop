import react from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CardItem() {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Состав
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<AddShoppingCartIcon/>}>
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
}

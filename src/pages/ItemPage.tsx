import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {inject, observer} from "mobx-react";
import React from "react";
import {useParams} from "react-router-dom";

import {StoresNames} from "@/stores/StoreDictionary";

const ItemPage = inject(StoresNames.ItemStore)(observer((props: any) => {
  const itemStore = props.ItemStore;
  const {id} = useParams();

  const item = itemStore.getItemById(Number(id));

  return (
    <Card className="item-page-card">
      <CardContent>
        <CardMedia
          component="img"
          image="https://media.istockphoto.com/vectors/pharmacist-at-counter-in-pharmacy-vector-id1211161678"
          alt="CardMedia"
          height="350"
          title="CardMedia"
        />
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
    </Card>
  );
}));

export default ItemPage;

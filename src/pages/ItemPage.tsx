import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {inject, observer} from "mobx-react";
import React from "react";
import {useParams} from "react-router-dom";

import Header from "../components/system/Header";
import {StoresNames} from "../stores/StoreDictionary";

function ItemPage(stores: any) {
  const itemStore = stores.ItemStore;
  const {id} = useParams();

  const item = itemStore.readItem(Number(id));

  return (
    <div>
      <Header/>
      <Card sx={{
        maxWidth: "40%",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        marginTop: "2em"
      }}>
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
    </div>
  );
}

export default inject(StoresNames.ItemStoreName)(observer(ItemPage));

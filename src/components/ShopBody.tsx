import {Container, Grid} from "@mui/material";
import React from "react";

import CardItem from "./CardItem";

export default function ShopBody() {
  const products = [
    {
      "id": 462428,
      "name": "Аккупро таблетки покрыт.плен.об. 10 мг, 30 шт.",
      "createdAt": "2022-07-11T20:53:17.208Z",
      "updatedAt": "2022-07-11T20:53:17.208Z",
      "substanceId": 1,
      "substance": {
        "id": 1,
        "name": "Хинаприл",
        "code": "khinapril"
      }
    },
    {
      "id": 462429,
      "name": "Аккупро таблетки покрыт.плен.об. 20 мг, 30 шт.",
      "createdAt": "2022-07-11T20:53:17.208Z",
      "updatedAt": "2022-07-11T20:53:17.208Z",
      "substanceId": 1,
      "substance": {
        "id": 1,
        "name": "Хинаприл",
        "code": "khinapril"
      }
    },
    {
      "id": 474228,
      "name": "Аккупро таблетки покрыт.плен.об. 40 мг, 30 шт.",
      "createdAt": "2022-07-11T20:53:17.208Z",
      "updatedAt": "2022-07-11T20:53:17.208Z",
      "substanceId": 1,
      "substance": {
        "id": 1,
        "name": "Хинаприл",
        "code": "khinapril"
      }
    },
    {
      "id": 473557,
      "name": "Камфорный спирт, флаконы 10% , 40 мл",
      "createdAt": "2022-07-11T20:53:17.222Z",
      "updatedAt": "2022-07-11T20:53:17.222Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    },
    {
      "id": 473558,
      "name": "Камфорное масло, флаконы 10% , 30 мл",
      "createdAt": "2022-07-11T20:53:17.223Z",
      "updatedAt": "2022-07-11T20:53:17.223Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    },
    {
      "id": 931433,
      "name": "Камфорный спирт 2%, флаконы 2% , 40 мл",
      "createdAt": "2022-07-11T20:53:17.223Z",
      "updatedAt": "2022-07-11T20:53:17.223Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    },
    {
      "id": 483284,
      "name": "Камфорное масло 10% фл, 30 мл",
      "createdAt": "2022-07-11T20:53:17.223Z",
      "updatedAt": "2022-07-11T20:53:17.223Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    },
    {
      "id": 1278432,
      "name": "Камфорный спирт флаконы 10%, 40 мл",
      "createdAt": "2022-07-11T20:53:17.223Z",
      "updatedAt": "2022-07-11T20:53:17.223Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    },
    {
      "id": 494731,
      "name": "Камфорный спирт, флаконы 2% , 40 мл",
      "createdAt": "2022-07-11T20:53:17.223Z",
      "updatedAt": "2022-07-11T20:53:17.223Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    },
    {
      "id": 540888,
      "name": "Камфорный спирт, флаконы 10% , 40 мл",
      "createdAt": "2022-07-11T20:53:17.224Z",
      "updatedAt": "2022-07-11T20:53:17.224Z",
      "substanceId": 2,
      "substance": {
        "id": 2,
        "name": "Камфора",
        "code": "kamfora"
      }
    }
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}> {
        products.map((product) =>
          <Grid item xs={3} key={product.id}>
            <CardItem product={product}/>
          </Grid>
        )
      }
      </Grid>
    </Container>
  );
}

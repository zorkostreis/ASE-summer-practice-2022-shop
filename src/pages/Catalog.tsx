import {Container, Grid, Pagination} from "@mui/material";
import {inject, observer} from "mobx-react";
import React, {useState} from "react";

import CardItem from "../components/CardItem";
import ItemModel from "../models/ItemModel";
import {StoresNames} from "../stores/StoreDictionary";

function Catalog(stores: any) {
  const [page, setPage] = useState(1);

  const {items} = stores.CardStore;

  const itemsPerPage = 8;
  const pagesCount = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Pagination
        count={pagesCount}
        page={page}
        onChange={handleChange}
        size="large"
        className="pagination-bar"
        showFirstButton
        showLastButton
      />
      <Grid container spacing={2}> {
        currentItems.map((item: ItemModel) =>
          <Grid item xs={3} key={item.id}>
            <CardItem item={item}/>
          </Grid>
        )
      }
      </Grid>
    </Container>
  );
}

export default inject(StoresNames.CardStoreName)(observer(Catalog));

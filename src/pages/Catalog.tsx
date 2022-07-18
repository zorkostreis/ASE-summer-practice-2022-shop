import {Grid, Pagination} from "@mui/material";
import {inject, observer} from "mobx-react";
import React, {useEffect, useState} from "react";

import CardItem from "../components/CardItem";
import Header from "../components/system/Header";
import ItemModel from "../models/ItemModel";
import {ServicesNames} from "../services/ServiceDictionary";
import {StoresNames} from "../stores/StoreDictionary";

function Catalog(props: any) {
  const [page, setPage] = useState(1);

  const itemsPerPage = 32;
  const pagesCount = Math.ceil(props.CardStore.count / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    props.ItemService.getItems((page - 1) * itemsPerPage, itemsPerPage);
  }, [page]);

  return (
    <div>
      <Header/>
      <Pagination
        count={pagesCount}
        page={page}
        onChange={handleChange}
        size="large"
        className="pagination-bar"
        showFirstButton
        showLastButton
      />
      <Grid container spacing={2} maxWidth="95%" margin="auto"> {
        props.CardStore.items.map((item: ItemModel) =>
          <Grid item xs={3} key={item.id}>
            <CardItem item={item}/>
          </Grid>
        )
      }
      </Grid>
    </div>
  );
}

export default inject(StoresNames.CardStoreName, ServicesNames.ItemServiceName)(observer(Catalog));

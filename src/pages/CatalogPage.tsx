import {Grid, Pagination} from "@mui/material";
import {inject, observer} from "mobx-react";
import React, {useEffect, useState} from "react";

import ItemCard from "../components/ItemCard";
import Header from "../components/system/Header";
import ItemModel from "../models/ItemModel";
import {ServicesNames} from "../services/ServiceDictionary";
import {StoresNames} from "../stores/StoreDictionary";

function CatalogPage(props: any) {
  const [page, setPage] = useState(1);

  const itemsPerPage = 32;
  const pagesCount = Math.ceil(props.ItemStore.count / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    props.ItemService.setItemStore((page - 1) * itemsPerPage, itemsPerPage);
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
        props.ItemStore.items.map((item: ItemModel) =>
          <Grid item xs={3} key={item.id}>
            <ItemCard item={item}/>
          </Grid>
        )
      }
      </Grid>
    </div>
  );
}

export default inject(StoresNames.ItemStoreName, ServicesNames.ItemServiceName)(observer(CatalogPage));

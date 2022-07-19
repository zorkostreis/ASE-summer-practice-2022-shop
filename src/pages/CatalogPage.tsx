import {Grid, Pagination} from "@mui/material";
import {inject, observer} from "mobx-react";
import React, {useEffect, useState} from "react";

import ItemCard from "../components/ItemCard";
import ItemModel from "../models/ItemModel";
import ItemService from "../services/ItemService";
import {ServicesNames} from "../services/ServiceDictionary";
import ItemStore from "../stores/ItemStore";
import {StoresNames} from "../stores/StoreDictionary";

interface props {
  [StoresNames.ItemStoreName]: ItemStore,
  [ServicesNames.ItemServiceName]: ItemService,
}

const CatalogPage = inject(StoresNames.ItemStoreName, ServicesNames.ItemServiceName)(observer((props: props) => {
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
}));

export default CatalogPage;
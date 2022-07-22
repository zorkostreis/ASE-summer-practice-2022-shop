import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {IconButton, Paper, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";
import {Link} from "react-router-dom";

import ItemModel from "../models/ItemModel";
import {StoresNames} from "../stores/StoreDictionary";

const BasketPage = inject(StoresNames.BasketStoreName)(observer((props: any) => {
  return (
    props.BasketStore.items.map((item: ItemModel) =>
      <Paper key={item.id} className='basket-item'>
        <div>
          <Typography variant="h6">
            {item.name}
          </Typography>
          <Typography variant="body1">
            {item.substanceName}
          </Typography>
        </div>
        <div>
          <IconButton color="info"
            size="large"
            component={Link}
            to={`/${item.id}`}
          >
            <ReadMoreIcon/>
          </IconButton>
          <IconButton color="error"
            size="large"
            onClick={() => props.BasketStore.deleteItem(item.id)}
          >
            <DeleteOutlineIcon/>
          </IconButton>
        </div>
      </Paper>
    )
  );
}));

export default BasketPage;

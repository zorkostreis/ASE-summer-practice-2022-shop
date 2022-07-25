import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {IconButton, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";
import {Link} from "react-router-dom";

import {StoresNames} from "@/stores/StoreDictionary";

import Counter from "./common/Counter";

const CartItem = inject(StoresNames.CartStore)(observer((props: any) => {
  return (
    <div className="cart-item">
      <div className="d-flex flex-column gap-3">
        <Typography variant="h6">
          {props.item.info.name}
        </Typography>
        <Typography variant="body1">
          {props.item.info.substanceName}
        </Typography>
        <Counter item={props.item}/>
      </div>
      <div className="d-flex flex-column justify-content-center gap-3">
        <IconButton color="info"
          size="large"
          component={Link}
          to={`/${props.item.info.id}`}
        >
          <ReadMoreIcon/>
        </IconButton>
        <IconButton color="default"
          size="large"
          onClick={() => props.CartStore.deleteItemById(props.item.info.id)}
        >
          <DeleteOutlineIcon/>
        </IconButton>
      </div>
    </div>
  );
}));

export default CartItem;

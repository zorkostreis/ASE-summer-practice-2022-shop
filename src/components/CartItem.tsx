import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import RemoveIcon from "@mui/icons-material/Remove";
import {Button, ButtonGroup, IconButton, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";
import {Link} from "react-router-dom";

import {StoresNames} from "../stores/StoreDictionary";
import colors from "../styles/colors.modules.scss";

const CartItem = inject(StoresNames.CartStoreName)(observer((props: any) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <Typography variant="h6">
          {props.item.info.name}
        </Typography>
        <Typography variant="body1">
          {props.item.info.substanceName}
        </Typography>
        <ButtonGroup size="small">
          <Button onClick={() => props.CartStore.decrementById(props.item.info.id)}>
            <RemoveIcon/>
          </Button>
          <Button style={{ color: colors.primary, borderColor: colors.primarySoft }} disabled>
            {props.item.amount}
          </Button>
          <Button onClick={() => props.CartStore.incrementById(props.item.info.id)}>
            <AddIcon/>
          </Button>
        </ButtonGroup>
      </div>
      <div className="cart-item-buttons">
        <IconButton color="info"
          size="large"
          component={Link}
          to={`/${props.item.info.id}`}
        >
          <ReadMoreIcon/>
        </IconButton>
        <IconButton color="default"
          size="large"
          onClick={() => props.CartStore.deleteItem(props.item.info.id)}
        >
          <DeleteOutlineIcon/>
        </IconButton>
      </div>
    </div>
  );
}));

export default CartItem;

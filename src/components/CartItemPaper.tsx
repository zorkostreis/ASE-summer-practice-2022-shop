import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import RemoveIcon from "@mui/icons-material/Remove";
import {Button, ButtonGroup, IconButton, Paper, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {StoresNames} from "../stores/StoreDictionary";

const CartItemPaper = inject(StoresNames.CartStoreName)(observer((props: any) => {
  const [amount, setAmount] = useState(props.item.amount);

  useEffect(() => {
    props.CartStore.setAmountById(props.item.info.id, amount as number);
  }, [amount]);

  return (
    <Paper  className='cart-item'>
      <div>
        <Typography variant="h6">
          {props.item.info.name}
        </Typography>
        <Typography variant="body1">
          {props.item.info.substanceName}
        </Typography>
        <ButtonGroup size="small" style={{ marginTop: "1em" }}>
          <Button onClick={() => setAmount(amount - 1)}>
            <RemoveIcon/>
          </Button>
          <Button>{amount}</Button>
          <Button onClick={() => setAmount(amount + 1)}>
            <AddIcon/>
          </Button>
        </ButtonGroup>
      </div>
      <div>
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
    </Paper>
  );
}));

export default CartItemPaper;

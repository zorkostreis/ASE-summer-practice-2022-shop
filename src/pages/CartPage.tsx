import '../styles/cart.scss';

import {Button, TextField, Typography} from "@mui/material";
import {inject, observer} from "mobx-react";
import React from "react";

import CartItem from "../components/CartItem";
import CartItemModel from "../models/CartItemModel";
import {StoresNames} from "../stores/StoreDictionary";

const CartPage = inject(StoresNames.CartStoreName)(observer((props: any) => {
  const cartItems = props.CartStore.items.map((item: CartItemModel) =>
    <CartItem key={item.info.id} item={item}/>
  );

  return (
    <div className="cart-page">
      <div className="cart-items-list">
        <Typography variant="h5" style={{ padding: "1em"}}>Shopping Cart</Typography>
        {cartItems}
      </div>
      <div className="cart-form">
        <Typography variant="h5">Contact Form</Typography>
        <TextField label="Name" variant="outlined"/>
        <TextField label="Email" variant="outlined"/>
        <TextField label="Phone Number" variant="outlined"/>
        <Button variant="contained" size="large" color="secondary">Order</Button>
      </div>
    </div>
  );
}));

export default CartPage;

import {inject, observer} from "mobx-react";
import React from "react";

import CartItemPaper from "../components/CartItemPaper";
import CartItemModel from "../models/CartItemModel";
import {StoresNames} from "../stores/StoreDictionary";


const CartPage = inject(StoresNames.CartStoreName)(observer((props: any) => {
  return (
    props.CartStore.items.map((item: CartItemModel) =>
      <CartItemPaper key={item.info.id} item={item}/>
    )
  );
}));

export default CartPage;

import {makeAutoObservable} from "mobx";

import CartItemModel from "../models/CartItemModel";
import ItemModel from "../models/ItemModel";

export default class CartStore {
  items: CartItemModel[];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  };

  addItem = (itemToAdd: ItemModel) => {
    const foundItemIndex = this.findItemIndex(itemToAdd.id);

    foundItemIndex === -1
      ? this.items = [new CartItemModel(itemToAdd), ...this.items]
      : this.items[foundItemIndex].amount += 1;
  };

  deleteItem = (id: number) => {
    this.items = this.items.filter(item => item.info.id !== id);
  };

  findItemIndex = (id: number) => {
    return this.items.findIndex(item => item.info.id === id);
  };

  setAmountById = (id: number, amount: number) => {
    const foundItemIndex = this.findItemIndex(id);

    amount === 0
      ? this.deleteItem(id)
      : this.items[foundItemIndex].amount = amount;
  };
}

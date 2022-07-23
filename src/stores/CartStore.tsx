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

  decrementById = (id: number) => {
    const foundItemIndex = this.findItemIndex(id);

    this.items[foundItemIndex].amount === 1
      ? this.deleteItem(id)
      : this.items[foundItemIndex].amount -= 1;
  };

  incrementById = (id: number) => {
    this.items[this.findItemIndex(id)].amount += 1;
  };

  getTotalAmount = () => {
    return this.items.map((item: CartItemModel) => item.amount)
      .reduce((total, arg) => total + arg, 0);
  };
}

import {makeAutoObservable} from "mobx";

import CartItemModel from "../models/CartItemModel";
import ItemModel from "../models/ItemModel";

export default class CartStore {
  items: CartItemModel[];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  };

  addItem = (newItem: ItemModel) => {
    this.items = [new CartItemModel(newItem), ...this.items];
  };

  deleteItemById = (id: number) => {
    this.items = this.items.filter(item => item.info.id !== id);
  };

  findItemById = (id: number) => {
    return this.items.find(item => item.info.id === id);
  };

  getTotalAmount = () => {
    return this.items.reduce((total, item) => total + item.amount, 0);
  };

  incrementAmount = (item: CartItemModel) => {
    item.amount += 1;
  };

  decrementAmount = (item: CartItemModel) => {
    item.amount === 1
      ? this.deleteItemById(item.info.id)
      : item.amount -= 1;
  };
}

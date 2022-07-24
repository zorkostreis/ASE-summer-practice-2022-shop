import {makeAutoObservable} from "mobx";

import ItemModel from "./ItemModel";

export default class CartItemModel {
  info: ItemModel;

  amount: number;

  constructor(item: ItemModel) {
    makeAutoObservable(this);
    this.info = item;
    this.amount = 1;
  }
}

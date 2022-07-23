import ItemModel from "./ItemModel";
import {makeAutoObservable} from "mobx";

export default class CartItemModel {
  info: ItemModel;

  amount: number;

  constructor(item: ItemModel) {
    makeAutoObservable(this);
    this.info = item;
    this.amount = 1;
  }
}

import ItemModel from "./ItemModel";

export default class CartItemModel {
  info: ItemModel;

  amount: number;

  constructor(item: ItemModel) {
    this.info = item;
    this.amount = 1;
  }
}

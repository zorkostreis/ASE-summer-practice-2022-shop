import {makeAutoObservable} from "mobx";

import ItemModel from "../models/ItemModel";

export default class BasketStore {
  items: ItemModel[];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  };

  addItem = (newItem: ItemModel) => {
    this.items = [...this.items, newItem];
  };
}

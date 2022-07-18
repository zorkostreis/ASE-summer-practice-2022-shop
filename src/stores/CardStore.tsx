import {makeAutoObservable} from "mobx";

import ItemModel from "../models/ItemModel";
import IProduct from "../models/ProductInterface";

export default class CardStore {
  items: ItemModel[];

  count: number;

  constructor() {
    makeAutoObservable(this);
    this.items = [];
    this.count = 0;
  };

  setItems = (products: IProduct[]) => {
    this.items = products.map((product: IProduct) => new ItemModel(product));
  };

  setCount = (count: number) => {
    this.count = count;
  };

  createItem (product: IProduct) {
    const newItem = new ItemModel(product);
    this.items = [...this.items, newItem];
  };

  readItem(id: number) {
    return this.items.find((item: ItemModel) => item.id === id);
  }

  updateItem (product: ItemModel) {
    this.items = (this.items.map(item => (item.id === product.id ? product : item)));
  };

  deleteItem (id: number) {
    this.items = this.items.filter(item => item.id !== id);
  };
}

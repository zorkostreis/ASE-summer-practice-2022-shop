import {makeAutoObservable} from "mobx";

import ItemModel from "@/models/ItemModel";
import IProduct from "@/models/ProductInterface";

export default class ItemStore {
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

  getItemById(id: number) {
    return this.items.find((item: ItemModel) => item.id === id);
  }
}

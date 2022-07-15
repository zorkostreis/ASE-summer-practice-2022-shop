import {makeAutoObservable} from "mobx";

import ItemModel from "../models/ItemModel";
import IProduct from "../models/ProductInterface";

export default class CardStore{
  items: ItemModel[];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  }

  setItems = (products: IProduct[]) => {
    this.items = products.map((product: IProduct) => new ItemModel(product));
  };

  createItem (product: IProduct) {
    const newItem = new ItemModel(product);
    this.items = [...this.items, newItem];
  }

  updateItem (product: ItemModel) {
    this.items = (this.items.map(item => (item.id === product.id ? product : item)));
  }

  deleteItem (id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}

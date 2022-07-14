import {makeAutoObservable} from "mobx";
import ItemModel from "../models/ItemModel";

export default class CardStore{
  items: ItemModel[];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  }

  addProducts = (products: any[]) => {
    this.items = products.map((product: any) => new ItemModel(product));
  };

  // createItem (props: any) {
  //   const newItem = new ItemModel(props);
  //   this.items = [...this.items, newItem];
  // }
  //
  // updateItem (props: any) {
  //   this.items = (this.items.map(item => (item.id === props.id ? props : item)));
  // }
  //
  // deleteItem (id: number) {
  //   this.items = this.items.filter(item => item.id !== id);
  // }
}

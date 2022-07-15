import IProduct from "./ProductInterface";

export default class ItemModel {
  id: number;

  name: string;

  createdAt: string;

  updatedAt: string;

  substanceId: number;

  substanceName: string;

  substanceCode: string;

  constructor(item: IProduct) {
    this.id = item.id;
    this.name = item.name;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
    this.substanceId = item.substance.id;
    this.substanceName = item.substance.name;
    this.substanceCode = item.substance.code;
  }
}

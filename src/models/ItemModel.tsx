export default class ItemModel {
  id: number;

  name: string;

  substanceId: number;

  substanceName: string;

  substanceCode: string;

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.substanceId = product.substance.id;
    this.substanceName = product.substance.name;
    this.substanceCode = product.substance.code;
  }
}

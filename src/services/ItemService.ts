import ItemStore from "../stores/ItemStore";
import NetworkService from "./NetworkService";

export default class ItemService {
  itemStore: ItemStore;

  networkService: NetworkService;

  constructor(itemStore: ItemStore, networkService: NetworkService) {
    this.itemStore = itemStore;
    this.networkService = networkService;
  }

  async setItemStore(offset: number, limit: number) {
    const url = 'products/part';
    const requestType = 'POST';
    const body = JSON.stringify({ offset, limit });

    const {data} = await this.networkService.fetch(url, requestType, body);
    this.itemStore.setItems(data.products);
    this.itemStore.setCount(data.count);
  };
}

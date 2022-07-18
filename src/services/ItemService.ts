import CardStore from "../stores/CardStore";
import NetworkService from "./NetworkService";

export default class ItemService {
  cardStore: CardStore;

  networkService: NetworkService;

  constructor(cardStore: CardStore, networkService: NetworkService) {
    this.cardStore = cardStore;
    this.networkService = networkService;
  }

  async getItems(offset: number, limit: number) {
    const {data} = await this.networkService.fetchProducts(offset, limit);
    this.cardStore.setItems(data.products);
    this.cardStore.setCount(data.count);
  };
}

export default interface IProduct{
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  substanceId: number;
  substance: {
    id: number;
    name: string;
    code: string
  }
}

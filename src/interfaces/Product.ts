import Review from "./Review";

export default interface Product {
  id: string;
  imageUrl: string;
  productName: string;
  category: string;
  price: number;
  avgRating: number;
  reviews: Review[];
  description: string;
}

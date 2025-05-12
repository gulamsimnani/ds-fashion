export interface Product {
  productId: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  category: string;
  color: string;
  size: string;
  bestseller: boolean;
  images: string[]; // updated for image array
  badge?: string;   // if applicable
}

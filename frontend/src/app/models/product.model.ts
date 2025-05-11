export interface Product {
  _id?: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  category: string;
  size: string;
  bestseller?: boolean;
  image?: string;
  productId?: string;
  id: string;
  hoverImage?: string;  // optional if it’s not always present
  badge?: string;       // optional, e.g., "New", "Sale"
  color?: string;
}

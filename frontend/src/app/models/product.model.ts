export interface Product {
  _id?: string;
  productId: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  color?: string;
  size?: string;
  images: string[];

  // Newly added boolean flags
  bestseller?: boolean;
  featured?: boolean;
  newArrival?: boolean;
  onSale?: boolean;
  soldOut?: boolean;
  inStock?: boolean;

  // Optional badge for UI
  badge?: string;

  // Add this if you use `__v` from Mongo
  __v?: number;
}

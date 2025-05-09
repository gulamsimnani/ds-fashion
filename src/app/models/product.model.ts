export interface Product {
  id?: string | number;
  title: string;
  description?: string;
  image: string;
  hoverImage?: string;
  price: number;
  oldPrice?: number;
  rating: number; // out of 5
  reviews: number;
  badge?: string; // e.g., "Sale"
  category: 'slim' | 'straight' | 'tapered' | 'loose';
  bestseller?: boolean
}

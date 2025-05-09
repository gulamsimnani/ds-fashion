// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    // You can replace this with an actual HTTP call
    const products: Product[] = [
      {
        id: 1,
        title: 'Classic T-Shirt',
        price: 89.99,
        oldPrice: 129.99,
        image: 'assets/img/product/product-11.webp',
        hoverImage: 'assets/img/product/product-11-variant.webp',
        category: 'slim',
        rating: 4.5,
        reviews: 24,
        badge: 'Sale'
      },
      {
        id: 2,
        title: 'Wireless Headphones',
        price: 199.99,
        image: 'assets/img/product/product-10.webp',
        category: 'straight',
        rating: 4.0,
        reviews: 18
      },
      {
        id: 3,
        title: 'Leather Wallet',
        price: 49.99,
        image: 'assets/img/product/product-9.webp',
        category: 'loose',
        rating: 4.2,
        reviews: 30
      }
    ];

    return of(products);
  }
}

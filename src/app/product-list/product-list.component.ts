import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryTabsComponent } from '../category-tabs/category-tabs.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CategoryTabsComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: '1',
      title: 'Elegant Shirt',
      image: 'assets/img/product/product-11.webp',
      hoverImage: 'assets/img/product/product-11-variant.webp',
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.5,
      reviews: 24,
      badge: 'Sale',
      category: 'slim',
    },
    {
      id: '2',
      title: 'Smartwatch',
      image: 'assets/img/product/product-10.webp',
      hoverImage: 'assets/img/product/product-10.webp',
      price: 199.99,
      rating: 4,
      reviews: 14,
      badge: 'New',
      category: 'slim',
    },
    {
      id: '3',
      title: 'Kids Bag',
      image: 'assets/img/product/product-9.webp',
      hoverImage: 'assets/img/product/product-9-variant.webp',
      price: 59.99,
      rating: 4.8,
      reviews: 18,
      category: 'slim',
    },
    {
      id: '4',
      title: 'Elegant Shirt',
      image: 'assets/img/product/product-11.webp',
      hoverImage: 'assets/img/product/product-11-variant.webp',
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.5,
      reviews: 24,
      badge: 'Sale',
      category: 'straight',
    },
    {
      id: '5',
      title: 'Smartwatch',
      image: 'assets/img/product/product-10.webp',
      hoverImage: 'assets/img/product/product-10.webp',
      price: 199.99,
      rating: 4,
      reviews: 14,
      category: 'straight',
    },
    {
      id: '6',
      title: 'Kids Bag',
      image: 'assets/img/product/product-9.webp',
      hoverImage: 'assets/img/product/product-9-variant.webp',
      price: 59.99,
      rating: 4.8,
      reviews: 18,
      category: 'straight',
    },
    {
      id: '7',
      title: 'Elegant Shirt',
      image: 'assets/img/product/product-11.webp',
      hoverImage: 'assets/img/product/product-11-variant.webp',
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.5,
      reviews: 24,
      badge: 'Sale',
      category: 'straight',
    },
    {
      id: '8',
      title: 'Smartwatch',
      image: 'assets/img/product/product-10.webp',
      hoverImage: 'assets/img/product/product-10.webp',
      price: 199.99,
      rating: 4,
      reviews: 14,
      category: 'tapered',
    },
    {
      id: '9',
      title: 'Kids Bag',
      image: 'assets/img/product/product-9.webp',
      hoverImage: 'assets/img/product/product-9-variant.webp',
      price: 59.99,
      rating: 4.8,
      reviews: 18,
      category: 'tapered',
    },
    {
      id: '10',
      title: 'Elegant Shirt',
      image: 'assets/img/product/product-11.webp',
      hoverImage: 'assets/img/product/product-11-variant.webp',
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.5,
      reviews: 24,
      badge: 'Sale',
      category: 'tapered',
    },
    {
      id: '11',
      title: 'Smartwatch',
      image: 'assets/img/product/product-10.webp',
      hoverImage: 'assets/img/product/product-10.webp',
      price: 199.99,
      rating: 4,
      reviews: 14,
      category: 'tapered',
    },
    {
      id: '12',
      title: 'Kids Bag',
      image: 'assets/img/product/product-9.webp',
      hoverImage: 'assets/img/product/product-9-variant.webp',
      price: 59.99,
      rating: 4.8,
      reviews: 18,
      category: 'loose',
    }
  ];

  selectedCategory: string = 'all';

  get filteredProducts(): Product[] {
    return this.selectedCategory === 'all'
      ? this.products
      : this.products.filter(product => product.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}

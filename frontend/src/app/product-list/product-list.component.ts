import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryTabsComponent } from '../category-tabs/category-tabs.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CategoryTabsComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Output() forwardView = new EventEmitter<string>();
  @Output() forwardCart = new EventEmitter<any>();

  products: Product[] = [];
  selectedCategory: string = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res: Product[] | any) => {
      this.products = res.products || [];
      console.log('product', this.products);
    });
  }

  get filteredProducts(): Product[] {
    return this.selectedCategory === 'all'
      ? this.products
      : this.products.filter(
          (product) => product.category === this.selectedCategory
        );
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  viewPoducts(productId: string) {
    this.forwardView.emit(productId);
  }

  onAddToCartItem(item: any) {
    this.forwardCart.emit(item);
  }
}

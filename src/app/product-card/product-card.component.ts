import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewItem = new EventEmitter<any>();
  @Output() addToCart = new EventEmitter<any>();

  sendItems() {
    const product = {
      productId: this.product.id,
      title: this.product.title,
      image: this.product.image,
      price: this.product.price,
      quantity: 1,
      color: this.product.color,
      size: this.product.size,
      category: this.product.category
    };
    this.viewItem.emit(product);
  }

  handleAddToCart() {
    const item = {
      productId: this.product.id,
      title: this.product.title,
      image: this.product.image,
      price: this.product.price,
      quantity: 1,
      color: this.product.color,
      size: this.product.size,
      category: this.product.category
    };
  
    this.addToCart.emit(item);
  }
}

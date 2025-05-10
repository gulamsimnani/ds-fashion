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
    this.viewItem.emit();
  }

  handleAddToCart() {
    const item = {
      productId: this.product.id,
      title: this.product.title,
      image: this.product.image,
      price: this.product.price,
      quantity: 1,
      color: this.product.color,
      size: this.product.size
    };
  
    this.addToCart.emit(item);
  }
}

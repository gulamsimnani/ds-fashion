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
    console.log('C')
  }

  handleAddToCart() {
    const item = {
      productId: this.product.id,
      name: this.product.id,
      image: this.product.image,
      price: this.product.price,
      quantity: 1
      // Add size, color, etc. if applicable
    };
  
    this.addToCart.emit(item);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [];
  couponCode = '';
  couponMessage = '';
  discountPercentage = 0;
  discountAmount = 0;
  shippingMethod = 'standard';
  shippingCost = 4.99;
  taxRate = 0.09; // 9% tax
  tax = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.recalculateCharges();
    });
  }

  updateQuantity(productId: number, newQty: number): void {
    newQty = Math.max(1, Math.min(10, newQty));
    this.cartService.updateQuantity(productId, newQty);
    this.recalculateCharges();
  }

  increase(productId: number): void {
    this.cartService.increaseQty(productId);
    this.recalculateCharges();
  }

  decrease(productId: number): void {
    this.cartService.decreaseQty(productId);
    this.recalculateCharges();
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id);
    this.recalculateCharges();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.recalculateCharges();
  }

  applyCoupon(): void {
    const subtotal = this.getSubtotal();
    if (this.couponCode.toLowerCase() === 'save10') {
      this.discountPercentage = 10;
      this.discountAmount = (subtotal * this.discountPercentage) / 100;
      this.couponMessage = 'Coupon applied! 10% discount.';
    } else {
      this.discountPercentage = 0;
      this.discountAmount = 0;
      this.couponMessage = 'Invalid coupon code.';
    }
  }

  onShippingChange(method: string): void {
    this.shippingMethod = method;
    switch (method) {
      case 'standard':
        this.shippingCost = 4.99;
        break;
      case 'express':
        this.shippingCost = 12.99;
        break;
      case 'free':
        this.shippingCost = 0;
        break;
    }
    this.recalculateCharges();
  }

  refreshCart(): void {
    this.cartItems = [...this.cartService.getItems()];
    this.couponMessage = '';
    this.recalculateCharges();
  }

  getSubtotal(): number {
    return this.cartService.getTotal();
  }

  getFinalTotal(): number {
    const subtotal = this.getSubtotal();
    const finalTotal = subtotal - this.discountAmount + this.shippingCost + this.tax;
    return parseFloat(finalTotal.toFixed(2));
  }

  private recalculateCharges(): void {
    const subtotal = this.getSubtotal();
    this.tax = subtotal * this.taxRate;
    if (this.discountPercentage > 0) {
      this.discountAmount = (subtotal * this.discountPercentage) / 100;
    }
  }
}

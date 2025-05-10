import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal = 0;
  shipping = 9.99;
  taxRate = 0.1;
  tax = 0;
  total = 0;
  promoCode: string = '';
  promoDiscount = 0; // in percent (e.g., 10 for 10%)
  validPromoCodes: { [key: string]: number } = {
    SAVE10: 10,
    FREESHIP: 5,
    WELCOME15: 15,
  };

  // Customer Information
customer = {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
};

// Shipping Address
shippingAddress = {
  address: '',
  apartment: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  saveAddress: false,
  billingSameAsShipping: true
};
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  applyPromoCode() {
    const code = this.promoCode.trim().toUpperCase();
    if (this.validPromoCodes[code]) {
      this.promoDiscount = this.validPromoCodes[code];
    } else {
      this.promoDiscount = 0;
      alert('Invalid Promo Code');
    }
    this.calculateTotals(); // Recalculate totals with promo
  }

  calculateTotals() {
    this.subtotal = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.tax = +(this.subtotal * this.taxRate).toFixed(2);
    let totalBeforeDiscount = this.subtotal + this.shipping + this.tax;
    let discountAmount = (this.promoDiscount / 100) * totalBeforeDiscount;
    this.total = +(totalBeforeDiscount - discountAmount).toFixed(2);
  }
  submitOrder() {
  console.log('Customer Info:', this.customer);
  console.log('Shipping Address:', this.shippingAddress);
  // You can call your backend API to save this data
}
}

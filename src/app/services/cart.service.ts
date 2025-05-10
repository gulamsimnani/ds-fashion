import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItemsSubject.next(JSON.parse(savedCart));
    }
  }

  private updateLocalStorage(items: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  getItems(): CartItem[] {
    return this.cartItemsSubject.getValue();
  }

  addToCart(item: CartItem): void {
  const currentItems = this.getItems();

  // Check if the same item (id + color + size + category) exists
  const index = currentItems.findIndex(
    (p) =>
      p.id === item.id &&
      p.color === item.color &&
      p.size === item.size &&
      p.category === item.category
  );

  if (index > -1) {
    currentItems[index].quantity += item.quantity;
  } else {
    currentItems.push(item);
  }

  this.cartItemsSubject.next(currentItems);
  this.updateLocalStorage(currentItems);
}


  updateQuantity(id: number, quantity: number): void {
    const updatedItems = this.getItems().map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    this.cartItemsSubject.next(updatedItems);
    this.updateLocalStorage(updatedItems);
  }

  increaseQty(id: number): void {
    const updatedItems = this.getItems().map((item) =>
      item.id === id && item.quantity < 10
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    this.cartItemsSubject.next(updatedItems);
    this.updateLocalStorage(updatedItems);
  }

  decreaseQty(id: number): void {
    const updatedItems = this.getItems().map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    this.cartItemsSubject.next(updatedItems);
    this.updateLocalStorage(updatedItems);
  }

  removeItem(itemToRemove: CartItem): void {
  const currentItems = this.getItems().filter(
    (item) =>
      !(
        item.id === itemToRemove.id &&
        item.color === itemToRemove.color &&
        item.size === itemToRemove.size &&
        item.category === itemToRemove.category
      )
  );
  this.cartItemsSubject.next(currentItems);
  this.updateLocalStorage(currentItems);
}


  clearCart(): void {
    this.cartItemsSubject.next([]);
    localStorage.removeItem('cart');
  }

  getTotal(): number {
    return this.getItems().reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem, CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  cartCount: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      this.cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    });
  }
}

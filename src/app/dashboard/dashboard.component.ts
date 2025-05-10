import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../services/cart.service';
declare var AOS: any;
declare var GLightbox: any;
declare var Drift: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CategorySliderComponent, ProductListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  constructor(private router: Router, private cartService: CartService){}
  jeansCategories = [
    {
      image: 'assets/img/product/product-1.webp',
      title: 'Vestibulum ante',
      count: 4,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-6.webp',
      title: 'Maecenas nec',
      count: 8,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-3.webp',
      title: 'Donec sodales',
      count: 6,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-4.webp',
      title: 'Curabitur',
      count: 10,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-4.webp',
      title: 'Curabitur',
      count: 10,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-1.webp',
      title: 'Vestibulum ante',
      count: 4,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-6.webp',
      title: 'Maecenas nec',
      count: 8,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-3.webp',
      title: 'Donec sodales',
      count: 6,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-4.webp',
      title: 'Curabitur',
      count: 10,
      link: 'category.html',
    },
    {
      image: 'assets/img/product/product-4.webp',
      title: 'Curabitur',
      count: 10,
      link: 'category.html',
    }
  ];

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev btn btn-outline-secondary me-2"><i class="bi bi-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next btn btn-outline-secondary ms-2"><i class="bi bi-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  ngAfterViewInit(): void {
    AOS.init();
    GLightbox();
    // Initialize Drift here if required
  }

  viewDetails(): void{
    this.router.navigate(['/products-details']);
  }

  onAddToCart(product: any) {
    console.log("product", product);
    const item: CartItem = { ...product, quantity: 1 };
    this.cartService.addToCart(item);
    this.router.navigate(['/cart']);
  }
}


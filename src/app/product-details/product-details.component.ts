import { Component } from '@angular/core';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,CategorySliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  jeansCategories = [
    {
      image: 'assets/img/product/product-1.webp'
    },
    {
      image: 'assets/img/product/product-6.webp'
    },
    {
      image: 'assets/img/product/product-3.webp'
    },
    {
      image: 'assets/img/product/product-4.webp'
    },
    {
      image: 'assets/img/product/product-4.webp'
    },
    {
      image: 'assets/img/product/product-1.webp'
    },
    {
      image: 'assets/img/product/product-6.webp'
    },
    {
      image: 'assets/img/product/product-3.webp'
    },
    {
      image: 'assets/img/product/product-4.webp'
    },
    {
      image: 'assets/img/product/product-4.webp'
    }
  ];
  slideConfig = {
    slidesToShow: 4,
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
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss'],
})
export class CategorySliderComponent {
  categories = [
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
}

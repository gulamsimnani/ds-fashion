import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import Swiper from 'swiper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss'],
})
export class CategorySliderComponent implements OnInit {
  categories: any[] = [];
  swiperConfig: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('assets/data/jeans-categories.json')
      .subscribe((data) => {
        this.categories = data;
      });
  }
}

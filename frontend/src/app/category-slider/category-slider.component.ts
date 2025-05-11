import { Component, Input } from '@angular/core';
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
  @Input() categories: any[] = [];
  @Input() slideConfig: any;
  
}

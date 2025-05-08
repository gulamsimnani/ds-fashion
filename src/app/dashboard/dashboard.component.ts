import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { ProductListComponent } from '../product-list/product-list.component';
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

  ngAfterViewInit(): void {
    AOS.init();
    GLightbox();
    // Initialize Drift here if required
  }

}


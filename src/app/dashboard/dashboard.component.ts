import { AfterViewInit, Component } from '@angular/core';
declare var AOS: any;
declare var GLightbox: any;
declare var Drift: any;

@Component({
  selector: 'app-dashboard',
  imports: [],
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


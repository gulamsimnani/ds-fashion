import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CategorySliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  product: any; // This will hold the product details

  jeansCategories = [
    { image: 'assets/img/product/product-1.webp' },
    { image: 'assets/img/product/product-6.webp' },
    { image: 'assets/img/product/product-3.webp' },
    { image: 'assets/img/product/product-4.webp' },
    { image: 'assets/img/product/product-4.webp' },
    { image: 'assets/img/product/product-1.webp' },
    { image: 'assets/img/product/product-6.webp' },
    { image: 'assets/img/product/product-3.webp' },
    { image: 'assets/img/product/product-4.webp' },
    { image: 'assets/img/product/product-4.webp' }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev btn btn-outline-secondary me-2"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next btn btn-outline-secondary ms-2"><i class="bi bi-chevron-right"></i></button>',
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the product ID from the route
    this.productId = this.route.snapshot.paramMap.get('id')!;

    // Subscribe to router events and listen for NavigationStart event
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart)
      )
      .subscribe(() => {
        // Try to get the product state from the router navigation
        const navigation = this.router.getCurrentNavigation();
        console.log("navig", navigation)
        if (navigation?.extras?.state?.['product']) {
          this.product = navigation.extras.state['product'];  // Assign product from state
        } else {
          // If no product found in the state, fetch it manually using the product ID
          this.getProductDetails(this.productId);
        }
      });

    // If state is not available, fetch product details
    if (!this.product) {
      this.getProductDetails(this.productId);
    }
  }

  // Fetch product details (you can replace this with an API call)
  getProductDetails(productId: string) {
    console.log('Fetching details for product ID:', productId);

    // Example mock data - you can replace this with an API call
    this.product = {
      name: 'Denim Jeans',
      description: 'Lorem ipsum dolor sit amet...',
      price: 249.99,
      rating: 4.5,
      ratingCount: 42,
      countInStock: 24,
      colors: ['#222', '#c0c0c0', '#1e3a8a', '#b76e79'],
      sizes: ['S', 'M', 'L'],
    };
  }
  // Function to generate the number of filled stars based on rating
  getFilledStars() {
    return Math.floor(this.product?.rating);
  }

  // Function to check if there's a half star
  getHalfStar() {
    return this.product?.rating % 1 !== 0;
  }

  // Function to get the empty stars
  getEmptyStars() {
    return 5 - Math.ceil(this.product?.rating);
  }
}

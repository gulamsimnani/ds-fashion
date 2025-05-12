import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-management.component.html',
})
export class ProductManagementComponent implements OnInit {
  productForm!: FormGroup;
  products: Product[] = [];
  selectedFiles: File[] = [];
  selectedProductId: string | null = null;
  imageFile?: File;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: [null, Validators.required],
      oldPrice: [null],
      rating: [null],
      reviews: [null],
      category: [''],
      color: [''],
      size: [''],
      bestseller: [false],
      featured: [false],
      newArrival: [false],
      onSale: [false],
      soldOut: [false],
      inStock: [true], // default true
    });

    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res: Product[] | any) => {
      this.products = res.products || [];
      console.log('product', this.products);
    });
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    const formValue = this.productForm.value;

    Object.keys(formValue).forEach((key) => {
      if (key !== 'images') {
        formData.append(key, formValue[key]);
      }
    });

    this.selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    if (this.selectedProductId) {
      this.productService
        .updateProduct(this.selectedProductId, formData)
        .subscribe(() => {
          this.resetForm();
        });
    } else {
      this.productService.createProduct(formData).subscribe(() => {
        this.resetForm();
      });
    }
  }

  onEdit(product: any): void {
  this.selectedProductId = product.productId;

  this.productForm.patchValue({
    title: product.title,
    description: product.description,
    price: product.price,
    oldPrice: product.oldPrice,
    rating: product.rating,
    reviews: product.reviews,
    category: product.category,
    color: product.color,
    size: product.size,
    bestseller: product.bestseller || false,
    featured: product.featured || false,
    newArrival: product.newArrival || false,
    onSale: product.onSale || false,
    soldOut: product.soldOut || false,
    inStock: product.inStock !== undefined ? product.inStock : true
  });
}


  onDelete(productId: string): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.productService.getProducts(); // Refresh the product list after deletion
      },
      error: (err) => {
        console.error('Failed to delete product:', err);
      },
    });
  }

  resetForm(): void {
    this.productForm.reset();
    this.selectedFiles = [];
    this.selectedProductId = null;
    this.loadProducts();
  }
}

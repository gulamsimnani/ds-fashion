import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-management.component.html',
})
export class ProductManagementComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];
  selectedProductId?: string;
  imageFile?: File;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: [0, Validators.required],
      oldPrice: [''],
      rating: [''],
      reviews: [''],
      category: [''],
      color: [''],
      size: [''],
      bestseller: [false],
      image: [null]
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe((res: Product[] | any) => {
    this.products = res.products || [];
    console.log("product", this.products)
  });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    Object.entries(this.productForm.value).forEach(([key, value]) => {
  if (value !== null && value !== undefined) {
    if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, value.toString()); // ✅ Ensure string type
    }
  }
});

    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    if (this.selectedProductId) {
      formData.append('_id', this.selectedProductId);
      this.productService.update({ _id: this.selectedProductId, ...this.productForm.value }).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    } else {
      this.productService.create(formData).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    }
  }

  onEdit(product: Product) {
    this.selectedProductId = product._id;
    this.productForm.patchValue(product);
  }

  onDelete(productId: string) {
    this.productService.delete(productId).subscribe(() => {
      this.loadProducts();
    });
  }

  resetForm() {
    this.productForm.reset();
    this.selectedProductId = undefined;
    this.imageFile = undefined;
  }
}

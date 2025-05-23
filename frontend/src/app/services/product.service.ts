import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:5002/api/products';

  constructor(private http: HttpClient) {}

  // getAll(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.baseUrl);
  // }

  // create(product: FormData): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl, product);
  // }

  // update(product: Product): Observable<Product> {
  //   return this.http.put<Product>(`${this.baseUrl}/${product._id}`, product);
  // }

  // delete(id: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`);
  // }

 createProduct(data: FormData): Observable<any> {
  return this.http.post<any>(this.baseUrl, data);
}

updateProduct(id: string, data: FormData): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/${id}`, data);
}



  deleteProduct(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getProducts() {
    return this.http.get<any[]>(this.baseUrl);
  }
}

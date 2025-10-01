import { Injectable } from '@angular/core';
import { ProductsResponse } from './product.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = environment.URL_SERVICIOS; // Ejemplo: http://127.0.0.1:8000/api
  private apiUrl  = `${this.baseUrl}/products`;

  constructor(private http: HttpClient, private router: Router) { }
  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.apiUrl);
  }

  getProduct(id: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.apiUrl}/${id}`);
  }

  createProduct(Product: ProductsResponse): Observable<ProductsResponse> {
    return this.http.post<ProductsResponse>(this.apiUrl, Product);
  }

  updateProduct(id: number, Product: ProductsResponse): Observable<ProductsResponse> {
    return this.http.put<ProductsResponse>(`${this.apiUrl}/${id}`, Product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

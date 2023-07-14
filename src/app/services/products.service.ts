import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:3000';

  getAllproduct(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.BASE_URL}/products`);
  }

  createProduct(products: Productos): Observable<Productos> {
    return this.http.post<Productos>(`${this.BASE_URL}/products`, products);
  }


  agregarAlCarrito(product: any) {
    return this.http.post('http://localhost:3000/cart', product);
  }
  
}

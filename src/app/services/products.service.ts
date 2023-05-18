import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient,
  ) { }

  BASE_URL= 'http://localhost:3000'

    getAllCart(): Observable<Products[]>{
      return this.http.get<Products[]>(`${this.BASE_URL}/cart`)
    }

    createProduct(products:Products): Observable<Products>{
      return this.http.post<Products>(`${this.BASE_URL}/cart`, products)

    }

}


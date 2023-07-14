import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

 


  getCart(user: any) {
    return this.http.get(`http://localhost:3000/cart/${user.id}`);
  }

  addToCart(user: any ,product: any) {
    return this.http.post(`http://localhost:3000/cart/${user.id}/add/${product.id}`, product);
  }

  deleteFromCart(id: number) {
    return this.http.delete(`http://localhost:3000/cart/${id}`);
  }


  createWebpayTransaction(cartId: number, totalAmount: number) {
    const url = `http://localhost:3000/cart/${cartId}/transaction`; // Actualiza la URL según tu configuración de rutas en Nest.js

    const requestData = {
      totalAmount: totalAmount,
    };

    return this.http.post(url, requestData);
  }



}

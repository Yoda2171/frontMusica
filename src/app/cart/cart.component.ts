import { Component } from '@angular/core';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Products[] = [

  ];

  calculateTotal(): number {
    return this.products.reduce((total, product) => total + product.quantity, 0);
  }
}

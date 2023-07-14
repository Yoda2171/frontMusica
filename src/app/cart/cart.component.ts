import { Component } from '@angular/core';
import { Productos } from '../interfaces/productos';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carrito: any;
  token:any;
  urlWebpay:any;
  

  constructor(
    private carritoService: CartService,
    private router: Router
  
  ) {}

  ngOnInit() {
    this.getCartUser();
    this.createWebpayTransaction(this.carrito.id, this.carrito.totalPrice)
 
  } 

  getCartUser(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user);
    this.carritoService.getCart(user)
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.carrito = res;
      },
      error: (err) => console.log(err)
    })
  }



  createWebpayTransaction(cartId: number, totalAmount: number) {
    this.carritoService.createWebpayTransaction(cartId, totalAmount)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.token = res.token;
          this.urlWebpay = res.url;
          this.router.navigate(['/procesandopago'], { queryParams: { token: this.token, url:this.urlWebpay } });


        },
        error: (err) => console.log(err)
      });
  
      
  }





}

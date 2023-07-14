import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Productos } from '../interfaces/productos';
import { Router } from '@angular/router';
import { Cart } from '../interfaces/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productos:Productos[] = [
    { nombre: '',
    precio: 0,}
  ];
  

  constructor(
    private productService:ProductsService,
    private router:Router,
    private cartService: CartService
    
  ){}
  ngOnInit(){
    this.getAllProduct();
  }

  addCart(products:Productos){

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user);
    console.log(products);

    this.cartService.addToCart(user,products)
    .subscribe(
      res => {
        console.log(res);
        alert('Producto agregado al carrito');
      },
      err => console.log(err)
    )

  }

  getAllProduct(){
    this.productService.getAllproduct()
    .subscribe(
      res => {
        console.log(res);
        this.productos=res;
        
      },
      err => console.log(err)
    )
  }

  





}

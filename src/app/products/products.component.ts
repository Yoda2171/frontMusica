import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {  Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { Cart } from '../interfaces/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Products[] = [
    { productId: '',
    quantity: 0,}
  ];
  cart: any = [];

  constructor(
    private productService:ProductsService,
    private router:Router,
    
  ){}
  ngOnInit(){
    this.getAllProduct();
  }

  addCart(products:Products){
    console.log(products)
    /* this.cart.push(products); */ 
   
  }

  getAllProduct(){
    this.productService.getAllCart()
    .subscribe(
      res => {
        console.log(res);
        this.products=res;
        
      },
      err => console.log(err)
    )
  }





}

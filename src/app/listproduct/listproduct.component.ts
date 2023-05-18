import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../interfaces/products';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {

  products:Products={
    productId: '',
    quantity: 0,
  
  }

  constructor(
    private productsService:ProductsService,
    private router:Router
  
  ){}

  ngOnInit(){
    
  }
  

  submitProduct(){
    this.productsService.createProduct(this.products)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/products'])
      },
      err => console.log(err)
    )
  }

}

import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Productos } from '../interfaces/productos';
import { Router, Routes } from '@angular/router';
import { Categoria } from '../interfaces/categoria';
import { CategoriaService } from '../services/categoria.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent {
  categorias: Categoria[] = [];
 
  products: Productos = {
    nombre: '',
    precio: 0,
    modelo: '',
    marca: '',
    categoria: { categoria: '' },
    
  };

  constructor(
    private productsService: ProductsService,
    private categoriaService: CategoriaService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formProduct = this.fb.group({
      nombre: new FormControl('',[Validators.required]),
      precio: new FormControl(0,[Validators.required]),
      modelo: new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      categoria: new FormControl('',[Validators.required]),
    });
  }
  
  ngOnInit() {
    this.getCategorias();
  }

  formProduct: FormGroup;

  submitProduct() {

    if(this.formProduct.invalid){
      return this.formProduct.markAllAsTouched();
    }

    const newProcduct: Productos = {
      nombre: this.formProduct.value['nombre'],
      precio: this.formProduct.value['precio'],
      modelo: this.formProduct.value['modelo'],
      marca: this.formProduct.value['marca'],
      categoria: this.formProduct.value['categoria'],
    };

    console.log(newProcduct);
    this.productsService.createProduct(newProcduct).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/products']);
      },
      (err) => console.log(err)
    );


    
  }

  getCategorias() {
    this.categoriaService.getallCategorias().subscribe(
      (res) => {
        console.log(res);
        this.categorias = res;
      },
      (err) => console.log(err)
    );
  }


  
}

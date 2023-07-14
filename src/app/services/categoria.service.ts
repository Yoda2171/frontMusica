import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:3000';

  getallCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.BASE_URL}/categoria`);
  }
}

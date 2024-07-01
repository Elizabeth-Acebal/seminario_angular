import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { producto } from './productos-lista/producto';
import { tap } from 'rxjs/operators';

const URL = 'https://64961c16b08e17c9179303d9.mockapi.io/api/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<producto[]>{
    //consumir la api
    return this.http.get<producto[]>(URL)
    .pipe(
      tap((productos: producto[]) => productos.forEach(producto => producto.cantidad = 0))
    );
  }
}

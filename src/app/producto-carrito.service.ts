import { Injectable } from '@angular/core';
import { producto } from './productos-lista/producto';
import { BehaviorSubject } from 'rxjs';

//maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})

export class ProductoCarritoService {

  private _listaCarrito: producto[] = [];
  listaCarrito: BehaviorSubject<producto[]> = new BehaviorSubject<producto[]>([]);
  
    agregarAlCarrito(producto: producto): boolean {

      if (producto.stock <= 0) {
        console.error(`El producto ${producto.nombre} no tiene stock disponible.`);
        return false; // Indicar que la operación no fue exitosa
      }
  
      let item: producto | undefined = this._listaCarrito.find(v1 => v1.nombre === producto.nombre);
      if (!item) {
        this._listaCarrito.push({ ...producto });
      } else {
        item.cantidad += producto.cantidad;
      }
  
      this.listaCarrito.next([...this._listaCarrito]);
      return true; // Indicar que la operación fue exitosa*/
    }

    eliminarDelCarrito(producto: producto): void {
    const index = this._listaCarrito.findIndex(p => p.nombre === producto.nombre);
    if (index !== -1) {
      const productoEliminado = this._listaCarrito[index];
      this._listaCarrito.splice(index, 1);
      this.listaCarrito.next([...this._listaCarrito]);

    }
  }


    constructor() { }
}

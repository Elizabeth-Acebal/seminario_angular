import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoCarritoService } from '../producto-carrito.service';
import {Observable} from 'rxjs';
import {producto} from '../productos-lista/producto';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCarrito$: Observable<producto[]>;

  constructor (private carrito: ProductoCarritoService){
    this.listaCarrito$ = carrito.listaCarrito.asObservable();

  }

  getTotal(): number {
    let total = 0;
    this.listaCarrito$.subscribe(productos => {
      total = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    });
    return total;
  }

  
  eliminarProducto(producto: producto): void {
    this.carrito.eliminarDelCarrito(producto);
  }
}

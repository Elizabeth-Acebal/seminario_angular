import { Component } from '@angular/core';
import {producto} from './producto';
import { ProductoCarritoService } from '../producto-carrito.service';
import { ProductoDataService } from '../producto-data.service';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.scss'
})
export class ProductosListaComponent {

  productos: producto[] = [];
  /*  {
      imagen: 'assets/imagen/mesadenoche3.jpg',
      nombre: 'Mesa de luz',
      descripcion: 'Mesa de luz de alamo',
      precio: 50000,
      stock: 8,
      oferta: false,
      cantidad: 0,
},
{
  imagen: 'assets/imagen/sillon2.jpg',
      nombre: 'Sillón',
      descripcion: 'sillón pana antimanchas',
      precio: 700000,
      stock: 3,
      oferta: true,
      cantidad: 0,
},
{
  imagen: 'assets/imagen/espejo.jpg',
  nombre: 'Espejo',
  descripcion: 'espejo 60 cm diametro ',
  precio: 22000 ,
  stock: 0,
  oferta: false,
  cantidad:0,
}

  ];*/


  constructor(private carrito: ProductoCarritoService,
              private productosDataService: ProductoDataService){


  }

  ngOnInit(): void{
    this.productosDataService.getAll()
    .subscribe(productos => this.productos = productos);
  }


 
agregarAlCarrito(producto: producto) : void {
  this.carrito.agregarAlCarrito(producto);
  producto.stock -= producto.cantidad;
  producto.cantidad = 0;

}
}
function agregarAlCarrito(producto: any) {
  throw new Error('Function not implemented.');
}


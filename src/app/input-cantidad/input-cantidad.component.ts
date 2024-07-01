import { Component, EventEmitter, Input, Output, input} from '@angular/core';
import {producto} from '../productos-lista/producto';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrl: './input-cantidad.component.scss'
})
export class InputCantidadComponent {
  @Input() isOferta: boolean | undefined;
  
  @Input()
cantidad!: number;

@Input()
max!:number;

@Output()
cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  aumentarCantidad(): void{
    if(this.cantidad < this.max)
      this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  }

  disminuirCantidad(): void{
    if(this.cantidad >0)
      this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
  
  cambioCantidad(event:Event) : void {
    
    this.cantidadChange.emit(this.cantidad);
  }

  
}

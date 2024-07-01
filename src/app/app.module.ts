import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { FormsModule } from '@angular/forms';
import { ContemporaneaHomeComponent } from './contemporanea-home/contemporanea-home.component';
import { ContemporaneaProductosComponent } from './contemporanea-productos/contemporanea-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListaComponent,
    ContemporaneaHomeComponent,
    ContemporaneaProductosComponent,
    CarritoComponent,
    InputCantidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

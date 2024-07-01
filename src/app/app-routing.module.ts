import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContemporaneaProductosComponent } from './contemporanea-productos/contemporanea-productos.component';
import { ContemporaneaHomeComponent } from './contemporanea-home/contemporanea-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch:'full'
  },
  {
    path: 'productos',
    component: ContemporaneaProductosComponent
  },
  {
    path:'home',
    component: ContemporaneaHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

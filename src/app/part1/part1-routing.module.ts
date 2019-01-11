import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';


const routes: Routes = [
  {path : 'comp1', component:Comp1Component,pathMatch: 'full'} ,  

];

@NgModule({
  imports: [RouterModule.forChild(routes)] /* forChild very important */ ,
  exports: [RouterModule]
})
export class Part1RoutingModule { }

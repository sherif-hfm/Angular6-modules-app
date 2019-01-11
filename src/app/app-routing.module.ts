import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Part1GardGuard } from './part1-gard.guard';
import { Comp1Component } from './part2/comp1/comp1.component';

const routes: Routes = [
  {path : '', component:HomeComponent,pathMatch: 'full'} ,  
  {path : 'part1', loadChildren:'./part1/part1.module#Part1Module',canLoad:[Part1GardGuard]} ,  
  {path : 'part2/comp1', component:Comp1Component,pathMatch: 'full'}  , 
 /* {path : 'signout', component:SigninComponent,data:{msg:'signout'},pathMatch: 'full'}  , 
  {path : 'servers', component:ServersComponent,pathMatch: 'full',canActivate:[ServersGuard]} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})], /* preloadingStrategy to load all lazy module after application start */
  exports: [RouterModule]
})
export class AppRoutingModule { }

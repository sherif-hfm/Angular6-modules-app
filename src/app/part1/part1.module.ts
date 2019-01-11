import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Part1RoutingModule } from './part1-routing.module';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule /* this module for any feature module that use directives like ngfor ngif */,
    Part1RoutingModule,
    SharedModule
  ]
})
export class Part1Module { }

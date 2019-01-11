import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './basic-highlight.directive';

@NgModule({
  declarations: [BasicHighlightDirective],
  imports: [
    CommonModule
  ],
  exports:[BasicHighlightDirective]
})
export class SharedModule { }

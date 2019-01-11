import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Module } from './part1/part1.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './Shared/shared.module';
import { Part2Module } from './part2/part2.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule /* this module for root module only */ ,
    SharedModule,
    //Part1Module /* all feature modules imported before AppRouting */,
    Part2Module,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

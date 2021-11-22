import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarCrashComponent } from './car-crash.component';


@NgModule({
  declarations: [
    CarCrashComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CarCrashComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

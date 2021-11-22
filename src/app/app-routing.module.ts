import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarCrashComponent } from './car-crash/car-crash.component';

const routes: Routes = [

  {path:"car-crash", component:CarCrashComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[CarCrashComponent]

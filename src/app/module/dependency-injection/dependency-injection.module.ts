import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';



@NgModule({
  declarations: [
    DependencyInjectionComponent,
    EmpInfoComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    DependencyInjectionComponent
  ]
})
export class DependencyInjectionModule { }

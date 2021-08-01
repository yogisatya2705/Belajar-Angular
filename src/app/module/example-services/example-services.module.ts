import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleServicesComponent } from './example-services.component';
import { EInfoComponent } from './e-info/e-info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExampleServicesComponent,
    EInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExampleServicesComponent
  ]
})
export class ExampleServicesModule { }

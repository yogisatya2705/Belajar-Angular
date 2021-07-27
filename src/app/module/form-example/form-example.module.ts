import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleComponent } from './form-example.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [FormExampleComponent]
})
export class FormExampleModule { }

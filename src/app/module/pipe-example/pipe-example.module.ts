import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExampleComponent } from './pipe-example.component';



@NgModule({
  declarations: [
    PipeExampleComponent
  ],
  imports: [
    CommonModule
  ], exports: [PipeExampleComponent]
})
export class PipeExampleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExampleComponent } from './pipe-example.component';
import { LuasPersegiPipe } from './pipes/luas-persegi.pipe';



@NgModule({
  declarations: [
    PipeExampleComponent,
    LuasPersegiPipe
  ],
  imports: [
    CommonModule
  ], exports: [PipeExampleComponent]
})
export class PipeExampleModule { }

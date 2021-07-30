import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseDirectiveComponent } from './use-directive.component';
import { RedColDirective } from 'src/app/custom-directive/red-col.directive';

// The Directive 'RedColDirective' is declared by more than one NgModule
// https://stackoverflow.com/questions/56734884/how-to-use-directive-in-more-than-one-module-in-angular-2

@NgModule({
  declarations: [
    UseDirectiveComponent,
    RedColDirective
  ],
  imports: [
    CommonModule
  ], exports: [UseDirectiveComponent]
})
export class UseDirectiveModule { }

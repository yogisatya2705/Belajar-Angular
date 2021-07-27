import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildComponent } from './parent-child.component';
import { Child1Component } from './child1/child1.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ParentChildComponent,
    Child1Component
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    ParentChildComponent
  ]
})
export class ParentChildModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppsFormControlComponent } from './todo-apps-form-control.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    TodoAppsFormControlComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoAppsFormControlComponent
  ]
})
export class TodoAppsFormControlModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppsComponent } from './todo-apps.component';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    TodoAppsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FormsModule
  ],
  exports: [
    TodoAppsComponent
  ]
})
export class TodoAppsModule { }

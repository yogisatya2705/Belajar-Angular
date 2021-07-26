import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAppsModule } from './module/todo-apps/todo-apps.module';
import { TodoAppsFormControlModule } from './module/todo-apps-form-control/todo-apps-form-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoAppsModule,
    TodoAppsFormControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

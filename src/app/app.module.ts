import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAppsModule } from './module/todo-apps/todo-apps.module';
import { TodoAppsFormControlModule } from './module/todo-apps-form-control/todo-apps-form-control.module';
import { ParentChildModule } from './module/parent-child/parent-child.module';
import { TwoWayBindingModule } from './module/two-way-binding/two-way-binding.module';
import { PipeExampleModule } from './module/pipe-example/pipe-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoAppsModule,
    TodoAppsFormControlModule,
    ParentChildModule,
    TwoWayBindingModule,
    PipeExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

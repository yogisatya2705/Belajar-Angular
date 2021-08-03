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
import { FormExampleModule } from './module/form-example/form-example.module';
import { UseDirectiveModule } from './module/use-directive/use-directive.module';
import { DataBindingModule } from './module/data-binding/data-binding.module';
import { ExampleServicesModule } from './module/example-services/example-services.module';
import { DependencyInjectionModule } from './module/dependency-injection/dependency-injection.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    FormExampleModule,
    UseDirectiveModule,
    DataBindingModule,
    ExampleServicesModule,
    DependencyInjectionModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

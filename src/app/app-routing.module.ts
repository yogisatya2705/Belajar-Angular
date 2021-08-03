import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './module/data-binding/data-binding.component';
import { DependencyInjectionComponent } from './module/dependency-injection/dependency-injection.component';
import { ExampleServicesComponent } from './module/example-services/example-services.component';
import { FormExampleComponent } from './module/form-example/form-example.component';
import { ParentChildComponent } from './module/parent-child/parent-child.component';
import { PipeExampleComponent } from './module/pipe-example/pipe-example.component';
import { TodoAppsFormControlComponent } from './module/todo-apps-form-control/todo-apps-form-control.component';
import { TodoAppsComponent } from './module/todo-apps/todo-apps.component';
import { TwoWayBindingComponent } from './module/two-way-binding/two-way-binding.component';
import { UseDirectiveComponent } from './module/use-directive/use-directive.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: 'example-services', component: ExampleServicesComponent },
  { path: 'form-example', component: FormExampleComponent },
  { path: 'parrent-child', component: ParentChildComponent },
  { path: 'pipe-example', component: PipeExampleComponent },
  { path: 'todo-apps', component: TodoAppsComponent },
  { path: 'todo-apps-form-control', component: TodoAppsFormControlComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'use-directive', component: UseDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

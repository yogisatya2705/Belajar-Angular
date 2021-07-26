import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-apps-form-control',
  templateUrl: './todo-apps-form-control.component.html',
  styleUrls: ['./todo-apps-form-control.component.css']
})
export class TodoAppsFormControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskFormControl = new FormControl('', [
    Validators.required
  ])

  listTodo: string[] = [];

  taskInpState: boolean = true; // true -> save, false -> edit
  taskEditIdx: number = 0;

  deleteTask(idx: number) {
    this.listTodo.splice(idx, 1);
  }

  editTask(idx: number) {
    this.taskInpState = false;
    this.taskEditIdx = idx;
    this.taskFormControl.setValue(this.listTodo[idx]);
  }

  saveTask() {
    if (this.taskFormControl.hasError('required')) {
      return;
    }

    if (this.taskInpState === true) {
      this.listTodo.unshift(this.taskFormControl.value);
    } else {
      this.listTodo[this.taskEditIdx] = this.taskFormControl.value;
      this.taskInpState = true;
      this.taskEditIdx = 0;
    }
    this.taskFormControl.setValue("");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-apps',
  templateUrl: './todo-apps.component.html',
  styleUrls: ['./todo-apps.component.css']
})
export class TodoAppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formInputVal = {
    task: "",
  };

  listTodo: string[] = [];

  taskInpState: boolean = true; // true -> save, false -> edit
  taskEditIdx: number = 0;

  deleteTask(idx: number) {
    this.listTodo.splice(idx, 1);
  }

  editTask(idx: number) {
    this.taskInpState = false;
    this.taskEditIdx = idx;
    this.formInputVal.task = this.listTodo[idx];
  }

  saveTask() {
    if (this.taskInpState === true) {
      this.listTodo.unshift(this.formInputVal.task);
    } else {
      this.listTodo[this.taskEditIdx] = this.formInputVal.task;
      this.taskInpState = true;
      this.taskEditIdx = 0;
    }
    this.formInputVal.task = "";
  }

}

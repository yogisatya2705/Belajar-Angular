import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valCounter: number = 0;

  changeValue(val: number) {
    this.valCounter += val;
  }
}

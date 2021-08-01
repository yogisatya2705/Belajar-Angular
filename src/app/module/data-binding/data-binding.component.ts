import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "Yogi Satya";

  color: string = "green";
  isActive: boolean = true;

  exampleClick() {
    console.log("Hello world");
  }
}

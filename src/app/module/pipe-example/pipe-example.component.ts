import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // PIPE STRING
  exampleString: string = "HeLlo worLD";
  // PIPE DATE
  exampleDate = new Date(2021, 7, 27);
  // PIPE JSON
  exampleJson = {
    id: 1,
    name: "Yogi Satya",
    email: "blabla@mail.com"
  }
  // PIPE DECIMAL & CURRENCY
  exampleNumber = 123123123123.14159265359;
}

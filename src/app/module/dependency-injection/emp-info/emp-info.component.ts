import { Component, OnInit } from '@angular/core';
import { IEmp } from '../interfaces/emp';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],

  providers: [RecordService]
})
export class EmpInfoComponent implements OnInit {

  infoReceived: IEmp[] = [];

  constructor(private recordService: RecordService) {
    this.infoReceived.push(recordService.getInfo(1));
    this.infoReceived[this.infoReceived.length - 1] === null ? this.infoReceived.pop() : null;

    this.infoReceived.push(recordService.getInfo(2));
    this.infoReceived[this.infoReceived.length - 1] === null ? this.infoReceived.pop() : null;

    this.infoReceived.push(recordService.getInfo(3));
    this.infoReceived[this.infoReceived.length - 1] === null ? this.infoReceived.pop() : null;

    this.infoReceived.push(recordService.getInfo(4));
    this.infoReceived[this.infoReceived.length - 1] === null ? this.infoReceived.pop() : null;

    console.log(this.infoReceived)
  }

  ngOnInit(): void {
  }

}

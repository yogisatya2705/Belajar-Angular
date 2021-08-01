import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],

  providers: [DataService]
})
export class EInfoComponent implements OnInit {

  infoReceive1: string[] = [];
  infoReceive2: string[] = [];
  infoReceive3: string[] = [];

  getInfoFromService1() {
    this.infoReceive1 = this.dService.getInfo1();
  }
  getInfoFromService2() {
    this.infoReceive2 = this.dService.getInfo2();
  }
  getInfoFromService3() {
    this.infoReceive3 = this.dService.getInfo3();
  }

  addInfoToService(additionalInfo: any) {
    this.dService.addInfo(additionalInfo.value['additional-info']);
  }

  constructor(private dService: DataService) {
    this.getInfoFromService1();
    this.getInfoFromService2();
    this.getInfoFromService3();
  }

  ngOnInit(): void {
  }

}

// ng g service module/example-services/data

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["Yogi Satya", "E01", "yogi@mail.com"];
  info2: string[] = ["Kukik Bungbung", "E02", "kukik@mail.com"];
  info3: string[] = ["Obet Mamung", "E03", "obet@mail.com"];

  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }
  getInfo3(): string[] {
    return this.info3;
  }

  addInfo(info: string) {
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
  }

  constructor() { }
}

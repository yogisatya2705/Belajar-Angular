import { Injectable } from '@angular/core';
import { IEmp } from './interfaces/emp';

@Injectable({
  providedIn: 'root'
})

export class RecordService {

  constructor() { }

  info: IEmp[] = [
    {
      id: 1,
      name: "Yogi Satya",
      email: "yogisatya@mail.com"
    },
    {
      id: 2,
      name: "Kukik Mamung",
      email: "kukik@mail.com",
      address: "Banyualit"
    },
    {
      id: 3,
      name: "Robet Sitohang",
      email: "robet@mail.com",
      address: "Singaraja"
    }
  ]

  getInfo(id: number): any {
    var returnVal: IEmp = <IEmp>this.info.find((data, idx) => data.id === id);

    // console.log({returnVal, xxx: returnVal === void 0})
    // if undefined
    return returnVal === void 0 ? null : returnVal;
  }
}

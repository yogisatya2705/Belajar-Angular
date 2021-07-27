// ng generate pipe module/pipe-example/pipes/luas-persegi

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'luasPersegi'
})
export class LuasPersegiPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [pangkat] = args;
    return value ** pangkat;
  }

}

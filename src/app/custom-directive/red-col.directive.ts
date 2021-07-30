import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedCol]'
})
export class RedColDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
  }

}

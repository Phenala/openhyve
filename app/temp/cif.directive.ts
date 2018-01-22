import { Directive, HostListener, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appCif]'
})
export class CifDirective {

  @Input() if: boolean;

  constructor(public el: ElementRef, public renderer: Renderer) {
  }

  @HostListener('always') always() {

  }

}

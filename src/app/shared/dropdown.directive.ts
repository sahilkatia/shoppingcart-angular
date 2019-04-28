import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 @HostBinding('class') class:string;

  constructor() { }

@HostListener('mouseover') mouseOver() {
 this.class = 'open';

}

@HostListener('mouseleave') mouseLeave() {
  this.class = '';
 
 }

}

import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private _obj :ElementRef) { }
  @HostListener('mouseenter')onmouseenter()
  {
    this._obj.nativeElement.style.background="red";

  }
  @HostListener('mouseleave')onmouseleave()
  {
    this._obj.nativeElement.style.background="black";
  }


}

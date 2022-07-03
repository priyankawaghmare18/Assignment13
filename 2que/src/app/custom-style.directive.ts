import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  public str="Marvellous ,Pune";
  constructor(private _obj : ElementRef) { 
    this._obj.nativeElement.style.color="yellow";
    this._obj.nativeElement.style.fontWeight="5000";
    
  }

}

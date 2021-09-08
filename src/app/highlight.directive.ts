import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightMe]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#262626';
    el.nativeElement.style.color = '#ffffff'; 
    el.nativeElement.style.borderTop = '1px solid #a90f33';  
    el.nativeElement.style.padding = '12px 0';
  }

}

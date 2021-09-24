import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderStyle]'
})
export class HeaderStyleDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(){
    console.log(this.el.nativeElement);
    // this.el.nativeElement.style.color = 'red';
  }

  @HostListener('click')
  onClick(){
    console.log('host clicked');
  }

}

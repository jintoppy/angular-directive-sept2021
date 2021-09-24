import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeaderStyle]'
})
export class HeaderStyleDirective {
  @Input()
  appHeaderStyle:string = 'red';

  @Input()
  borderstyle:string='';

  constructor(private el: ElementRef) { }

  ngOnInit(){
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.border = this.borderstyle ? `1px solid ${this.borderstyle}` : '';
  }

  @HostListener('click')
  onClick(){
    this.el.nativeElement.style.color = this.appHeaderStyle || 'red';
  }

}

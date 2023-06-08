import { Directive, HostBinding, HostListener, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.background') background: string;
  @HostBinding('style.color') fontColor:string;

  @HostListener('mouseenter') onMouseEnter() {
    this.background = '#00B4DB';  /* fallback for old browsers */
    this.background = '-webkit-linear-gradient(to right, #0083B0, #00B4DB)';  /* Chrome 10-25, Safari 5.1-6 */
    this.background = 'linear-gradient(to right, #0083B0, #00B4DB)'; 
    this.fontColor = 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'transparent';
    this.fontColor = 'black';
  }

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {

  }

}

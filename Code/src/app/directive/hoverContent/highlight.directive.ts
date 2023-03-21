import { Directive, HostBinding, HostListener, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'transparent';
  }

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {

  }

}

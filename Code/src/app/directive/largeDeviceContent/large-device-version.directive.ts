import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appLargeDeviceVersion]'
})
export class LargeDeviceVersionDirective implements OnInit{

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private breakpointObserve: BreakpointObserver) { }

  ngOnInit(): void {
      this.breakpointObserve.observe([Breakpoints.Handset,Breakpoints.Small])
      .pipe(take(1))
      .subscribe(
        result => {
          if(result.matches) {
            this.viewContainerRef.clear();
          }
          else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }      
        }
      );
  }
}

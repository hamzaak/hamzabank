import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[module-host]'
})
export class ModuleDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

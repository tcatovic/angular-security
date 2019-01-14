import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SecurityService } from './security.service';

@Directive({
  selector: '[ptcHasClaim]'
})
export class HasClaimDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private securityService: SecurityService) { }

  @Input() set ptcHasClaim(claimType: any) {
    if (this.securityService.hasClaim(claimType)) {
      // Add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Remove tempalte from DOM
      this.viewContainer.clear();
    }
  }

}

import { Directive, effect, inject, input, ViewContainerRef } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Directive({
  selector: '[IsAdmin]',
  standalone: true,
})
export class IsAdmin {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  IsAdmin = input<boolean>(false);

  constructor() {
    effect(() => {
      this.viewContainer.clear();
      if (this.IsAdmin()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    })
  }


}

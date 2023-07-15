import { Directive, inject, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableField]',
  standalone: true,
})
export class TableFieldDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appTableFieldAs') propName = '';
  templateRef = inject(TemplateRef) as TemplateRef<unknown>;
}

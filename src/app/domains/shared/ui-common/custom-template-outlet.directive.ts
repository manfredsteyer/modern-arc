import {
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appCustomTemplateOutlet]',
  standalone: true,
})
export class CustomTemplateOutletDirective implements OnInit {
  @Input('appCustomTemplateOutlet') template: TemplateRef<unknown> | undefined;
  @Input('appCustomTemplateOutletContext') context:
    | Record<string, unknown>
    | undefined;

  viewContainer = inject(ViewContainerRef);

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    this.viewContainer.clear();

    const ref = this.viewContainer.createEmbeddedView(
      this.template,
      this.context
    );

    // Get first projected node
    const nativeElement = ref.rootNodes[0];
    console.log('nativeElement', nativeElement);
  }
}

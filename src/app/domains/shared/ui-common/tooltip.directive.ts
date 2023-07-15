import {
  Directive,
  EmbeddedViewRef,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
  HostListener,
  OnInit,
} from '@angular/core';

// Context Information to be passed to the template
type TipToolContext = {
  $implicit: string;
  text: string;
};

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnInit {
  viewContainer = inject(ViewContainerRef);
  viewRef: EmbeddedViewRef<TipToolContext> | undefined;

  @Input('appTooltip') template: TemplateRef<TipToolContext> | undefined;

  setHidden(hidden: boolean): void {
    this.viewRef?.rootNodes.forEach((nativeElement) => {
      nativeElement.hidden = hidden;
    });
  }

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    this.viewRef = this.viewContainer.createEmbeddedView(this.template, {
      $implicit: 'Tooltip!',
      text: 'Important Information!',
    });

    this.setHidden(true);
  }

  @HostListener('mouseover')
  mouseover() {
    this.setHidden(false);
  }

  @HostListener('mouseout')
  mouseout() {
    this.setHidden(true);
  }
}

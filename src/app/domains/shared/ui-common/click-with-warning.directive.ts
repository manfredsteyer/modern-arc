import { Dialog } from '@angular/cdk/dialog';
import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { ConfirmComponent } from './confirm/confirm.component';

@Directive({
  selector: '[appClickWithWarning]',
  exportAs: 'clickWithWarning',
  standalone: true,
})
export class ClickWithWarningDirective {
  @Input() warning = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter<void>();

  @HostBinding('class') classBinding = 'btn btn-danger';

  dialog = inject(Dialog);

  @HostListener('click', ['$event.shiftKey'])
  handleClick(shiftKey: boolean): void {
    if (shiftKey) {
      this.appClickWithWarning.emit();
    }

    const ref = this.dialog.open<boolean>(ConfirmComponent, {
      data: this.warning,
    });
    ref.closed.subscribe((result) => {
      if (result) {
        this.appClickWithWarning.emit();
      }
    });
  }
}

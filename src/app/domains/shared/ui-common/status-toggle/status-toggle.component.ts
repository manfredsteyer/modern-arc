import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css'],
})
export class StatusToggleComponent {
  @Input() status = false;
  @Output() statusChange = new EventEmitter<boolean>();

  toggle(): void {
    this.status = !this.status;
    this.statusChange.next(this.status);
  }
}

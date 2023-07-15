import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addDays, subDays } from 'date-fns';
import { ControlValueAccessor, NgControl } from '@angular/forms';

type OnChange = (value: Date) => void;

@Component({
  selector: 'app-date-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-stepper.component.html',
  styleUrls: ['./date-stepper.component.css'],
})
export class DateStepperComponent implements ControlValueAccessor {
  ngControl = inject(NgControl);
  date = new Date();
  _onChange: OnChange = () => {
    null;
  };

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  writeValue(date: Date): void {
    this.date = date ?? new Date();
  }

  registerOnChange(fn: OnChange): void {
    this._onChange = fn;
  }

  registerOnTouched(): void {
    // Not used here
    null;
  }

  next(): void {
    this.date = addDays(this.date, 1);
    this._onChange(this.date);
  }

  prev(): void {
    this.date = subDays(this.date, 1);
    this._onChange(this.date);
  }
}

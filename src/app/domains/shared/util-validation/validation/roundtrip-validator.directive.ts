import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appRoundTrip]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundtripValidatorDirective,
      multi: true,
    },
  ],
})
export class RoundtripValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const group: FormGroup = control as FormGroup; // Typumwandlung

    const fromCtrl = group.controls['from'];
    const toCtrl = group.controls['to'];

    if (!fromCtrl || !toCtrl) {
      return null;
    }

    if (fromCtrl.value === toCtrl.value) {
      return {
        roundTrip: true,
      };
    }

    return null;
  }
}

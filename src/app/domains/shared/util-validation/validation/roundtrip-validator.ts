import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function validateRoundTrip(
  control: AbstractControl
): ValidationErrors | null {
  const group: FormGroup = control as FormGroup;

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

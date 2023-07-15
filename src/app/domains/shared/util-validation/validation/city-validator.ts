import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateCity(validCities: string[]): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities,
        },
      };
    }
    return null;
  };
}

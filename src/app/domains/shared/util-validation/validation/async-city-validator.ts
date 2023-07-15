import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { delay, map } from 'rxjs';

// eslint-disable-next-line @softarc/sheriff/dependency-rule
import { FlightService } from '@demo/ticketing/data';

export function validateAsyncCity(
  flightService: FlightService
): AsyncValidatorFn {
  return (c: AbstractControl) => {
    return flightService.find(c.value, '').pipe(
      map((flights) => (flights.length > 0 ? null : { asyncCity: true })),
      delay(4000)
    );
  };
}

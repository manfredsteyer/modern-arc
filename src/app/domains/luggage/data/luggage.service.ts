import { Injectable } from '@angular/core';
import { Luggage } from './luggage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LuggageService {
  load(): Observable<Luggage[]> {
    return of([
      { id: 1, weight: 4000, checkedIn: true, remarks: 'black trolly' },
      { id: 2, weight: 7000, checkedIn: true, remarks: 'blue trolly' },
      { id: 3, weight: 3000, checkedIn: true, remarks: 'yellow trolly' },
    ]);
  }
}

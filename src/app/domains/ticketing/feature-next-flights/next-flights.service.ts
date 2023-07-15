import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../data';

@Injectable()
export class NextFlightsService {
  load(): Observable<Flight[]> {
    const date = new Date().toISOString();

    return of([
      { id: 7, from: 'Paris', to: 'London', date, delayed: false },
      { id: 8, from: 'London', to: 'Paris', date, delayed: false },
      { id: 9, from: 'Paris', to: 'Berlin', date, delayed: false },
    ]);
  }
}

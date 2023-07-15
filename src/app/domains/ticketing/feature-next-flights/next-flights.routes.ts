import { Routes } from '@angular/router';
import { NextFlightsComponent } from './next-flights.component';

export const NEXT_FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NextFlightsComponent,
  },
];

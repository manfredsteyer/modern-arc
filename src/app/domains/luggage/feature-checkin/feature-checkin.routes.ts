import { Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';

export const FEATURE_CHECKIN_ROUTES: Routes = [
  {
    path: 'checkin',
    component: CheckinComponent,
  },
  // { ... }, { ... }
];

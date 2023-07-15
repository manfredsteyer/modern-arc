import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './shell/about/about.component';
import { HomeComponent } from './shell/home/home.component';
import { BasketComponent } from './shell/basket/basket.component';
import { ConfigService } from '@demo/shared/util-config';
import { NotFoundComponent } from './shell/not-found/not-found.component';
// import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux',
  },

  // For this lab, MF was removed. Feel free to add it again:
  // {
  //   path: 'miles',
  //   loadChildren: () => loadRemoteModule('miles', './Routes'),
  // },

  {
    path: '',
    resolve: {
      config: () => inject(ConfigService).loaded$,
    },
    children: [
      {
        path: 'luggage',
        loadChildren: () =>
          import('./domains/luggage/feature-checkin').then(
            (m) => m.FEATURE_CHECKIN_ROUTES
          ),
      },
      {
        path: 'flight-booking',
        loadChildren: () =>
          import('@demo/ticketing/feature-booking').then(
            (m) => m.FLIGHT_BOOKING_ROUTES
          ),
      },
      {
        path: 'next-flights',
        loadChildren: () =>
          import('@demo/ticketing/feature-next-flights').then(
            (m) => m.NextFlightsModule
          ),
      },
      {
        path: 'about',
        component: AboutComponent,
      },

      // This _needs_ to be the last route!!
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

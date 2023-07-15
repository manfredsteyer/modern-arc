import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import { FlightBookingFacade } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  facade = inject(FlightBookingFacade);

  from = this.facade.from;
  to = this.facade.to;

  flights = this.facade.flights;
  basket = this.facade.basket;

  flightRoute = this.facade.flightRoute;

  constructor() {
    effect(
      () => {
        this.facade.load();
      },
      { allowSignalWrites: true }
    );
  }
}

import { Injectable, inject } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from './flight';
import { addMinutes, createStore } from '@demo/shared/util-common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  private flightService = inject(FlightService);

  private state = createStore({
    from: 'Paris',
    to: 'London',
    flights: [] as Flight[],
    basket: {} as Record<number, boolean>,
  });

  readonly from = this.state.select((s) => s.from());
  readonly to = this.state.select((s) => s.to());
  readonly flights = this.state.select((s) => s.flights());
  readonly basket = this.state.select((s) => s.basket());

  readonly flightRoute = this.state.select((s) => s.from() + ' to ' + s.to());

  private from$ = toObservable(this.from);
  private to$ = toObservable(this.to);

  private criteria$ = combineLatest({
    from: this.from$,
    to: this.to$,
  }).pipe(
    filter((combi) => combi.from.length >= 3 && combi.to.length >= 3),
    debounceTime(300)
  );

  private criteria = toSignal(this.criteria$, {
    initialValue: {
      from: '',
      to: '',
    },
  });

  async load(): Promise<void> {
    const { from, to } = this.criteria();

    if (!from || !to) {
      return;
    }

    const flights = await this.flightService.findPromise(from, to);
    this.state.update('flights', flights);
  }

  upateCriteria(from: string, to: string): void {
    this.state.update('from', from);
    this.state.update('to', to);
  }

  updateBasket(fid: number, selected: boolean): void {
    this.state.update('basket', (basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  delay() {
    const date = addMinutes(this.flights()[0].date, 15);
    this.state.update('flights', (flights) => [
      { ...flights[0], date },
      ...flights.slice(1),
    ]);
  }
}

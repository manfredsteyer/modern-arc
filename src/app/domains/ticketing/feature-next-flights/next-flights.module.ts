import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';
import { CheckinComponent } from './checkin/checkin.component';
import { NextFlightsService } from './next-flights.service';
import { RouterModule } from '@angular/router';
import { NEXT_FLIGHTS_ROUTES } from './next-flights.routes';

@NgModule({
  declarations: [NextFlightsComponent, CheckinComponent],
  imports: [CommonModule, RouterModule.forChild(NEXT_FLIGHTS_ROUTES)],
  providers: [NextFlightsService],
  exports: [NextFlightsComponent],
})
export class NextFlightsModule {}

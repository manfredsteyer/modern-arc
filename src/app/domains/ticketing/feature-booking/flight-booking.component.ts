import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css'],
})
export class FlightBookingComponent {}

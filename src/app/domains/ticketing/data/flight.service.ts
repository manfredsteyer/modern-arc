import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Flight } from './flight';
import { ConfigService } from '@demo/shared/util-config';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  find(from: string, to: string, urgent = false): Observable<Flight[]> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to, urgent };

    return this.http.get<Flight[]>(url, { headers, params });
  }

  findPromise(from: string, to: string, urgent = false): Promise<Flight[]> {
    return firstValueFrom(this.find(from, to, urgent));
  }

  findById(id: string): Observable<Flight> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }
}

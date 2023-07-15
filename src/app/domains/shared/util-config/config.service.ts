import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Config, initConfig } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);
  private _config = initConfig;

  private loadedSubject = new BehaviorSubject(false);
  readonly loaded$ = this.loadedSubject
    .asObservable()
    .pipe(filter((value) => !!value));

  get config(): Config {
    return { ...this._config };
  }

  loadConfig() {
    this.http.get<Config>('./assets/config.json').subscribe((config) => {
      this._config = config;
      this.loadedSubject.next(true);
    });
  }
}

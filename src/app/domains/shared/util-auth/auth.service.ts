import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userName = '';

  get userName(): string {
    return this._userName;
  }

  login(userName: string): void {
    // Auth for *very honest* users TM
    this._userName = userName;
  }

  logout(): void {
    this._userName = '';
  }

  isAuth(): boolean {
    return this._userName !== '';
  }
}

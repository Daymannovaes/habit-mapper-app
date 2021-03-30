import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isAuthenticated = false;

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

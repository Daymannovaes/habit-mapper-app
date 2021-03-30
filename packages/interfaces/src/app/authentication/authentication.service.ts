import { Injectable } from '@angular/core';
import { Auth as AwsAuth } from 'aws-amplify';
// import { AuthClass } from '@aws-amplify/auth/Auth';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {
    this.provider = AwsAuth;
  }

  // private provider: AuthClass;
  private provider;

  async getUserSession() {
    try {
      return await this.provider.currentSession();
    } catch (_) {
      return undefined;
    }
  }

  async isUserAuthenticated(): Promise<boolean> {
    const session = await this.getUserSession();

    return Boolean(session);
  }
}

import { Injectable } from '@angular/core';
import { Auth as AwsAuth } from 'aws-amplify';
// import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    this.userProvider = AwsAuth;
  }

  // private provider: AuthClass;
  private userProvider;

  async getUserToken(): Promise<string | undefined> {
    const session = await this.getUserSession();

    return session ? session.getIdToken().getJwtToken() : undefined;
  }

  async getUserSession(): Promise<CognitoUserSession | undefined> {
    try {
      return await this.userProvider.currentSession();
    } catch (_) {
      return undefined;
    }
  }

  async isUserAuthenticated(): Promise<boolean> {
    const session = await this.getUserSession();

    return Boolean(session);
  }
}

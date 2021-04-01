import { Injectable } from '@angular/core';
import { Auth as AwsAuth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    this.userProvider = AwsAuth;
  }

  // private provider: AuthClass;
  private userProvider;

  async getUserSession() {
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

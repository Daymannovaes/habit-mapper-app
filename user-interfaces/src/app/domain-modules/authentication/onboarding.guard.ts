import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OnboardingGuard implements CanActivate {
  constructor(private router: Router) {}

  userOnboarded(): boolean {
    return Boolean(localStorage.getItem('habit-mapper-app-user-onboarded'));
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return (await this.userOnboarded())
      ? this.router.parseUrl(route.data.redirectTo || '/habits')
      : this.router.parseUrl(route.data.redirectTo || '/onboarding');
  }
}

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  redirect(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.router.navigate([route.data.redirectTo || '/sessions'], {
      state: {
        returlUrl: state.url,
      },
    });
    return false;
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return (await this.userService.isUserAuthenticated())
      ? true
      : this.redirect(route, state);
  }
}

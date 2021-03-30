import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './authentication/authenticated.guard';
import { UnauthenticatedGuard } from './authentication/unauthenticated.guard';

const routes: Routes = [
  {
    path: 'sessions',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./user-session/user-session.module').then(
        (m) => m.UserSessionPageModule
      ),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./onboarding/onboarding.module').then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: 'habits',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./habits/habits.module').then((m) => m.HabitsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

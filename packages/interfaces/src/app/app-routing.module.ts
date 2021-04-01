import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './domain-modules/authentication/auth.guard';
import { NoAuthGuard } from './domain-modules/authentication/no-auth.guard';
import { NewSessionPage } from './pages/user/new-session.page';

const routes: Routes = [
  {
    path: 'sessions',
    canActivate: [NoAuthGuard],
    component: NewSessionPage,
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./pages/onboarding/onboarding.module').then(
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
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/habits/habits.module').then((m) => m.HabitsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

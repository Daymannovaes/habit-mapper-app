import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingPage } from './onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPage,
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnPageModule),
  },
  {
    path: 'do',
    loadChildren: () => import('./do/do.module').then((m) => m.DoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {}

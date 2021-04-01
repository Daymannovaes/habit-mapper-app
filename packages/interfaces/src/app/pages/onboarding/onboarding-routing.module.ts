import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingDoPage } from './do/onboarding-do.page';
import { OnboardingLearnPage } from './learn/onboarding-learn.page';

import { OnboardingPage } from './onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPage,
  },
  {
    path: 'learn',
    component: OnboardingLearnPage,
  },
  {
    path: 'do',
    component: OnboardingDoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {}

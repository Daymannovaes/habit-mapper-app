import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';
import { OnboardingDoPage } from './do/onboarding-do.page';
import { OnboardingLearnPage } from './learn/onboarding-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPageRoutingModule,
  ],
  declarations: [OnboardingPage, OnboardingDoPage, OnboardingLearnPage],
})
export class OnboardingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { UserSessionPageRoutingModule } from './user-session-routing.module';

import { UserSessionPage } from './user-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSessionPageRoutingModule,
    AmplifyUIAngularModule,
  ],
  declarations: [UserSessionPage],
})
export class UserSessionPageModule {}

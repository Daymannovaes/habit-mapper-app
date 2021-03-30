import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSessionPage } from './user-session.page';

const routes: Routes = [
  {
    path: '',
    component: UserSessionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSessionPageRoutingModule {}

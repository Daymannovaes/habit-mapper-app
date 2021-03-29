import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitsPage } from './habits.page';

const routes: Routes = [
  {
    path: '',
    component: HabitsPage,
  },
  {
    path: ':id/edit',
    data: { type: 'edit' },
    loadChildren: () =>
      import('./edit/edit.module').then((m) => m.EditPageModule),
  },
  {
    path: 'create',
    data: { type: 'create' },
    loadChildren: () =>
      import('./edit/edit.module').then((m) => m.EditPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitsPageRoutingModule {}

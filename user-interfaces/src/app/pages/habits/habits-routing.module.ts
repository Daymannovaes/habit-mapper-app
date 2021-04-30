import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditHabitPage } from './edit/edit-habit.page';

import { HabitsPage } from './habits.page';

const routes: Routes = [
  {
    path: '',
    component: HabitsPage,
  },
  {
    path: ':id/edit',
    data: { type: 'edit' },
    component: EditHabitPage,
  },
  {
    path: 'create',
    data: { type: 'create' },
    component: EditHabitPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitsPageRoutingModule {}

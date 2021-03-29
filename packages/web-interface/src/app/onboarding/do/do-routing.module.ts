import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoPage } from './do.page';

const routes: Routes = [
  {
    path: '',
    component: DoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoPageRoutingModule {}

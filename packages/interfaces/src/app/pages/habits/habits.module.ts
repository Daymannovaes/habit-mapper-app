import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsComponent } from '../../components/tabs/tabs.component';
import { HabitsPageRoutingModule } from './habits-routing.module';

import { HabitsPage } from './habits.page';
import { EditHabitPage } from './edit/edit-habit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HabitsPageRoutingModule,
  ],
  declarations: [HabitsPage, EditHabitPage, TabsComponent],
})
export class HabitsPageModule {}

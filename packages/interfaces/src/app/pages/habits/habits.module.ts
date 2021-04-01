import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitsPageRoutingModule } from './habits-routing.module';

import { HabitsPage } from './habits.page';
import { EditHabitPage } from './edit/edit-habit.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HabitsPageRoutingModule],
  declarations: [HabitsPage, EditHabitPage],
})
export class HabitsPageModule {}

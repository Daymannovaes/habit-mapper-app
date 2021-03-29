import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoPageRoutingModule } from './do-routing.module';

import { DoPage } from './do.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DoPageRoutingModule],
  declarations: [DoPage],
})
export class DoPageModule {}

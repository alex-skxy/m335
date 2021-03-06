import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesPageRoutingModule } from './activities-routing.module';

import { ActivitiesPage } from './activities.page';
import {TabNavComponent} from '../tab-nav/tab-nav.component';
import {HammerModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitiesPageRoutingModule,
  ],
  exports: [
    TabNavComponent
  ],
  declarations: [ActivitiesPage, TabNavComponent]
})
export class ActivitiesPageModule {}

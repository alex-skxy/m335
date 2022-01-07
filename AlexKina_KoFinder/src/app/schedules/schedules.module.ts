import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulesPageRoutingModule } from './schedules-routing.module';

import { SchedulesPage } from './schedules.page';
import {ActivitiesPageModule} from '../activities/activities.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SchedulesPageRoutingModule,
        ActivitiesPageModule
    ],
  declarations: [SchedulesPage]
})
export class SchedulesPageModule {}

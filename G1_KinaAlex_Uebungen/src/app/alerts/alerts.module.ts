import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsPageRoutingModule } from './alerts-routing.module';

import { AlertsPage } from './alerts.page';
import {NavigationPageModule} from '../navigation/navigation.module';
import {HammerModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertsPageRoutingModule,
    NavigationPageModule,
    HammerModule
  ],
  declarations: [AlertsPage]
})
export class AlertsPageModule {}

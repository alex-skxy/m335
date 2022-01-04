import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationDetailPageRoutingModule } from './navigation-detail-routing.module';

import { NavigationDetailPage } from './navigation-detail.page';
import {NavigationPageModule} from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationDetailPageRoutingModule,
    NavigationPageModule
  ],
  declarations: [NavigationDetailPage]
})
export class NavigationDetailPageModule {}

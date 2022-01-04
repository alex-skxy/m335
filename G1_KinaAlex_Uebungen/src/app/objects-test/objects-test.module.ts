import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectsTestPageRoutingModule } from './objects-test-routing.module';

import { ObjectsTestPage } from './objects-test.page';
import {NavigationPageModule} from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectsTestPageRoutingModule,
    NavigationPageModule
  ],
  declarations: [ObjectsTestPage]
})
export class ObjectsTestPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumbersTestPageRoutingModule } from './numbers-test-routing.module';

import { NumbersTestPage } from './numbers-test.page';
import {NavigationPageModule} from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumbersTestPageRoutingModule,
    NavigationPageModule
  ],
  declarations: [NumbersTestPage]
})
export class NumbersTestPageModule {}

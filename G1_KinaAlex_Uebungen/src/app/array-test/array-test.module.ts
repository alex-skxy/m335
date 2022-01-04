import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrayTestPageRoutingModule } from './array-test-routing.module';

import { ArrayTestPage } from './array-test.page';
import {NavigationPageModule} from '../navigation/navigation.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ArrayTestPageRoutingModule,
        NavigationPageModule
    ],
  declarations: [ArrayTestPage]
})
export class ArrayTestPageModule {}

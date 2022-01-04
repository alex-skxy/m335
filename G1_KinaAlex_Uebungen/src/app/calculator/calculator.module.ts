import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';
import {NavigationPageModule} from '../navigation/navigation.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalculatorPageRoutingModule,
        NavigationPageModule
    ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataBindingPageRoutingModule } from './data-binding-routing.module';

import { DataBindingPage } from './data-binding.page';
import {NavigationPageModule} from '../navigation/navigation.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DataBindingPageRoutingModule,
        NavigationPageModule
    ],
  declarations: [DataBindingPage]
})
export class DataBindingPageModule {}

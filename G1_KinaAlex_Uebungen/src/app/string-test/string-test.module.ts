import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StringTestPageRoutingModule} from './string-test-routing.module';

import {StringTestPage} from './string-test.page';
import {NavigationPageModule} from '../navigation/navigation.module';
import {WordWeltComponent} from './word-welt/word-welt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StringTestPageRoutingModule,
    NavigationPageModule
  ],
  declarations: [StringTestPage, WordWeltComponent]
})
export class StringTestPageModule {
}

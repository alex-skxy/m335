import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoragePageRoutingModule } from './storage-routing.module';

import { StoragePage } from './storage.page';
import {NavigationPageModule} from "../navigation/navigation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoragePageRoutingModule,
    NavigationPageModule,
    ReactiveFormsModule
  ],
  declarations: [StoragePage]
})
export class StoragePageModule {}

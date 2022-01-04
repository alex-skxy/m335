import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationPageRoutingModule } from './navigation-routing.module';

import { NavigationPage } from './navigation.page';
import {NavMenuHeaderComponent} from '../nav-menu-header/nav-menu-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationPageRoutingModule
  ],
  exports: [
    NavMenuHeaderComponent
  ],
  declarations: [NavigationPage, NavMenuHeaderComponent]
})
export class NavigationPageModule {}

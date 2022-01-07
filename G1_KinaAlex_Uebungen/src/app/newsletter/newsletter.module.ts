import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewsletterPageRoutingModule} from './newsletter-routing.module';

import {NewsletterPage} from './newsletter.page';
import {NavigationPageModule} from "../navigation/navigation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewsletterPageRoutingModule,
    NavigationPageModule,
  ],
  declarations: [NewsletterPage]
})
export class NewsletterPageModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringTestPage } from './string-test.page';

const routes: Routes = [
  {
    path: '',
    component: StringTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StringTestPageRoutingModule {}

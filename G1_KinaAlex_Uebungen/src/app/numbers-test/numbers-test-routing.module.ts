import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumbersTestPage } from './numbers-test.page';

const routes: Routes = [
  {
    path: '',
    component: NumbersTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumbersTestPageRoutingModule {}

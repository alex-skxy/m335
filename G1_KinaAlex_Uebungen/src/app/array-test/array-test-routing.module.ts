import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayTestPage } from './array-test.page';

const routes: Routes = [
  {
    path: '',
    component: ArrayTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrayTestPageRoutingModule {}

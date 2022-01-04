import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectsTestPage } from './objects-test.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectsTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectsTestPageRoutingModule {}

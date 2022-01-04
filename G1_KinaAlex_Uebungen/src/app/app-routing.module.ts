import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NavigationDetailComponent} from './navigation-detail/navigation-detail.component';
import {NavigationComponent} from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full'
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path: 'navigation-detail',
    component: NavigationDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

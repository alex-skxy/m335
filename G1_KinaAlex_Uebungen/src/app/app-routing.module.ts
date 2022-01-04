import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationPageModule)
  },
  {
    path: 'navigation-detail',
    loadChildren: () => import('./navigation-detail/navigation-detail.module').then(m => m.NavigationDetailPageModule)
  },
  {
    path: 'test/numbers',
    loadChildren: () => import('./numbers-test/numbers-test.module').then(m => m.NumbersTestPageModule)
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

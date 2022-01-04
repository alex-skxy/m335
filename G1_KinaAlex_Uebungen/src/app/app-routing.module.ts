import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full'
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
  },
  {
    path: 'test/string',
    loadChildren: () => import('./string-test/string-test.module').then(m => m.StringTestPageModule)
  },
  {
    path: 'test/objects',
    loadChildren: () => import('./objects-test/objects-test.module').then(m => m.ObjectsTestPageModule)
  },
  {
    path: 'test/array',
    loadChildren: () => import('./array-test/array-test.module').then(m => m.ArrayTestPageModule)
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then( m => m.DataBindingPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
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

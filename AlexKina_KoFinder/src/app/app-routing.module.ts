import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'activities',
    pathMatch: 'full'
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

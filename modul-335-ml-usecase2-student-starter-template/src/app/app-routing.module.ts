import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.page';
import {WillkommenGuard} from "./_guards/willkommen.guard";

// TODO: Standardverhalten definieren

// TODO: Willkommen Guard

// TODO: Routes schützen inkl. AuthGuard oder AngularFireAuthGuard definieren
const routes: Routes = [
    {
        path: '',
        redirectTo: 'willkommen',
        pathMatch: 'full'
    },
    {
        path: 'ferienorte',
        loadChildren: () => import('./ferienorte/ferienorte.module').then(m => m.FerienortePageModule),

    },
    {
        path: 'gallerie',
        loadChildren: () => import('./gallerie/gallerie.module').then(m => m.GalleriePageModule),

    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),

    },
    {
        path: 'registrierung',
        loadChildren: () => import('./registrierung/registrierung.module').then(m => m.RegistrierungPageModule),

    },
    {
        path: 'willkommen',
        loadChildren: () => import('./willkommen/willkommen.module').then(m => m.WillkommenPageModule),
        canLoad: [WillkommenGuard],
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.page';
import {WillkommenGuard} from "./_guards/willkommen.guard";
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo,} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToRoot = () => redirectLoggedInTo(["gallerie"]);

const routes: Routes = [
    {
        path: '',
        redirectTo: 'willkommen',
        pathMatch: 'full'
    },
    {
        path: 'ferienorte',
        loadChildren: () => import('./ferienorte/ferienorte.module').then(m => m.FerienortePageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin},
    },
    {
        path: 'gallerie',
        loadChildren: () => import('./gallerie/gallerie.module').then(m => m.GalleriePageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin},
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectLoggedInToRoot},
    },
    {
        path: 'registrierung',
        loadChildren: () => import('./registrierung/registrierung.module').then(m => m.RegistrierungPageModule),
        canActivate: [AngularFireAuthGuard],
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

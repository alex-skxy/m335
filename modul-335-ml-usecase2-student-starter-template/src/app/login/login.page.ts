import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {User} from '../_types/user';
import {Router} from '@angular/router';
import {AuthService} from "../_services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user = {} as User;

    constructor(
        private alertCtrl: AlertController,
        private router: Router,
        private authService: AuthService
    ) {

    }

    ngOnInit() {
        // TODO: Evt. Willkommensseite darstellen
    }

    async doLogin(user: User) {
        await this.authService.loginWithEmailAndPassword(user);
    }

    async gotoRegistrierung() {
        await this.router.navigateByUrl('/registrierung');
    }
}

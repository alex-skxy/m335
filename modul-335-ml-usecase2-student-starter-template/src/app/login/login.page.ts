import {Component, OnInit} from '@angular/core';
import {AlertController, MenuController} from '@ionic/angular';
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
        private authService: AuthService, private menuCtrl: MenuController
    ) {

    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    async doLogin(user: User) {
        await this.authService.loginWithEmailAndPassword(user);
    }

    async gotoRegistrierung() {
        await this.router.navigateByUrl('/registrierung');
    }
}

import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {User} from '../_types/user';
import {Router} from '@angular/router';
import {AuthService} from "../_services/auth.service";

@Component({
    selector: 'app-registrierung',
    templateUrl: './registrierung.page.html',
    styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {

    user = {} as User;

    constructor(private router: Router,
                private alertCtrl: AlertController,
                private toast: ToastController,
                private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    async register(user: User) {
        await this.authService.createUserWithEmailAndPassword(user);
        await this.router.navigateByUrl('/login');
    }

    async goBackToLogin() {
        await this.router.navigateByUrl('/login');
    }
}

import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {AuthService} from "./_services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {url: '/gallerie', icon: 'images', title: 'Gallerie', color: 'tertiary'},
        {url: '/ferienorte', icon: 'airplane', title: 'Ferienorte', color: 'danger'}
    ];

    constructor(
        private platform: Platform,
        private authService: AuthService
    ) {
        this.initializeApp();
    }

    initializeApp() {

    }

    async logout() {
        await this.authService.logout();
    }
}

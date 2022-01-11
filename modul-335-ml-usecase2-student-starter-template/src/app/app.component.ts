import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {url: '/gallerie', icon: 'images', title: 'Gallerie', color:'tertiary'},
        {url: '/ferienorte', icon: 'airplane', title: 'Ferienorte', color:'danger'}
    ];

    constructor(
        private platform: Platform,
    ) {
        this.initializeApp();
    }

    initializeApp() {

    }
}

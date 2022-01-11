import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {Router} from "@angular/router";
import {MenuController} from "@ionic/angular";

@Component({
    selector: 'app-willkommen',
    templateUrl: './willkommen.page.html',
    styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {

    constructor(private storage: Storage, private router: Router, private menuCtrl: MenuController) {

    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    async welcomeDone() {
        await this.storage.set('WelcomeDone', 'true');
        await this.router.navigateByUrl('/login');
    }

}

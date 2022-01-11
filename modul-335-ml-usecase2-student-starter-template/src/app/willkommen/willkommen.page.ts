import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-willkommen',
    templateUrl: './willkommen.page.html',
    styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {

    constructor(private storage: Storage, private router: Router) {
    }

    ngOnInit() {
    }

    async welcomeDone() {
        await this.storage.set('WelcomeDone', 'true');
        await this.router.navigateByUrl('/login');
    }

}

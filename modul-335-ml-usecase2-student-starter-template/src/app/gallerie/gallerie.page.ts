import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {AlertController, MenuController} from '@ionic/angular';
import {Gallerie} from "../_types/gallerie";

@Component({
    selector: 'app-gallerie',
    templateUrl: './gallerie.page.html',
    styleUrls: ['./gallerie.page.scss'],
})
export class GalleriePage implements OnInit {

    groupNumber: string = 'G1'; // Bsp. G1
    private galleryListRef: AngularFireList<Gallerie>;
    galleryList: Observable<Gallerie[]>;

    constructor(public alertCtrl: AlertController, afDb: AngularFireDatabase, private menuCtrl: MenuController) {
        this.galleryListRef = afDb.list('/gallerie/' + this.groupNumber);
        this.galleryList = this.galleryListRef.valueChanges();
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }

    ngOnInit() {
    }

}

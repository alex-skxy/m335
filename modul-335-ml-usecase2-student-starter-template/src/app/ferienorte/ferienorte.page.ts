import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {Ferienort} from "../_types/ferienort";

@Component({
    selector: 'app-ferienorte',
    templateUrl: './ferienorte.page.html',
    styleUrls: ['./ferienorte.page.scss'],
})
export class FerienortePage implements OnInit {

    groupNumber: string = 'G1'; // Bsp. G1
    private ferienortListRef: AngularFireList<unknown>;
    ferienortList: Observable<unknown[]>;


    constructor(public alertCtrl: AlertController, afDb: AngularFireDatabase) {
        this.ferienortListRef = afDb.list('/ferienorte/' + this.groupNumber);
        this.ferienortList = this.ferienortListRef.valueChanges();
    }

    ngOnInit() {
    }

    async addFerienort() {
        const alert = await this.alertCtrl.create({
            header: 'Ferienort hinzufügen',
            inputs: [
                {name: 'name', type: 'text', placeholder: 'Name Ferienort'}
            ],
            buttons: [
                {
                    text: 'Abbrechen', role: 'cancel', cssClass: 'secondary'
                },
                {
                    text: 'Hinzufügen',
                    handler: data => {
                        this.createFerienOrt({name: data.name});
                    }
                }
            ]
        })
        await alert.present();
    }

    createFerienOrt(ferienort: Ferienort) {
        this.ferienortListRef.push(ferienort);
    }
}

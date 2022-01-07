import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  nickname: string;

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Nickname erfassen',
      inputs: [{
        name: 'nickname',
        type: 'text',
        id: 'nickname',
        value: '',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
        {
          text: 'Ok',
          handler: data => {
            this.nickname = data.nickname;
            console.log('Confirm Ok');
            console.log(this.nickname);
          }
        }
      ]
    });

    await alert.present();
  }
}

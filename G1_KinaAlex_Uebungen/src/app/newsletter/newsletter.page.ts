import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {

  contactForm: FormGroup;

  constructor(private toastController: ToastController) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  async sendNewsletterForm() {
    console.log(this.contactForm.get('email'));
    const toast = await this.toastController.create({
      header: 'Form Sent!',
      color: 'success',
      icon: 'checkmark',
      position: 'top'
    });
    await toast.present();
  }

}

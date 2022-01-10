import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  private previousPage: string;


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl()
    });
    this.previousPage = this.route.snapshot.paramMap.get('previousPage');
    console.log(this.previousPage);
  }

  async goBack() {
    await this.router.navigateByUrl(this.previousPage);
  }

  register() {

  }
}

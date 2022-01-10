import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl()
    });
  }

  login() {
    this.authService.loginWithEmailAndPassword({
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    });
  }

  async register() {
    await this.router.navigate(['/register', {previousPage: this.router.url}]);
  }
}

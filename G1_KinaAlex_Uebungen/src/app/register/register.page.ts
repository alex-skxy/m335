import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  private previousPage: string;


  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.min(6)]),
    });
    this.previousPage = this.route.snapshot.paramMap.get('previousPage');
    console.log(this.previousPage);
  }

  async goBack() {
    await this.router.navigateByUrl(this.previousPage);
  }

  async register() {
    await this.authService.createUserWithEmailAndPassword({
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    });
    this.router.navigateByUrl('/login');
  }
}

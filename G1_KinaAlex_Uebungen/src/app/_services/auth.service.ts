import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }


  async loginWithEmailAndPassword(user: User) {
    const res = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    if (res) {
      await this.router.navigateByUrl('/');
    }
  }


  async createUserWithEmailAndPassword(user: User) {
    const res = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    if (res) {
      await this.router.navigateByUrl('/login');
    }
  }

  logout() {
    // TODO: User ausloggen
  }
}

export interface User {
  email: string;
  password: string;
}

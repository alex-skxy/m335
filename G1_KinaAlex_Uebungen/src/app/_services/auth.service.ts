import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
  }


  async loginWithEmailAndPassword(user: User) {
    this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }


  async createUserWithEmailAndPassword(user: User) {
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    // TODO: User ausloggen
  }
}

export interface User {
  email: string;
  password: string;
}

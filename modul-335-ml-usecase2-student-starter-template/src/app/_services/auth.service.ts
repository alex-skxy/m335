import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {User} from '../_types/user';
import {NavController, ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController) {
    }

    async loginWithEmailAndPassword(user: User, redirectToURL?: string) {
        try {
            await this.afAuth.signInWithEmailAndPassword(user.email, user.password)
            await this.navCtrl.navigateForward('/gallerie')
        } catch (e) {
            await this.toast.create({message: `Could not log in. ${e}`, color: 'danger'}).then(t => t.present);
        }
    }

    async createUserWithEmailAndPassword(user: User, redirectToURL?: string) {
        try {
            const res = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
            if (res) {
                await (await this.afAuth.currentUser).updateProfile({displayName: user.displayname})
            }
        } catch (e) {
            await this.toast.create({message: `Could not log register. ${e}`, color: 'danger'}).then(t => t.present);
        }
    }

    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.afAuth.currentUser !== null;
    }

    async logout() {
        await this.afAuth.signOut();
    }
}

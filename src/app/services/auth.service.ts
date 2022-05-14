import { Injectable } from '@angular/core';
//import firebase from 'firebase/compat/app';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  login() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.auth.signOut();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import firebase from '@firebase/app-compat';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private auth : AuthService) { }
//public auth: AngularFireAuth
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  esLogin : boolean = true;

  onSubmit(form: NgForm) {
    this.auth.login();
    form.reset();
  }

  cambiarLoginMode() {
    this.esLogin = !this.esLogin;
  }

}

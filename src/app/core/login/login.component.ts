import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ui: firebaseui.auth.AuthUI;

  constructor(private afAuth: AngularFireAuth) {

  }

  ngOnInit() {

    const firebaseUiAuthConfig: firebaseui.auth.Config = {
      signInFlow: 'popup',
      signInSuccessUrl: '/home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
      }
    };
    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);

    this.ui.start('#firebaseui-auth-container', firebaseUiAuthConfig);
  }

  onLoginSuccessful() {

  }

}

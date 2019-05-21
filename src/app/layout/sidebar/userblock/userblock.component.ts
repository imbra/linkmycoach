import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    ui: firebaseui.auth.AuthUI;
    constructor(public userblockService: UserblockService, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        // set default username and avatar
        this.user = {
          displayName: 'Misha',
          photoURL: 'https://pbs.twimg.com/profile_images/1058884992967827456/NewxtK7j_400x400.jpg'
      };

        const firebaseUiAuthConfig: firebaseui.auth.Config = {
            signInFlow: 'popup',
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
              signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
            }
          };
          this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);

          this.ui.start('#firebaseui-auth-container', firebaseUiAuthConfig);

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              this.user = user;
            } else {
                this.user = {
                    displayName: 'Misha',
                    photoURL: 'https://pbs.twimg.com/profile_images/1058884992967827456/NewxtK7j_400x400.jpg'
                };
            }
          });
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

    onLoginSuccessful() {
        this.user = firebase.auth().currentUser;
    }

}

import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { reject } from 'q';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //méthode créer un nouvelle utilisateur
  createNewUser(email: string, passeword: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, passeword).then(
          () => {
            resolve();
            console.log('Utilisateur crée');
          },
            (error) => {
              reject(error);
            }
        );
      }
    );
  }

  signInUser(email: string, passeword: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, passeword).then(
          () => {
            resolve();
            console.log('Vous êtes connecter');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}

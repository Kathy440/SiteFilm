import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SiteAngular';

  constructor() {
  var config = {
    apiKey: "AIzaSyA1crCf10Vdgnf013Z0RtxfQ_Fa8YUZCGI",
    authDomain: "testan-995f8.firebaseapp.com",
    databaseURL: "https://testan-995f8.firebaseio.com",
    projectId: "testan-995f8",
    storageBucket: "testan-995f8.appspot.com",
    messagingSenderId: "818714190436"
  };
  firebase.initializeApp(config);
  }

}

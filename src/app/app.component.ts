import { Component, OnInit } from '@angular/core';
import fbcfg from 'src/app/conf/fbcfg';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import  "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mathessprod';
  
  ngOnInit(): void {
    firebase.initializeApp(fbcfg);
    firebase.analytics().logEvent('eventName');
  }
}


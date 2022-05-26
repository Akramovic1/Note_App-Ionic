import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const config = {
  apiKey: "AIzaSyBRdG7iSIvKmNm5j-yWZCEekqdueLB0ktw",
  authDomain: "hamlets-note-taker.firebaseapp.com",
  projectId: "hamlets-note-taker",
  storageBucket: "hamlets-note-taker.appspot.com",
  messagingSenderId: "1008696776038",
  appId: "1:1008696776038:web:bf0292d156e9a40f5ae4a7",
  measurementId: "G-TEBE2XWM6D"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, provideFirebaseApp(() => initializeApp(config)), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

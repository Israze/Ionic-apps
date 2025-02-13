import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "razedbank", appId: "1:839669855239:web:2f1521b81db0fbc52066a2", storageBucket: "razedbank.firebasestorage.app", apiKey: "AIzaSyA9wF6VI9hloo3_oStCueiqMkHB9W19QEM", authDomain: "razedbank.firebaseapp.com", messagingSenderId: "839669855239", measurementId: "G-0R7DG9PR1X" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});

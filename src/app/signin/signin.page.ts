import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonIcon, IonList, IonCard, IonImg, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { addIcons, } from 'ionicons';
import { eye, lockClosed, person, mail, call } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonIcon, RouterModule, IonList, IonCard, IonImg, IonInputPasswordToggle, CommonModule, FormsModule]
})
export class SigninPage implements OnInit {

  constructor() { 
     addIcons({ eye, lockClosed, person, mail, call });
  }

  ngOnInit() {
  }

}

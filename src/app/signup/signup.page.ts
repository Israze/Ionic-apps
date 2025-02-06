import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInputPasswordToggle, IonImg, IonInput, IonItem, IonCard, IonList, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule} from '@angular/router'
import { addIcons, } from 'ionicons';
import { eye, lockClosed, person, mail, call } from 'ionicons/icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonList, IonCard, IonItem, IonContent, IonInputPasswordToggle, IonHeader, IonTitle, IonToolbar, RouterModule, CommonModule, FormsModule, IonImg, IonInput]
})
export class SignupPage implements OnInit {

  constructor() {

    addIcons({ eye, lockClosed, person, mail, call });
   }

  ngOnInit() {
  }

}

import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonList, IonCardSubtitle, IonLabel, IonContent, IonMenu, IonMenuButton, IonButtons, IonAvatar, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonItem } from '@ionic/angular/standalone';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonButton, IonList, IonCardSubtitle, IonLabel, IonItem, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons,  IonAvatar, IonCardContent, IonCardHeader, IonCardTitle, IonCard],
})
export class HomePage {
  Dataservice = inject(DataService);

  currentUser: any;
  constructor() {}

  ngOnInit() {
    this.currentUser = this.Dataservice.getCurrentUser();
    console.log("Current User:", this.currentUser);
  }
}

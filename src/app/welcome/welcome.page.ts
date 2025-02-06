import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonModal, IonButtons, IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import { RouterModule} from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonButton, IonImg, IonContent, IonModal, IonButtons, IonHeader,IonTitle, IonToolbar, CommonModule, RouterModule, FormsModule]
})
export class WelcomePage implements OnInit {
  
  constructor() { }

  IsModalOpen = false;

  terms_clicked(){
    this.IsModalOpen = true;
  }

  

  ngOnInit() {
  }

}

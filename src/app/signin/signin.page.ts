import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonIcon, IonList, IonCard, IonImg, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { addIcons, } from 'ionicons';
import { eye, lockClosed, person, mail, call } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { DataService } from '../service/data.service';
import { AlertService } from '../service/alert.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, ReactiveFormsModule, IonButton, IonItem, IonInput, IonIcon, RouterModule, IonList, IonCard, IonImg, IonInputPasswordToggle, CommonModule, FormsModule]
})
export class SigninPage implements OnInit {

  formData: any = {};

  DataService = inject(DataService);
  alertService = inject(AlertService);

  protected email = new FormControl<string>('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]);
  protected password = new FormControl<string>('', Validators.required);

  constructor() { 
     addIcons({ eye, lockClosed, person, mail, call });
  }

  ngOnInit() {
    
  }

  OnSubmit(){

    this.formData = {
      email: this.email.value,
      password: this.password.value
    };
    console.log(this.formData);

    this.DataService.loginUsers(this.formData.email, this.formData.password);
  }

}

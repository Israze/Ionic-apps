import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInputPasswordToggle, IonImg, IonInput, IonItem, IonCard, IonList, IonButton, IonIcon, AlertController } from '@ionic/angular/standalone';
import { RouterModule} from '@angular/router'
import { addIcons, } from 'ionicons';
import { eye, lockClosed, person, mail, call } from 'ionicons/icons';
import { DataService} from '../service/data.service';
import { user } from '@angular/fire/auth';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonList, ReactiveFormsModule, IonCard, IonItem, IonInputPasswordToggle, IonHeader, IonTitle, IonToolbar, RouterModule, CommonModule, IonImg, IonInput]
})
export class SignupPage implements OnInit {
  
  formData: any = {};

  DataService = inject(DataService);
  AlertService = inject(AlertService);

  protected name = new FormControl<string>('', Validators.required);
  protected email = new FormControl<string>('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]);
  protected phone = new FormControl<string>('', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]);
  // protected password = new FormControl<string>('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$')]);
  protected password = new FormControl<string>('', Validators.required);

  constructor() {
    addIcons({ eye, lockClosed, person, mail, call });
  }

  ngOnInit() {}

  async Submit_cred() {
    console.log("user just submitted");
    this.formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      password: this.password.value
    };
    console.log(this.formData);

    const success = await this.DataService.registerUsers(this.formData.email, this.formData.password, this.formData.name, this.formData.phone);

    this.formData = {};

    console.log(this.formData);

    if (!success && this.DataService.errorCode == 'auth/email-already-in-use') {
      const errorMessage = "A user with this email already exists";
      this.AlertService.presentAlert("error", errorMessage, ["Okay"]);
    }

    else if(!success && this.DataService.errorCode == 'auth/network-request-failed') {
      const errorMessage = "An error occured, please try again";
      this.AlertService.presentAlert("error", errorMessage, ["Okay"]);

    }
    else{
      const Message = "Your account has been created successfully";
      this.AlertService.presentAlert("Sucess", Message, ["Sign in"]);

    }
  }
}
import { Injectable } from '@angular/core';
import { AlertController, IonButton } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) {}

  async presentAlert(errorMessage: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: errorMessage,
      buttons: ['Ok'],
    });

    await alert.present();
  }

}

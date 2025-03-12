import { Injectable } from '@angular/core';
import { AlertController, IonButton } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(private alertController: AlertController) {}

  async presentAlert(errorMessage: string, header: string, button:[string]) {
    const alert = await this.alertController.create({
      header: header,
      message: errorMessage,
      buttons: button,
    });

    await alert.present();
  }

}

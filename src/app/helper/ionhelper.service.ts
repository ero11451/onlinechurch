import { Injectable, Component } from '@angular/core';
import { ModalController, PickerController, AlertController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonhelperService {

  constructor(
    private modalController: ModalController,
    private pickerController: PickerController,
    private alertController: AlertController,
    private popoverController: PopoverController,
    
    ) { }
    
  async presentModal(page,value, style) {
    const modal = await this.modalController.create({
    component: page,
    cssClass: style,
    componentProps: value
    });
    await modal.present();
  }
  async presentPicker() {
    const picker = await this.pickerController.create({
    animated: true,
    buttons: [{
      text: 'Save',
      handler: () => console.log('Clicked Save!')
    }, {
      text: 'Log',
      handler: (val) => {
        console.log('Clicked Log. Do not Dismiss.', val);
        return false;
      }
    }],
    columns: [
      {
        name: 'hours',
        prefix: 'total',
        suffix: 'hours',
        options: [
          {
            text: '1',
            value: '01'
          },
          {
            text: '2',
            value: '02'
          }
        ]
      }
    ],
    cssClass: 'picker-hours',
    mode: 'ios',
    });
    picker.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentPopover(Component ,translucent:boolean, ev: any) {
    const popover = await this.popoverController.create({
      component: Component,
      event: ev,
      translucent,
    });
    await popover.present();
  }
}

import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';

export enum ConnectionStatus {
  Online,
  Offline
}
@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  public status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

  constructor(
    private toastController: ToastController,
    private network: Network,
    private plt: Platform) {
    this.plt.ready().then(() => {
      this.initializeNetworkEvents();
      const status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.status.next(status);
    });
  }
  public initializeNetworkEvents() {

    this.network.onDisconnect().subscribe(() => {
      if (this.status.getValue() == ConnectionStatus.Online) {
        console.log('WE ARE OFFLINE');
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    this.network.onConnect().subscribe(() => {
      if (this.status.getValue() == ConnectionStatus.Offline) {
        console.log('WE ARE ONLINE');
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }

  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);
    const connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
    const toast = await this.toastController.create({
        message: `you are now ${connection}`,
        duration: 2000
      });
    toast.present();
    console.log(connection);
  }

  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }

  public getCurrentNetworkStatus(): ConnectionStatus {
    console.log(this.status.getValue());
    return this.status.getValue();
  }


}
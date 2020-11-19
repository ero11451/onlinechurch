import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPage } from 'src/app/container/menu/menu.page';

@Component({
  selector: 'app-messgaelist',
  templateUrl: './messgaelist.page.html',
  styleUrls: ['./messgaelist.page.scss'],
})
export class MessgaelistPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  

}

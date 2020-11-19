import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;  
  segment = 0;
  constructor() { }
  ngOnInit(){

  }
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();  
  }  
  onSearchChange($event){
    
  }
}

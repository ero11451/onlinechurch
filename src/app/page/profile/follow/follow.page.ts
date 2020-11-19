import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.page.html',
  styleUrls: ['./follow.page.scss'],
})
export class FollowPage implements OnInit {

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

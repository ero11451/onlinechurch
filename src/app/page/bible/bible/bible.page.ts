import { ChapterPage } from './../chapter/chapter.page';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
 interface Bible {
  abbrev: string;
  chapters: Array<string[]>;
  name: string;

}
@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})



export class BiblePage implements OnInit {

  constructor(private http: HttpClient , private modalController: ModalController) { }
   bible
   error
   data
   
  ngOnInit() {
    this.getbible()
    console.log(this.data)
  }
  
 getbible(){
   this.http.get<Bible[]>('assets/data/mcbible.json')
   .subscribe(data => this.bible = data)
   console.log(this.data)
 }
 async navTo(item){
   console.log(item)
   const modal = await this.modalController.create({
   component: ChapterPage,
   componentProps: { chapter: item }
   });
   await modal.present();
 }
}

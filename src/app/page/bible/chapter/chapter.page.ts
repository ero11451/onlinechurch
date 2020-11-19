import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
interface Bible {
  abbrev: string;
  chapters: Array<string[]>;
  name: string;

}
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {

  book: Bible;
  books: Bible[];
  bookName: string;
  @Input() chapter: any;
  constructor(private http: HttpClient , private modalController: ModalController) { }
  
  ngOnInit() { 
    this.getBible()
   }
  close(){
    this.modalController.dismiss();
  }
  getBible(){
    
   this.http.get<Bible[]>('assets/data/mcbible.json').subscribe((data) => {
        // tslint:disable-next-line: no-shadowed-variable
        this.books = data.filter(data => data.name == this.chapter.name );
        this.book = this.books[0];
      }, err => {
        //console.error(err)
      });
  }
 
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchproductPage } from './searchproduct.page';

describe('SearchproductPage', () => {
  let component: SearchproductPage;
  let fixture: ComponentFixture<SearchproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

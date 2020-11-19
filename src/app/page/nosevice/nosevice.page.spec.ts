import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NosevicePage } from './nosevice.page';

describe('NosevicePage', () => {
  let component: NosevicePage;
  let fixture: ComponentFixture<NosevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NosevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

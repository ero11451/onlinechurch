import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CelebrationcardPage } from './celebrationcard.page';

describe('CelebrationcardPage', () => {
  let component: CelebrationcardPage;
  let fixture: ComponentFixture<CelebrationcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CelebrationcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

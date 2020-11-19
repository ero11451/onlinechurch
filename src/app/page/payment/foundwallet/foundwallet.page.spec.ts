import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoundwalletPage } from './foundwallet.page';

describe('FoundwalletPage', () => {
  let component: FoundwalletPage;
  let fixture: ComponentFixture<FoundwalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundwalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoundwalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

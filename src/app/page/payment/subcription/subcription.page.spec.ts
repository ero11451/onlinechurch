import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubcriptionPage } from './subcription.page';

describe('SubcriptionPage', () => {
  let component: SubcriptionPage;
  let fixture: ComponentFixture<SubcriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubcriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

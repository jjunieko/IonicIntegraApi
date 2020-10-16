import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalhistoricoPage } from './modalhistorico.page';

describe('ModalhistoricoPage', () => {
  let component: ModalhistoricoPage;
  let fixture: ComponentFixture<ModalhistoricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalhistoricoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalhistoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

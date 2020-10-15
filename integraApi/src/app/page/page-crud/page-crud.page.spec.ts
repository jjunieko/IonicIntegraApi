import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageCrudPage } from './page-crud.page';

describe('PageCrudPage', () => {
  let component: PageCrudPage;
  let fixture: ComponentFixture<PageCrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCrudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

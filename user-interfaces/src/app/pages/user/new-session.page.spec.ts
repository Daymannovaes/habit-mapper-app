import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { NewSessionPage } from './new-session.page';

describe('NewSessionPage', () => {
  let component: NewSessionPage;
  let fixture: ComponentFixture<NewSessionPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NewSessionPage],
        imports: [RouterTestingModule, IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(NewSessionPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { HabitsPage } from './habits.page';

describe('HabitsPage', () => {
  let component: HabitsPage;
  let fixture: ComponentFixture<HabitsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HabitsPage],
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          IonicModule.forRoot(),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HabitsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

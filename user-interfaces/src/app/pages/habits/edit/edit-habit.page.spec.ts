import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { EditHabitPage } from './edit-habit.page';

describe('EditHabitPage', () => {
  let component: EditHabitPage;
  let fixture: ComponentFixture<EditHabitPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditHabitPage],
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          IonicModule.forRoot(),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(EditHabitPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

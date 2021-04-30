import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingDoPage } from './onboarding-do.page';

describe('OnboardingDoPage', () => {
  let component: OnboardingDoPage;
  let fixture: ComponentFixture<OnboardingDoPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnboardingDoPage],
        imports: [RouterTestingModule, IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(OnboardingDoPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

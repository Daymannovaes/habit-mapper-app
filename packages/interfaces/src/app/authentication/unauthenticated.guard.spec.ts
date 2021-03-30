import { TestBed } from '@angular/core/testing';

import { UnauthenticatedGuard } from './unauthenticated.guard';

describe('AuthenticationGuard', () => {
  let guard: UnauthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

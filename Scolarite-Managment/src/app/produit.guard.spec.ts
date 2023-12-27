import { TestBed } from '@angular/core/testing';

import { ProduitGuard } from './login/login.guard';

describe('ProduitGuard', () => {
  let guard: ProduitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProduitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

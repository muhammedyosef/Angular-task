import { TestBed } from '@angular/core/testing';

import { AuthService } from './authService.service';

describe('AuthService.Service.TsService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

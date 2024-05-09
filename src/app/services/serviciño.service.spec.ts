import { TestBed } from '@angular/core/testing';

import { ServiciñoService } from './serviciño.service';

describe('ServiciñoService', () => {
  let service: ServiciñoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciñoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

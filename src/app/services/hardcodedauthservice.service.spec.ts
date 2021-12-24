import { TestBed } from '@angular/core/testing';

import { HardcodedauthserviceService } from './hardcodedauthservice.service';

describe('HardcodedauthserviceService', () => {
  let service: HardcodedauthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedauthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

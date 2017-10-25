import { TestBed, inject } from '@angular/core/testing';

import { LedStubService } from './led-stub.service';

describe('LedStubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LedStubService]
    });
  });

  it('should be created', inject([LedStubService], (service: LedStubService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { InMemoryServiceService } from './in-memory-service.service';

describe('InMemoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryServiceService]
    });
  });

  it('should be created', inject([InMemoryServiceService], (service: InMemoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { GitsearchRequestService } from './gitsearch-request.service';

describe('GitsearchRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitsearchRequestService]
    });
  });

  it('should be created', inject([GitsearchRequestService], (service: GitsearchRequestService) => {
    expect(service).toBeTruthy();
  }));
});

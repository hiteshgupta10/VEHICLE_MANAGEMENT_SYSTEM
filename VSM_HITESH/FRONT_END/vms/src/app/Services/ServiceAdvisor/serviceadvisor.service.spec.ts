import { TestBed } from '@angular/core/testing';

import { ServiceadvisorService } from './serviceadvisor.service';

describe('ServiceadvisorService', () => {
  let service: ServiceadvisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceadvisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

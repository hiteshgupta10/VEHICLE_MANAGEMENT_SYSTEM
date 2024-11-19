import { TestBed } from '@angular/core/testing';

import { WorkableService } from './workable.service';

describe('WorkableService', () => {
  let service: WorkableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

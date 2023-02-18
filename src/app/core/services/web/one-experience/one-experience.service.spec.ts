import { TestBed } from '@angular/core/testing';

import { OneExperienceService } from './one-experience.service';

describe('OneExperienceService', () => {
  let service: OneExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

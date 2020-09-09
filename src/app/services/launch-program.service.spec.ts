import { TestBed } from '@angular/core/testing';

import { LaunchProgramService } from './launch-program.service';

describe('LaunchProgramService', () => {
  let service: LaunchProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

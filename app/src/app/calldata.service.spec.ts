import { TestBed } from '@angular/core/testing';

import { CalldataService } from './calldata.service';

describe('CalldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalldataService = TestBed.get(CalldataService);
    expect(service).toBeTruthy();
  });
});

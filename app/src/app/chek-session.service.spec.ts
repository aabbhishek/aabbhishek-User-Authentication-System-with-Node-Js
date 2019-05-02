import { TestBed } from '@angular/core/testing';

import { ChekSessionService } from './chek-session.service';

describe('ChekSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChekSessionService = TestBed.get(ChekSessionService);
    expect(service).toBeTruthy();
  });
});

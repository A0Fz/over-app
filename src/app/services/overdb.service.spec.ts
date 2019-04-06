import { TestBed } from '@angular/core/testing';

import { OverdbService } from './overdb.service';

describe('OverdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverdbService = TestBed.get(OverdbService);
    expect(service).toBeTruthy();
  });
});

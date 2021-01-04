import { TestBed } from '@angular/core/testing';

import { IdiomaServiceService } from './idioma-service.service';

describe('IdiomaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdiomaServiceService = TestBed.get(IdiomaServiceService);
    expect(service).toBeTruthy();
  });
});

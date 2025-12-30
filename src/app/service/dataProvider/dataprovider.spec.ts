import { TestBed } from '@angular/core/testing';

import { Dataprovider } from './dataprovider';

describe('Dataprovider', () => {
  let service: Dataprovider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dataprovider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

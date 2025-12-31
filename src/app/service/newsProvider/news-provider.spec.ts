import { TestBed } from '@angular/core/testing';

import { NewsProvider } from './news-provider';

describe('NewsProvider', () => {
  let service: NewsProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

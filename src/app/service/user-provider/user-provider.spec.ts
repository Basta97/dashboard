import { TestBed } from '@angular/core/testing';

import { UserProvider } from './user-provider';

describe('UserProvider', () => {
  let service: UserProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

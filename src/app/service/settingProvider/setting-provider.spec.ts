import { TestBed } from '@angular/core/testing';

import { SettingProvider } from './setting-provider';

describe('SettingProvider', () => {
  let service: SettingProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

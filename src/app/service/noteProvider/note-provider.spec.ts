import { TestBed } from '@angular/core/testing';

import { NoteProvider } from './note-provider';

describe('NoteProvider', () => {
  let service: NoteProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

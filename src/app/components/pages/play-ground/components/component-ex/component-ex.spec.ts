import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEx } from './component-ex';

describe('ComponentEx', () => {
  let component: ComponentEx;
  let fixture: ComponentFixture<ComponentEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

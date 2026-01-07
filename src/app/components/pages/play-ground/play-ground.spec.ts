import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGround } from './play-ground';

describe('PlayGround', () => {
  let component: PlayGround;
  let fixture: ComponentFixture<PlayGround>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayGround]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayGround);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

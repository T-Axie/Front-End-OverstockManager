import { TestBed } from '@angular/core/testing';

import { Intro3Guard } from './intro3.guard';

describe('Intro3Guard', () => {
  let guard: Intro3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Intro3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

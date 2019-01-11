import { TestBed, async, inject } from '@angular/core/testing';

import { Part1GardGuard } from './part1-gard.guard';

describe('Part1GardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Part1GardGuard]
    });
  });

  it('should ...', inject([Part1GardGuard], (guard: Part1GardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

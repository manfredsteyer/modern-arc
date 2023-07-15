import { TestBed } from '@angular/core/testing';

import { LuggageService } from './luggage.service';

describe('LuggageService', () => {
  let service: LuggageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuggageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

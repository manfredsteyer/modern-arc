import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from "./flight-search.component";
import { provideHttpClient } from '@angular/common/http';

// Just a dummy test case for demonatrating incremental testing

describe('TestComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlightSearchComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

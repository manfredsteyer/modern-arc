import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinComponent } from './checkin.component';

describe('CheckinComponent', () => {
  let component: CheckinComponent;
  let fixture: ComponentFixture<CheckinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckinComponent],
    });
    fixture = TestBed.createComponent(CheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

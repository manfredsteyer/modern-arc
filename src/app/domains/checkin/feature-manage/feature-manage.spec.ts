import { FeatureManageComponent } from "./feature-manage.component";

// Just a dummy test case for demonatrating incremental testing

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TestComponent', () => {
  let component: FeatureManageComponent;
  let fixture: ComponentFixture<FeatureManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureManageComponent]
    });
    fixture = TestBed.createComponent(FeatureManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

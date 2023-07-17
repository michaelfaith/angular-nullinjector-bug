import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTestComponent } from './tooltip-test.component';

describe('TooltipTestComponent', () => {
  let component: TooltipTestComponent;
  let fixture: ComponentFixture<TooltipTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TooltipTestComponent]
    });
    fixture = TestBed.createComponent(TooltipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

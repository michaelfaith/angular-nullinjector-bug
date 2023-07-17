import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBasedComponent } from './local-based.component';

describe('LocalBasedComponent', () => {
  let component: LocalBasedComponent;
  let fixture: ComponentFixture<LocalBasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalBasedComponent]
    });
    fixture = TestBed.createComponent(LocalBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

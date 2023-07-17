import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBasedComponent } from './library-based.component';

describe('LibraryBasedComponent', () => {
  let component: LibraryBasedComponent;
  let fixture: ComponentFixture<LibraryBasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LibraryBasedComponent]
    });
    fixture = TestBed.createComponent(LibraryBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

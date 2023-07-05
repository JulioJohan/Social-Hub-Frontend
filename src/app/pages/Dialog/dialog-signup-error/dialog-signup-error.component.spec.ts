import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignupErrorComponent } from './dialog-signup-error.component';

describe('DialogSignupErrorComponent', () => {
  let component: DialogSignupErrorComponent;
  let fixture: ComponentFixture<DialogSignupErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSignupErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSignupErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

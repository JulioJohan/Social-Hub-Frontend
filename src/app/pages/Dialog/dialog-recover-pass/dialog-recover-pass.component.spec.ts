import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecoverPassComponent } from './dialog-recover-pass.component';

describe('DialogRecoverPassComponent', () => {
  let component: DialogRecoverPassComponent;
  let fixture: ComponentFixture<DialogRecoverPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRecoverPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRecoverPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentRegister } from './form-component-register.component';

describe('FormComponentRegister', () => {
  let component: FormComponentRegister;
  let fixture: ComponentFixture<FormComponentRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponentRegister]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormComponentRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

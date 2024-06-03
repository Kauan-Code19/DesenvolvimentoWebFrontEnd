import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdministrativeManagementComponent } from './main-administrative-management.component';

describe('MainAdministrativeManagementComponent', () => {
  let component: MainAdministrativeManagementComponent;
  let fixture: ComponentFixture<MainAdministrativeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAdministrativeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAdministrativeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

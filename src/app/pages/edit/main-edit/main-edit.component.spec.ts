import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditComponent } from './main-edit.component';

describe('MainEditComponent', () => {
  let component: MainEditComponent;
  let fixture: ComponentFixture<MainEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

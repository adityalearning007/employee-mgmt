import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPrjComponent } from './forms-prj.component';

describe('FormsPrjComponent', () => {
  let component: FormsPrjComponent;
  let fixture: ComponentFixture<FormsPrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPrjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

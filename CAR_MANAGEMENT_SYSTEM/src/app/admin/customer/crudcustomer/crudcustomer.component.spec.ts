import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcustomerComponent } from './crudcustomer.component';

describe('CrudcustomerComponent', () => {
  let component: CrudcustomerComponent;
  let fixture: ComponentFixture<CrudcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

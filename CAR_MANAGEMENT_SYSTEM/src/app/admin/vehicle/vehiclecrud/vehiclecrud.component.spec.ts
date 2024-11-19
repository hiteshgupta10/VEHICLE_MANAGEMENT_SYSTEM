import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclecrudComponent } from './vehiclecrud.component';

describe('VehiclecrudComponent', () => {
  let component: VehiclecrudComponent;
  let fixture: ComponentFixture<VehiclecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclecrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

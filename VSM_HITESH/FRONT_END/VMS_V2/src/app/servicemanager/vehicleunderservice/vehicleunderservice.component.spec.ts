import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleunderserviceComponent } from './vehicleunderservice.component';

describe('VehicleunderserviceComponent', () => {
  let component: VehicleunderserviceComponent;
  let fixture: ComponentFixture<VehicleunderserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleunderserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleunderserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

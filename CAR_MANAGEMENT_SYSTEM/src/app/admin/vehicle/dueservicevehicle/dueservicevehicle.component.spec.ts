import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueservicevehicleComponent } from './dueservicevehicle.component';

describe('DueservicevehicleComponent', () => {
  let component: DueservicevehicleComponent;
  let fixture: ComponentFixture<DueservicevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueservicevehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueservicevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

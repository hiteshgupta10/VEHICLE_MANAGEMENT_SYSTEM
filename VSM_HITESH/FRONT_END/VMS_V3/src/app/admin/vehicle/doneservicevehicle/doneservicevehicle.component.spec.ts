import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneservicevehicleComponent } from './doneservicevehicle.component';

describe('DoneservicevehicleComponent', () => {
  let component: DoneservicevehicleComponent;
  let fixture: ComponentFixture<DoneservicevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneservicevehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneservicevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

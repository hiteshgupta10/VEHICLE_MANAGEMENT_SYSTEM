import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderservicevehicleComponent } from './underservicevehicle.component';

describe('UnderservicevehicleComponent', () => {
  let component: UnderservicevehicleComponent;
  let fixture: ComponentFixture<UnderservicevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderservicevehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderservicevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

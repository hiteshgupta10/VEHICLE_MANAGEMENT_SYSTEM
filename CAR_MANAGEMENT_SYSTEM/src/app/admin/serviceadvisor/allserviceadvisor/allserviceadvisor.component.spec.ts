import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllserviceadvisorComponent } from './allserviceadvisor.component';

describe('AllserviceadvisorComponent', () => {
  let component: AllserviceadvisorComponent;
  let fixture: ComponentFixture<AllserviceadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllserviceadvisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllserviceadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

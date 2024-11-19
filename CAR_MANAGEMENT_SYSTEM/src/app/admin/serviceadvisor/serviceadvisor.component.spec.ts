import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceadvisorComponent } from './serviceadvisor.component';

describe('ServiceadvisorComponent', () => {
  let component: ServiceadvisorComponent;
  let fixture: ComponentFixture<ServiceadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceadvisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

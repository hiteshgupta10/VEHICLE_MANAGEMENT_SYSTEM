import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemanagerComponent } from './servicemanager.component';

describe('ServicemanagerComponent', () => {
  let component: ServicemanagerComponent;
  let fixture: ComponentFixture<ServicemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicemanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

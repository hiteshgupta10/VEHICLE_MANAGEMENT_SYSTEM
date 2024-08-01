import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudserviceadvisorComponent } from './crudserviceadvisor.component';

describe('CrudserviceadvisorComponent', () => {
  let component: CrudserviceadvisorComponent;
  let fixture: ComponentFixture<CrudserviceadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudserviceadvisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudserviceadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

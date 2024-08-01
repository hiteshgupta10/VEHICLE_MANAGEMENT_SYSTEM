import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkableComponent } from './workable.component';

describe('WorkableComponent', () => {
  let component: WorkableComponent;
  let fixture: ComponentFixture<WorkableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllworkableComponent } from './allworkable.component';

describe('AllworkableComponent', () => {
  let component: AllworkableComponent;
  let fixture: ComponentFixture<AllworkableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllworkableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllworkableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

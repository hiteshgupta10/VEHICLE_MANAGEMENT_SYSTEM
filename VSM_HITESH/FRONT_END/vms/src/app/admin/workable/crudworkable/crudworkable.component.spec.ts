import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudworkableComponent } from './crudworkable.component';

describe('CrudworkableComponent', () => {
  let component: CrudworkableComponent;
  let fixture: ComponentFixture<CrudworkableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudworkableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudworkableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

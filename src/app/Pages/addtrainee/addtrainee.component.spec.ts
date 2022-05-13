import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtraineeComponent } from './addtrainee.component';

describe('AddtraineeComponent', () => {
  let component: AddtraineeComponent;
  let fixture: ComponentFixture<AddtraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

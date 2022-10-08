import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTypeControllerComponent } from './location-type-controller.component';

describe('LocationTypeControllerComponent', () => {
  let component: LocationTypeControllerComponent;
  let fixture: ComponentFixture<LocationTypeControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationTypeControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationTypeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

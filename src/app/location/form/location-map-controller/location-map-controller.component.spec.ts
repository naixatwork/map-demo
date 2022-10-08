import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMapControllerComponent } from './location-map-controller.component';

describe('LocationMapControllerComponent', () => {
  let component: LocationMapControllerComponent;
  let fixture: ComponentFixture<LocationMapControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationMapControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationMapControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

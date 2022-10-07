import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListComponent } from './location-list.component';
import {By} from "@angular/platform-browser";

describe('LocationListComponent', () => {
  let component: LocationListComponent;
  let fixture: ComponentFixture<LocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render #add-location button", () => {
    const debugElement = fixture.debugElement;
    const addLocationButton = debugElement.query(By.css('[testId="add-location"]'));
    const addLocationButtonElement: HTMLElement = addLocationButton.nativeElement;

    expect(addLocationButton)
      .withContext("element exists")
      .toBeTruthy();

    expect(addLocationButtonElement.innerText.toLowerCase())
      .withContext("tell user that this button is for adding a new location")
      .toBe("add location");
  });
});

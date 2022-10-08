import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {By} from "@angular/platform-browser";
import {SharedModule} from "../shared.module";

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div element with #map id', () => {
    const debugElement = fixture.debugElement;
    const mapContainer = debugElement.query(By.css('[testId="map"]'));
    const mapContainerElement: HTMLElement = mapContainer.nativeElement;

    expect(mapContainer).withContext("element exists").toBeTruthy();
    expect(mapContainerElement.innerHTML).withContext("map has been shown").toBeTruthy();
  });
});

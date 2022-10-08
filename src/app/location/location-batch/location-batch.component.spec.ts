import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBatchComponent } from './location-batch.component';

describe('LocationBatchComponent', () => {
  let component: LocationBatchComponent;
  let fixture: ComponentFixture<LocationBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListComponent } from './location-list.component';

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
    const component = fixture.componentInstance;
    const bannerElement: HTMLElement = fixture.nativeElement;

    console.log(component)
    console.log(bannerElement)

    pending('development')
  });
});

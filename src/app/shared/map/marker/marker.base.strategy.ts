import {Subject, takeUntil} from "rxjs";
import {Marker, Map} from "leaflet";

export abstract class MarkerBaseStrategy<MarkerType extends Marker> {
  private unsubscribeAddMarker$ = new Subject<void>();
  abstract markers$: Subject<MarkerType>;

  protected constructor(
    protected readonly map: Map
  ) {
  }

  protected abstract addMarkerToMap(marker: MarkerType): void;

  public onMarkerAdded(): void {
    this.markers$
      .pipe(
        takeUntil(this.unsubscribeAddMarker$)
      )
      .subscribe({
        next: (marker) => {
          this.addMarkerToMap(marker);
        }
      })
  }

  public addMarker(newMarker: MarkerType): void {
    if (!newMarker) return;

    this.markers$.next(newMarker);
  }

  abstract clearAllMarkers(): void;

  public unsubscribeAddMarker(): void {
    this.unsubscribeAddMarker$.next();
    this.unsubscribeAddMarker$.complete()
  }
}

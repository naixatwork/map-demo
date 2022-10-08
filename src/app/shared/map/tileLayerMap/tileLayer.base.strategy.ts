import {Map, TileLayer} from 'leaflet';
import {Observable, Subject, takeUntil} from "rxjs";

export abstract class TileLayerBaseStrategy {
  private readonly completeAddTileLayer$ = new Subject<void>();

  abstract loadTileLayer(): Observable<TileLayer>;

  public addTileLayerToMap(map: Map): void {
    const onTileLayerLoaded = (tileLayer: TileLayer): void => {
      tileLayer.addTo(map);
    }

    const onTileLayerFailedToLoad = (): void => {
      console.error(`[TileLayerBaseStrategy]: failed to load tileLayer`)
    }

    this.loadTileLayer()
      .pipe(
        takeUntil(this.completeAddTileLayer$)
      )
      .subscribe({
        next: onTileLayerLoaded,
        error: onTileLayerFailedToLoad
      })
  }

  public unsubscribeAddingTileLayerToMap(): void {
    this.completeAddTileLayer$.complete();
  }
}

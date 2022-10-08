import {Injectable} from '@angular/core';
import {Map, Marker, marker} from 'leaflet';
import {InitializeMapBaseStrategy} from "./initializeMap/initializeMap.base.strategy";
import {LeafletInitializeMapStrategy} from "./initializeMap/leaflet-initialize-map.strategy";
import {TileLayerBaseStrategy} from "./tileLayerMap/tileLayer.base.strategy";
import {OpenstreetmapTileLayerStrategy} from "./tileLayerMap/openstreetmapTileLayer.strategy";
import {Subject, takeUntil} from "rxjs";
import {MarkerBaseStrategy} from "./marker/marker.base.strategy";
import {LeafletMarkerStrategy} from "./marker/leafletMarker.strategy";

@Injectable()
export class MapService {
  private _map!: Map;
  private set map(newMap: MapService['_map']) {
    this._map = newMap;
  }
  public get map(): MapService['_map'] {
    return this._map;
  }

  private readonly initializeMapStrategy: InitializeMapBaseStrategy = new LeafletInitializeMapStrategy();
  private readonly tileLayerStrategy: TileLayerBaseStrategy = new OpenstreetmapTileLayerStrategy();
  private markerStrategy!: MarkerBaseStrategy<Marker>;

  public initializeMap(targetElement: HTMLElement): void {
    const populateMapElement = () => {
      this.map = this.initializeMapStrategy.initializeMap(targetElement);
    }

    const loadTileLayer = () => {
      this.tileLayerStrategy.loadTileLayer();
      this.tileLayerStrategy.addTileLayerToMap(this.map);
    }

    const initializeMarkers = () => {
      this.markerStrategy = new LeafletMarkerStrategy(this.map);
      this.markerStrategy.onMarkerAdded();
    }

    populateMapElement();
    loadTileLayer();
    initializeMarkers();
  }

  public addMarker(newMarker: Marker): void {
    this.markerStrategy.addMarker(newMarker);
  }

  public completeSubscriptions(): void {
    this.markerStrategy.unsubscribeAddMarker();
    this.tileLayerStrategy.unsubscribeAddingTileLayerToMap();
  }
}

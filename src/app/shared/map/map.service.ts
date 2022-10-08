import {Injectable} from '@angular/core';
import {Map} from 'leaflet';
import {InitializeMapBaseStrategy} from "./initializeMap/initializeMap.base.strategy";
import {LeafletInitializeMapStrategy} from "./initializeMap/leaflet-initialize-map.strategy";
import {TileLayerBaseStrategy} from "./tileLayerMap/tileLayer.base.strategy";
import {OpenstreetmapTileLayerStrategy} from "./tileLayerMap/openstreetmapTileLayer.strategy";

@Injectable()
export class MapService {
  private map!: Map;
  private initializeMapStrategy: InitializeMapBaseStrategy = new LeafletInitializeMapStrategy();
  private tileLayerStrategy: TileLayerBaseStrategy = new OpenstreetmapTileLayerStrategy();

  public initializeMap(targetElement: HTMLElement): void {
    this.map = this.initializeMapStrategy.initializeMap(targetElement);
    this.tileLayerStrategy.loadTileLayer();
    this.tileLayerStrategy.addTileLayerToMap(this.map);
  }

  public stopLoadingTileLayer(): void {
    this.tileLayerStrategy.unsubscribeAddingTileLayerToMap();
  }
}

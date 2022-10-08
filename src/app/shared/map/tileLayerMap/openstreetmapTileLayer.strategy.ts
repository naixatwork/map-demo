import {TileLayerBaseStrategy} from "./tileLayer.base.strategy";
import {tileLayer, TileLayer} from "leaflet";
import {from, Observable} from "rxjs";

export class OpenstreetmapTileLayerStrategy extends TileLayerBaseStrategy {
  loadTileLayer(): Observable<TileLayer> {
    const loadTileLayer = async (): Promise<TileLayer> => {
      return Promise.resolve(tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }))
    };

    return from(loadTileLayer())
  }
}

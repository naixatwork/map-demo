import {MarkerBaseStrategy} from "./marker.base.strategy";
import {Map, Marker} from "leaflet";
import {Subject} from "rxjs";

export class LeafletMarkerStrategy extends MarkerBaseStrategy<Marker> {
  override markers$ = new Subject<Marker>();

  constructor(map: Map) {
    super(map);
  }

  override addMarkerToMap(marker: Marker): void {
    marker.addTo(this.map);
  }

  clearAllMarkers(): void {
    // @ts-ignore
    const layers = this.map?._layers;

    for (const index in layers) {
      if(layers[index] instanceof Marker) {
        this.map.removeLayer(layers[index]);
      }
    }
  }
}

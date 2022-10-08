import {MarkerBaseStrategy} from "./marker.base.strategy";
import {Map, Marker} from "leaflet";
import {Subject} from "rxjs";

export class LeafletMarkerStrategy extends MarkerBaseStrategy<Marker> {
  override markers$ = new Subject<Marker>();

  constructor(map: Map) {
    console.log(map)
    super(map);
  }

  override addMarkerToMap(marker: Marker): void {
    console.log(marker)
    marker.addTo(this.map);
  }
}

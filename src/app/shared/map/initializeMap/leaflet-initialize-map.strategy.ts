import {InitializeMapBaseStrategy} from "./initializeMap.base.strategy";
import {map, Map} from "leaflet";

export class LeafletInitializeMapStrategy implements InitializeMapBaseStrategy {
  initializeMap(targetElement: HTMLElement): Map {
    return map(targetElement, {
      center: [51.509865, -0.118092],
      zoom: 10
    });
  }
}

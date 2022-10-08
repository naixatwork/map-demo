import {Map} from 'leaflet';

export interface InitializeMapBaseStrategy {
  initializeMap(targetElement: HTMLElement): Map;
}

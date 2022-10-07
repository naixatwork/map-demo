import {AfterViewInit, Component} from '@angular/core';
import {map, tileLayer, Map} from 'leaflet'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  private map!: Map;

  private initMap(): void {
    this.map = map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}

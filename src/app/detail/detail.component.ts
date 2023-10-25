import { Component, Input, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { GetToiletQuery } from 'src/.sdx-gen/sdk.generated';
import { LocationService } from '../location.service';
import { SdxClientService } from '../sdx-client.service';
import { createMeMarker, createToiletMarker, getLayers } from '../util';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input({ required: true }) id!: string;
  options?: Leaflet.MapOptions;
  toilet?: GetToiletQuery['publicToilet'];

  constructor(
    private client: SdxClientService,
    private location: LocationService
  ) {}

  ngOnInit(): void {
    this.location
      .getLocation()
      .then(() => this.loadData())
      .then(() => this.loadMap());
  }

  /**
   * Load the data from the pod
   */
  private async loadData() {
    this.toilet = await this.client.getToilet(this.id);
  }

  /**
   * Load the map
   */
  private async loadMap() {
    const loc = await this.location.getLocation();
    const meMarker = createMeMarker(loc, '>> Me <<');
    const marker = createToiletMarker(this.toilet!, this.toilet!.name);
    this.options = {
      layers: getLayers([meMarker, marker]),
      zoom: 18,
      center: marker.getLatLng(),
    };
  }
}

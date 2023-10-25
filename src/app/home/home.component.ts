import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Leaflet from 'leaflet';
import { ListToiletsQuery } from 'src/.sdx-gen/sdk.generated';
import { SdxClientService } from '../sdx-client.service';
import { LocationService } from '../location.service';
import {
  createMeMarker,
  createToiletMarker,
  distance,
  getLayers,
} from '../util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  options?: Leaflet.MapOptions;
  myLocation?: { lat: number; lng: number };
  toiletCollection?: ListToiletsQuery['publicToiletCollection'];

  constructor(
    private client: SdxClientService,
    private location: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.location
      .getLocation()
      .then((loc) => (this.myLocation = loc))
      .then(() => this.loadData())
      .then(() => this.loadMap());
  }

  /**
   * Navigate to detail page
   * @param toiletId Id of a PublicToilet
   */
  navigateTo(toiletId: string) {
    this.router.navigate(['/detail', toiletId]);
  }

  /**
   * Distance from my location to toilet (as the eagle flies)
   * @param toilet Toilet to calculate the distance to
   * @returns
   */
  dist(toilet: any) {
    const loc = this.myLocation!;
    return distance(loc, toilet);
  }

  /**
   * Load the data form the pod
   */
  async loadData() {
    const toiletCollection = await this.client.listToilets();
    const loc = await this.location.getLocation();
    this.toiletCollection = toiletCollection
      ?.filter((toilet: any) => !!toilet?.name)
      ?.sort((a: any, b: any) => {
        if (a == null || b == null) return Infinity;
        return distance(loc, a) - distance(loc, b);
      });
  }

  /**
   * Load the map
   */
  private async loadMap() {
    const loc = await this.location.getLocation();
    const meMarker = createMeMarker(loc, '>> Me <<');
    const markers = this.toiletCollection!.filter(
      (toilet) => !!toilet?.geo
    ).map((toilet) => {
      const marker = createToiletMarker(toilet!, toilet!.name);
      marker.on('click', (ev) => this.router.navigate(['/detail', toilet!.id]));
      return marker;
    });
    this.options = {
      layers: getLayers([meMarker, ...markers]),
      zoom: 13,
      center: new Leaflet.LatLng(loc.lat, loc.lng),
    };
  }
}

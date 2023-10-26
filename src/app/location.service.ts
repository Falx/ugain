import { Injectable } from '@angular/core';
import { distance } from './util';

const IGENT = { lat: 51.012558, lng: 3.708458 };

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private myLocation?: { lat: number; lng: number };

  constructor() {}

  async getLocation() {
    if (!this.myLocation) {
      const loc = await new Promise<{ lat: number; lng: number }>(
        (resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (pos) =>
                resolve({
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude,
                }),
              (err) => reject(err)
            );
          } else {
            reject('Geolocation is not supported by this browser.');
          }
        }
      );
      // this.myLocation = loc;
      this.myLocation = IGENT;
    }
    return this.myLocation;
  }
}

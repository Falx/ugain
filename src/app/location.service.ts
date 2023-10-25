import { Injectable } from '@angular/core';

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
      this.myLocation = loc;
    }
    return this.myLocation;
  }
}

import * as Leaflet from 'leaflet';

/**
 * Distance function between a latlng location and a PublicToilet
 * @param myLocation
 * @param toilet
 * @returns
 */
export function distance(
  myLocation: { lat: number; lng: number },
  toilet: any
): number {
  const { lat: lat1, lng: lng1 } = myLocation;
  const { latitude, longitude } = toilet.geo!;
  const lat2 = parseFloat(latitude!);
  const lng2 = parseFloat(longitude!);
  const R = 6371e3;
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const deltaP = p2 - p1;
  const deltaLon = lng2 - lng1;
  const deltaLambda = (deltaLon * Math.PI) / 180;
  const a =
    Math.sin(deltaP / 2) * Math.sin(deltaP / 2) +
    Math.cos(p1) *
      Math.cos(p2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);
  const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * R;
  return d;
}

/**
 * Creates a marker representing the user
 * @param loc
 * @param title
 * @returns
 */
export function createMeMarker(
  loc: { lat: number; lng: number },
  title: string
) {
  return new Leaflet.Marker(new Leaflet.LatLng(loc.lat, loc.lng), {
    icon: new Leaflet.Icon({
      iconSize: [50, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker_orange.svg',
    }),
    title,
  });
}

/**
 * Creates a marker representing a PublicToilet
 * @param toilet
 * @param title
 * @returns
 */
export function createToiletMarker(toilet: any, title: string) {
  const lat = parseFloat(toilet?.geo.latitude!);
  const lng = parseFloat(toilet?.geo.longitude!);
  return new Leaflet.Marker(new Leaflet.LatLng(lat, lng), {
    icon: new Leaflet.Icon({
      iconSize: [50, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker_blue.svg',
    }),
    title,
  });
}

/**
 * Gets the layers for the map
 * @param markers Markers to be displayed on the map
 * @returns
 */
export const getLayers = (markers: Leaflet.Marker[]): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '',
      } as Leaflet.TileLayerOptions
    ),
    ...markers,
  ] as Leaflet.Layer[];
};

export interface ILocation {
  data: {
    coords: {
      accuracy: string;
      altitude: string;
      altitudeAccuracy: string;
      heading: string;
      latitude: string;
      longitude: string;
      speed: string;
    };
    timestamp: string;
  };
}

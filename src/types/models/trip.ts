interface PhotoData {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface PlaceListData {
  placeId: string;
  type: string;
  indexOfDate: number;
  averageTime: number;
  fromTime: string;
  nextTime: string;
  position: number;
  liked?: boolean;
  currentDate: string;
  details: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
      viewport: {
        northeast: {
          lat: number;
          lng: number;
        };
        southwest: {
          lat: number;
          lng: number;
        };
      };
    };
    name: string;
    photos: PhotoData[];
    place_id: string;
    rating: number;
    user_ratings_total: number;
    website?: string;
  };
}

export interface TripApiData {
  userID: number;
  date_range: string[];
  startPlaceId: string;
  startLocation: {
    lat: 16.047079;
    lng: 108.20623;
  };
  types: string[];
  placeList: { [key: string]: PlaceListData[] };
}

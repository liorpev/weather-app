export const ISRAEL_LAT = 31.0461;
export const ISRAEL_LNG = 34.8516;

/**
 * Calculate the great-circle distance between two points on Earth using the Haversine formula
 * @param lat1 Latitude of first point in decimal degrees
 * @param lng1 Longitude of first point in decimal degrees
 * @param lat2 Latitude of second point in decimal degrees
 * @param lng2 Longitude of second point in decimal degrees
 * @returns Distance in kilometers
 */
export const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Calculate distance from Israel to a given point
 * @param lat Latitude in decimal degrees
 * @param lng Longitude in decimal degrees
 * @returns Distance from Israel in kilometers
 */
export const calculateDistanceFromIsrael = (
  lat: number,
  lng: number
): number => {
  return calculateDistance(ISRAEL_LAT, ISRAEL_LNG, lat, lng);
};

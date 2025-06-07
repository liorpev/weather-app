import { queryOptions } from "@tanstack/react-query";
import type { WeatherData } from "../types/weather";

const fetchWeatherData = async (
  lat: number,
  lng: number
): Promise<WeatherData> => {
  const apiKey = "a57a7334f4df4673aed72619250706";

  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lng}&days=4&aqi=no&alerts=no`
  );

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  return response.json();
};

export const weatherQueryOptions = (lat: number, lng: number) =>
  queryOptions({
    queryKey: ["weather", lat, lng],
    queryFn: () => fetchWeatherData(lat, lng),
    enabled: lat !== 0 && lng !== 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

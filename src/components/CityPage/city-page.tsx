import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { weatherQueryOptions } from "../../lib/weather-queries";
import { Route } from "../../routes/city.$cityName";
import { WeatherDetails } from "./components/weather-details";
import { WeatherForecast } from "./components/weather-forecast";

export const CityPage = () => {
  const { cityName } = Route.useParams();
  const searchParams = Route.useSearch();

  const coordinates = {
    lat: searchParams.lat || 0,
    lng: searchParams.lng || 0,
  };

  const { data: weatherData } = useSuspenseQuery(
    weatherQueryOptions(coordinates.lat, coordinates.lng)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {weatherData?.location.name || cityName}
            </h1>
            {weatherData && (
              <div className="text-xl text-gray-600">
                <p className="mb-1">
                  {weatherData.location.region}, {weatherData.location.country}
                </p>
                {coordinates.lat !== 0 && coordinates.lng !== 0 && (
                  <p className="text-lg text-gray-500">
                    {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
                  </p>
                )}
              </div>
            )}
          </div>

          {weatherData && (
            <>
              <WeatherDetails weatherData={weatherData} />
              <WeatherForecast weatherData={weatherData} />
            </>
          )}

          <Link
            to="/"
            search={{
              citySearch: searchParams.citySearch,
              continent: searchParams.continent,
              sortBy: searchParams.sortBy,
              temperatureUnit: searchParams.temperatureUnit,
            }}
            className="my-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium inline-block"
          >
            ← Back to Cities
          </Link>
        </div>
      </div>
    </div>
  );
};

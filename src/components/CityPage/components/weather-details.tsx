import { Route } from "../../../routes/city.$cityName";
import type { WeatherData } from "../../../types/weather";

interface WeatherDetailsProps {
  weatherData: WeatherData;
}

export const WeatherDetails = ({ weatherData }: WeatherDetailsProps) => {
  const searchParams = Route.useSearch();
  const isMetric = searchParams.temperatureUnit === "C";

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Current Weather
        </h2>
        <div className="flex items-center mb-4">
          <img
            src={`https:${weatherData.current.condition.icon}`}
            alt={weatherData.current.condition.text}
            className="w-16 h-16 mr-4"
          />
          <div>
            <div className="text-3xl font-bold text-gray-800">
              {isMetric
                ? weatherData.current.temp_c
                : weatherData.current.temp_f}
              °{isMetric ? "C" : "F"}
            </div>
            <div className="text-gray-600">
              {weatherData.current.condition.text}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Feels like{" "}
          {isMetric
            ? weatherData.current.feelslike_c
            : weatherData.current.feelslike_f}
          °{isMetric ? "C" : "F"}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Details</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Wind:</span>
            <span>
              {weatherData.current.wind_kph} km/h {weatherData.current.wind_dir}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Humidity:</span>
            <span>{weatherData.current.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span>Pressure:</span>
            <span>{weatherData.current.pressure_mb} mb</span>
          </div>
          <div className="flex justify-between">
            <span>Visibility:</span>
            <span>{weatherData.current.vis_km} km</span>
          </div>
          <div className="flex justify-between">
            <span>UV Index:</span>
            <span>{weatherData.current.uv}</span>
          </div>
          <div className="flex justify-between">
            <span>Cloud Cover:</span>
            <span>{weatherData.current.cloud}%</span>
          </div>
          <div className="flex justify-between">
            <span>Local Time:</span>
            <span>{weatherData.location.localtime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

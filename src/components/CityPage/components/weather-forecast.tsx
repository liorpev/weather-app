import { Route } from "../../../routes/city.$cityName";
import type { WeatherData } from "../../../types/weather";

interface WeatherForecastProps {
  weatherData: WeatherData;
}

export const WeatherForecast = ({ weatherData }: WeatherForecastProps) => {
  const searchParams = Route.useSearch();
  const isMetric = searchParams.temperatureUnit === "C";

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        4-Day Forecast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weatherData.forecast.forecastday.map((day) => (
          <div key={day.date} className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="font-semibold text-gray-800 mb-2">
              {formatDate(day.date)}
            </div>

            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="w-12 h-12 mx-auto mb-2"
            />

            <div className="text-sm text-gray-600 mb-3 min-h-[2.5rem] flex items-center justify-center">
              {day.day.condition.text}
            </div>

            <div className="mb-3">
              <div className="text-lg font-bold text-gray-800">
                {isMetric ? day.day.maxtemp_c : day.day.maxtemp_f}°
                {isMetric ? "C" : "F"}
              </div>
              <div className="text-sm text-gray-500">
                {isMetric ? day.day.mintemp_c : day.day.mintemp_f}°
                {isMetric ? "C" : "F"}
              </div>
            </div>

            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Rain:</span>
                <span>{day.day.daily_chance_of_rain}%</span>
              </div>
              <div className="flex justify-between">
                <span>Wind:</span>
                <span>{day.day.maxwind_kph} km/h</span>
              </div>
              <div className="flex justify-between">
                <span>Humidity:</span>
                <span>{day.day.avghumidity}%</span>
              </div>
              <div className="flex justify-between">
                <span>UV Index:</span>
                <span>{day.day.uv}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
              <div className="flex justify-between">
                <span>Sunrise:</span>
                <span>{day.astro.sunrise}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunset:</span>
                <span>{day.astro.sunset}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

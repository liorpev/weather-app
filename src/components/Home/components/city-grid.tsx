import { CityCard } from "./city-card";
import citiesData from "../data.json";
import type { FormState } from "../types";
import { calculateDistanceFromIsrael } from "../../../utils/distance";

interface CityGridProps {
  formState: FormState;
}

export const CityGrid = ({ formState }: CityGridProps) => {
  const { cities } = citiesData;

  const filteredCities = cities.filter((city) => {
    switch (true) {
      case !city.active:
        return false;

      case formState.continent !== "All" &&
        city.continent !== formState.continent:
        return false;

      case formState.citySearch !== "": {
        const searchTerm = formState.citySearch.toLowerCase();
        const cityName = city.name.toLowerCase();
        return cityName.startsWith(searchTerm);
      }

      default:
        return true;
    }
  });

  const sortedCities = [...filteredCities].sort((a, b) => {
    switch (formState.sortBy) {
      case "name":
        return a.name.localeCompare(b.name);

      case "distance": {
        const distanceA = calculateDistanceFromIsrael(
          a.coords.lat,
          a.coords.lng
        );
        const distanceB = calculateDistanceFromIsrael(
          b.coords.lat,
          b.coords.lng
        );
        return distanceA - distanceB;
      }

      default:
        return 0;
    }
  });

  return (
    <div className="mt-8">
      {sortedCities.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-white text-xl mb-3 drop-shadow-lg font-semibold">
            No cities found
          </div>
          <div className="text-white/80 text-base drop-shadow-md">
            Try adjusting your search or continent filter
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {sortedCities.map((city, index) => (
            <CityCard
              key={`${city.name}-${index}`}
              city={city}
              formState={formState}
            />
          ))}
        </div>
      )}
    </div>
  );
};

import { useNavigate } from "@tanstack/react-router";
import type { FormState } from "../types";

interface City {
  name: string;
  continent: string;
  active: boolean;
  country: string;
  description: string;
  image: string;
  coords: {
    lat: number;
    lng: number;
  };
}

interface CityCardProps {
  city: City;
  formState: FormState;
}

export const CityCard = ({ city, formState }: CityCardProps) => {
  const navigate = useNavigate();

  const handleCityClick = () => {
    navigate({
      to: "/city/$cityName",
      params: { cityName: city.name },
      search: {
        citySearch: formState.citySearch,
        continent: formState.continent,
        sortBy: formState.sortBy,
        temperatureUnit: formState.temperatureUnit,
        lat: city.coords.lat.toString(),
        lng: city.coords.lng.toString(),
      },
    });
  };

  return (
    <div
      onClick={handleCityClick}
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-transform hover:scale-105 aspect-square"
      style={{
        backgroundImage: `url(${city.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity group-hover:opacity-95" />

      <div className="absolute inset-0 p-4 flex flex-col text-white">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1 mr-2">
            <h1 className="text-3xl font-bold mb-1 drop-shadow-2xl text-shadow-lg">
              {city.name}
            </h1>
            <p className="text-xl opacity-90 mb-2 drop-shadow-xl">
              {city.country}
            </p>
            <p className="text-md opacity-80 line-clamp-3 drop-shadow-lg">
              {city.description}
            </p>
          </div>

          <span className="inline-block px-3 py-2 text-xs font-medium bg-black/40 backdrop-blur-md text-white rounded-full flex-shrink-0 border border-white/20 drop-shadow-lg">
            {city.continent}
          </span>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

import { CitySearchInput } from "./components/city-search-input";
import { ContinentSelect } from "./components/continent-select";
import { SortToggle } from "./components/sort-toggle";
import { TemperatureToggle } from "./components/temperature-toggle";
import { CityGrid } from "./components/city-grid";
import { CONTINENTS } from "./consts";
import type { FormState } from "./types";
import { Route } from "../../routes/index";

export const Home = () => {
  const searchParams = Route.useSearch();

  const [formState, setFormState] = useState<FormState>({
    citySearch: searchParams.citySearch || "",
    continent: searchParams.continent || CONTINENTS[0].label,
    sortBy: searchParams.sortBy || "name",
    temperatureUnit: searchParams.temperatureUnit || "C",
  });

  const updateFormState = (updates: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="w-full p-2">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-2">
              <CitySearchInput
                value={formState.citySearch}
                onChange={(value: string) =>
                  updateFormState({ citySearch: value })
                }
              />
            </div>
            <div className="flex-2">
              <ContinentSelect
                value={formState.continent}
                onChange={(value: string) =>
                  updateFormState({ continent: value })
                }
              />
            </div>
            <div className="flex flex-row flex-start gap-6 items-start flex-2">
              <SortToggle
                value={formState.sortBy}
                onChange={(value: string) =>
                  updateFormState({ sortBy: value as "name" | "distance" })
                }
              />
              <TemperatureToggle
                value={formState.temperatureUnit}
                onChange={(value: string) =>
                  updateFormState({ temperatureUnit: value as "C" | "F" })
                }
              />
            </div>
          </div>
        </div>

        <CityGrid formState={formState} />
      </div>
    </div>
  );
};

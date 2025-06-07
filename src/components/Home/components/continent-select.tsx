import React from "react";
import { CONTINENTS } from "../consts";

interface ContinentSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const ContinentSelectComponent = ({
  value,
  onChange,
}: ContinentSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="continent"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Continent
      </label>
      <select
        id="continent"
        name="continent"
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
      >
        {CONTINENTS.map((continent) => (
          <option key={continent.value} value={continent.label}>
            {continent.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const ContinentSelect = React.memo(
  ContinentSelectComponent,
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);

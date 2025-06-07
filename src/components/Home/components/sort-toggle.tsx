import React from "react";

interface SortToggleProps {
  value: string;
  onChange: (value: string) => void;
}

const SortToggleComponent = ({ value, onChange }: SortToggleProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600 font-medium">Sort by</label>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="sort-name"
          name="sort"
          value="name"
          checked={value === "name"}
          onChange={handleChange}
          className="sr-only peer/name"
        />
        <label
          htmlFor="sort-name"
          className="text-lg font-medium peer-checked/name:underline cursor-pointer"
        >
          Name
        </label>

        <span className="text-lg text-gray-400">|</span>

        <input
          type="radio"
          id="sort-distance"
          name="sort"
          value="distance"
          checked={value === "distance"}
          onChange={handleChange}
          className="sr-only peer/distance"
        />
        <label
          htmlFor="sort-distance"
          className="text-lg font-medium peer-checked/distance:underline cursor-pointer"
        >
          Distance
        </label>
      </div>
    </div>
  );
};

export const SortToggle = React.memo(
  SortToggleComponent,
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);
